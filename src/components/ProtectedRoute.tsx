import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, ArrowLeft } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'manager';
}

// Cache para evitar re-verificações desnecessárias
const ACCESS_CACHE_KEY = 'protected_route_access';
const ACCESS_CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

interface CachedAccess {
  hasAccess: boolean;
  userRole: string;
  timestamp: number;
  userId: string;
}

export const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const getCachedAccess = useCallback((): CachedAccess | null => {
    try {
      const cached = sessionStorage.getItem(ACCESS_CACHE_KEY);
      if (!cached) return null;
      
      const parsedCache: CachedAccess = JSON.parse(cached);
      const isExpired = Date.now() - parsedCache.timestamp > ACCESS_CACHE_DURATION;
      
      if (isExpired) {
        sessionStorage.removeItem(ACCESS_CACHE_KEY);
        return null;
      }
      
      return parsedCache;
    } catch {
      sessionStorage.removeItem(ACCESS_CACHE_KEY);
      return null;
    }
  }, []);

  const setCachedAccess = useCallback((data: Omit<CachedAccess, 'timestamp'>) => {
    try {
      const cacheData: CachedAccess = {
        ...data,
        timestamp: Date.now()
      };
      sessionStorage.setItem(ACCESS_CACHE_KEY, JSON.stringify(cacheData));
    } catch {
      // Silently fail if sessionStorage is not available
    }
  }, []);

  const checkAccess = useCallback(async (useCache: boolean = true) => {
    try {
      setLoading(true);
      setError(null);

      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        sessionStorage.removeItem(ACCESS_CACHE_KEY);
        navigate('/auth');
        return;
      }

      // Verificar cache primeiro se permitido
      if (useCache) {
        const cached = getCachedAccess();
        if (cached && cached.userId === session.user.id) {
          const requiredAccess = requiredRole ? cached.userRole === requiredRole : 
            (cached.userRole === 'admin' || cached.userRole === 'manager');
          
          if (requiredAccess && cached.hasAccess) {
            setHasAccess(true);
            setLoading(false);
            return;
          }
        }
      }

      const { data: profile, error: profileError } = await supabase
        .from('user_profiles')
        .select('role')
        .eq('user_id', session.user.id)
        .single();

      if (profileError) {
        sessionStorage.removeItem(ACCESS_CACHE_KEY);
        if (profileError.code === 'PGRST116') {
          setError('Usuário não autorizado');
        } else {
          setError('Erro ao verificar permissões');
        }
        setHasAccess(false);
      } else {
        const userRole = profile.role;
        const hasValidRole = requiredRole ? userRole === requiredRole : 
          (userRole === 'admin' || userRole === 'manager');
        
        // Cachear o resultado
        setCachedAccess({
          hasAccess: hasValidRole,
          userRole,
          userId: session.user.id
        });
        
        setHasAccess(hasValidRole);
        
        if (!hasValidRole) {
          setError('Permissão insuficiente');
        }
      }
    } catch (err) {
      sessionStorage.removeItem(ACCESS_CACHE_KEY);
      setError('Erro interno');
      setHasAccess(false);
    } finally {
      setLoading(false);
    }
  }, [navigate, requiredRole, getCachedAccess, setCachedAccess]);

  useEffect(() => {
    let initialCheckDone = false;

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'INITIAL_SESSION') {
          // Aguarda a sessão inicial ser carregada antes de verificar acesso
          if (!initialCheckDone) {
            checkAccess(true);
            initialCheckDone = true;
          }
        } else if (event === 'SIGNED_OUT') {
          sessionStorage.removeItem(ACCESS_CACHE_KEY);
          navigate('/auth');
        } else if (event === 'SIGNED_IN') {
          // Limpar cache e verificar novamente
          sessionStorage.removeItem(ACCESS_CACHE_KEY);
          setTimeout(() => {
            checkAccess(false);
          }, 100);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [checkAccess, navigate]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <Card className="w-96">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              <span>Verificando permissões...</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Error or no access
  if (error || !hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-destructive" />
            </div>
            <CardTitle className="text-xl">Acesso Negado</CardTitle>
            <CardDescription>
              Você não tem permissão para acessar esta área.
              {error && (
                <span className="block mt-2 text-sm text-muted-foreground">
                  {error}
                </span>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Esta área é restrita a administradores e gerentes autorizados.
            </p>
            <div className="space-y-2">
              <Button 
                onClick={() => navigate('/')} 
                className="w-full"
                variant="default"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Site
              </Button>
              <Button 
                onClick={() => navigate('/auth')} 
                className="w-full"
                variant="outline"
              >
                Fazer Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // User has proper access
  return <>{children}</>;
};