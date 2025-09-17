import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type UserRole = 'admin' | 'manager' | 'user';

export const useUserRole = () => {
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const checkUserRole = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        setUserRole(null);
        setLoading(false);
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from('user_profiles')
        .select('role')
        .eq('user_id', session.user.id)
        .single();

      if (profileError) {
        if (profileError.code === 'PGRST116') {
          // Usuário não tem perfil criado
          setError('Usuário não autorizado');
        } else {
          setError('Erro ao verificar permissões');
        }
        setUserRole(null);
      } else {
        setUserRole(profile.role);
      }
    } catch (err) {
      setError('Erro interno');
      setUserRole(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUserRole();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
          setTimeout(() => {
            checkUserRole();
          }, 0);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const hasAdminAccess = userRole === 'admin' || userRole === 'manager';

  return { userRole, loading, error, hasAdminAccess, refetch: checkUserRole };
};