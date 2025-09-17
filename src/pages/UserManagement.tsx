import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft, UserPlus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AuthorizedEmail {
  id: string;
  email: string;
  role: 'admin' | 'manager' | 'user';
  created_at: string;
  used: boolean;
  used_at: string | null;
}

const UserManagement = () => {
  const [authorizedEmails, setAuthorizedEmails] = useState<AuthorizedEmail[]>([]);
  const [loading, setLoading] = useState(true);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState<'admin' | 'manager' | 'user'>('user');
  const [addingUser, setAddingUser] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAuthorizedEmails();
  }, []);

  const fetchAuthorizedEmails = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('authorized_emails')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAuthorizedEmails(data || []);
    } catch (error) {
      console.error('Erro ao buscar emails autorizados:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os emails autorizados",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const addNewUser = async () => {
    if (!newUserEmail.trim()) {
      toast({
        title: "Erro",
        description: "Email é obrigatório",
        variant: "destructive",
      });
      return;
    }

    try {
      setAddingUser(true);
      
      // Verificar se o email já está autorizado
      const { data: existingEmail } = await supabase
        .from('authorized_emails')
        .select('email')
        .eq('email', newUserEmail.trim())
        .single();

      if (existingEmail) {
        toast({
          title: "Erro",
          description: "Este email já está autorizado",
          variant: "destructive",
        });
        return;
      }

      // Obter o usuário atual para authorized_by
      const { data: { session } } = await supabase.auth.getSession();
      
      // Criar email autorizado
      const { error } = await supabase
        .from('authorized_emails')
        .insert([
          {
            email: newUserEmail.trim(),
            role: newUserRole,
            authorized_by: session?.user.id
          }
        ]);

      if (error) throw error;

      toast({
        title: "Sucesso",
        description: "Email autorizado com sucesso! O usuário já pode se cadastrar.",
      });

      setNewUserEmail('');
      setNewUserRole('user');
      fetchAuthorizedEmails();
    } catch (error) {
      console.error('Erro ao autorizar email:', error);
      toast({
        title: "Erro",
        description: "Não foi possível autorizar o email",
        variant: "destructive",
      });
    } finally {
      setAddingUser(false);
    }
  };

  const deleteAuthorizedEmail = async (emailId: string) => {
    if (!confirm('Tem certeza que deseja remover esta autorização?')) return;

    try {
      const { error } = await supabase
        .from('authorized_emails')
        .delete()
        .eq('id', emailId);

      if (error) throw error;

      toast({
        title: "Sucesso",
        description: "Autorização removida com sucesso",
      });

      fetchAuthorizedEmails();
    } catch (error) {
      console.error('Erro ao remover autorização:', error);
      toast({
        title: "Erro",
        description: "Não foi possível remover a autorização",
        variant: "destructive",
      });
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'manager':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  const getRoleText = (role: string) => {
    switch (role) {
      case 'admin':
        return 'Administrador';
      case 'manager':
        return 'Gerente';
      default:
        return 'Usuário';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando emails autorizados...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto p-6">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/meupainel')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Painel
          </Button>
          <h1 className="text-3xl font-bold">Gerenciamento de Usuários</h1>
        </div>

        <div className="grid gap-6">
          {/* Adicionar Novo Usuário */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="h-5 w-5" />
                Autorizar Novo Usuário
              </CardTitle>
              <CardDescription>
                Adicione um email para autorizar o cadastro de um novo usuário
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="usuario@exemplo.com"
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="role">Função</Label>
                  <Select value={newUserRole} onValueChange={(value: 'admin' | 'manager' | 'user') => setNewUserRole(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">Usuário</SelectItem>
                      <SelectItem value="manager">Gerente</SelectItem>
                      <SelectItem value="admin">Administrador</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button
                    onClick={addNewUser}
                    disabled={addingUser}
                    className="w-full"
                  >
                    {addingUser ? 'Autorizando...' : 'Autorizar Usuário'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lista de Emails Autorizados */}
          <Card>
            <CardHeader>
              <CardTitle>Emails Autorizados</CardTitle>
              <CardDescription>
                {authorizedEmails.length} email{authorizedEmails.length !== 1 ? 's' : ''} autorizado{authorizedEmails.length !== 1 ? 's' : ''}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {authorizedEmails.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  Nenhum email autorizado
                </div>
              ) : (
                <div className="space-y-4">
                  {authorizedEmails.map((email) => (
                    <div
                      key={email.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-medium">{email.email}</p>
                            <p className="text-sm text-muted-foreground">
                              Autorizado em {new Date(email.created_at).toLocaleDateString('pt-BR')}
                              {email.used && email.used_at && ` • Usado em ${new Date(email.used_at).toLocaleDateString('pt-BR')}`}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={getRoleColor(email.role)}>
                          {getRoleText(email.role)}
                        </Badge>
                        {email.used && (
                          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                            Cadastrado
                          </Badge>
                        )}
                        {!email.used && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteAuthorizedEmail(email.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;