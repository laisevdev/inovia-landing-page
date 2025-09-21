import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';
import { useUserRole } from '@/hooks/useUserRole';
import { migrateLegacyPosts } from '@/utils/migrateBlogPosts';
import { Plus, Edit, Trash2, Eye, LogOut, Brain, FileText, Calendar, Users, Download } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  featured_image: string | null;
  category: string;
  status: 'draft' | 'published' | 'archived';
  author_id: string;
  read_time: string | null;
  likes: number;
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

const AdminDashboard = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [migrating, setMigrating] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { userRole, hasAdminAccess } = useUserRole();

  useEffect(() => {
    checkAuth();
    fetchPosts();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/auth');
      return;
    }
    
    setUser(session.user);

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!session) {
          navigate('/auth');
        } else {
          setUser(session.user);
        }
      }
    );

    return () => subscription.unsubscribe();
  };

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast({
          title: "Erro ao carregar posts",
          description: error.message,
          variant: "destructive"
        });
      } else {
        setPosts((data || []) as BlogPost[]);
      }
    } catch (error) {
      toast({
        title: "Erro inesperado",
        description: "Tente recarregar a página",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Erro ao sair",
        description: error.message,
        variant: "destructive"
      });
    } else {
      navigate('/');
    }
  };

  const deletePost = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este artigo?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) {
        toast({
          title: "Erro ao excluir",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Artigo excluído!",
          description: "O artigo foi removido com sucesso."
        });
        fetchPosts();
      }
    } catch (error) {
      toast({
        title: "Erro inesperado",
        description: "Tente novamente mais tarde",
        variant: "destructive"
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-500';
      case 'draft':
        return 'bg-yellow-500';
      case 'archived':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published':
        return 'Publicado';
      case 'draft':
        return 'Rascunho';
      case 'archived':
        return 'Arquivado';
      default:
        return status;
    }
  };

  const getUsernameFromEmail = (email: string) => {
    return email.split('@')[0];
  };

  const publishPost = async (id: string) => {
    if (!confirm('Tem certeza que deseja publicar este artigo?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ 
          status: 'published',
          published_at: new Date().toISOString()
        })
        .eq('id', id);

      if (error) {
        toast({
          title: "Erro ao publicar",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Artigo publicado!",
          description: "O artigo foi publicado com sucesso e está disponível no blog."
        });
        fetchPosts();
      }
    } catch (error) {
      toast({
        title: "Erro inesperado",
        description: "Tente novamente mais tarde",
        variant: "destructive"
      });
    }
  };

  const handleMigrateLegacyPosts = async () => {
    if (!confirm('Deseja migrar os artigos legados para o banco de dados? Esta ação irá importar os artigos que ainda não existem no banco.')) return;

    setMigrating(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('Usuário não autenticado');
      }

      // Call the migration with current user as author
      const result = await migrateLegacyPosts(user.id);
      
      if (result.success) {
        toast({
          title: "Migração concluída!",
          description: "Os artigos legados foram importados com sucesso."
        });
        fetchPosts(); // Refresh the posts list
      } else {
        toast({
          title: "Erro na migração",
          description: result.message || "Ocorreu um erro durante a migração",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Erro na migração:', error);
      toast({
        title: "Erro na migração",
        description: "Ocorreu um erro inesperado durante a migração",
        variant: "destructive"
      });
    } finally {
      setMigrating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <TooltipProvider delayDuration={300} skipDelayDuration={100} disableHoverableContent={false}>
      <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">InovIA</span>
              </Link>
              <h1 className="text-xl font-semibold">Painel Administrativo</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                Bem-vindo, {user?.email ? getUsernameFromEmail(user.email) : ''}
              </span>
              {hasAdminAccess && userRole === 'admin' && (
                <Button variant="outline" size="sm" asChild>
                  <Link to="/meupainel/usuarios">
                    <Users className="h-4 w-4 mr-2" />
                    Usuários
                  </Link>
                </Button>
              )}
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Gerenciar Artigos</h2>
            <p className="text-gray-400">
              Crie, edite e publique artigos do seu blog
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              onClick={handleMigrateLegacyPosts}
              disabled={migrating}
            >
              {migrating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                  Migrando...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Migrar Artigos Legados
                </>
              )}
            </Button>
            <Button asChild>
              <Link to="/meupainel/blog/novo">
                <Plus className="h-4 w-4 mr-2" />
                Novo Artigo
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total de Artigos</CardTitle>
              <FileText className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{posts.length}</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Publicados</CardTitle>
              <Eye className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {posts.filter(p => p.status === 'published').length}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Rascunhos</CardTitle>
              <Edit className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {posts.filter(p => p.status === 'draft').length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Posts List */}
        <div className="space-y-4">
          {posts.length === 0 ? (
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8 text-center">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Nenhum artigo encontrado</h3>
                <p className="text-gray-400 mb-4">
                  Comece criando seu primeiro artigo para o blog
                </p>
                <Button asChild>
                  <Link to="/meupainel/blog/novo">
                    <Plus className="h-4 w-4 mr-2" />
                    Criar Primeiro Artigo
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            posts.map((post) => (
              <Card key={post.id} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg text-white">{post.title}</h3>
                        <Badge className={getStatusColor(post.status)}>
                          {getStatusText(post.status)}
                        </Badge>
                        <Badge variant="outline">{post.category}</Badge>
                      </div>
                      <p className="text-gray-400 mb-3 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Criado em {format(new Date(post.created_at), 'dd/MM/yyyy', { locale: ptBR })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {post.likes} curtidas
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      {post.status === 'published' && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/blog/${post.slug}`} target="_blank">
                                <Eye className="h-4 w-4" />
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Visualizar artigo publicado</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                      {post.status === 'draft' && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button 
                              variant="default" 
                              size="sm"
                              onClick={() => publishPost(post.id)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              Publicar
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Publicar artigo</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/meupainel/blog/editar/${post.id}`}>
                              <Edit className="h-4 w-4" />
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Editar artigo</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => deletePost(post.id)}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Excluir artigo</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
      </div>
    </TooltipProvider>
  );
};

export default AdminDashboard;