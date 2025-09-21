import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Save, Eye, Upload, Image } from 'lucide-react';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  featured_image?: string | null;
  category: string;
  status: 'draft' | 'published' | 'archived';
  author_id?: string;
  read_time?: string | null;
  likes?: number;
  created_at?: string;
  updated_at?: string;
  published_at?: string | null;
}

const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [imageUploading, setImageUploading] = useState(false);
  const [inlineImageUploading, setInlineImageUploading] = useState(false);
  
  const [post, setPost] = useState<BlogPost>({
    title: '',
    slug: '',
    description: '',
    content: '',
    category: 'Inteligência Artificial',
    status: 'draft'
  });

  useEffect(() => {
    checkAuth();
    if (id) {
      fetchPost(id);
    }
  }, [id]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/auth');
      return;
    }
    setUser(session.user);
  };

  const fetchPost = async (postId: string) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', postId)
        .single();

      if (error) {
        toast({
          title: "Erro ao carregar artigo",
          description: error.message,
          variant: "destructive"
        });
        navigate('/meupainel');
      } else {
        setPost(data as BlogPost);
      }
    } catch (error) {
      toast({
        title: "Erro inesperado",
        description: "Tente novamente mais tarde",
        variant: "destructive"
      });
      navigate('/meupainel');
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min`;
  };

  const handleTitleChange = (title: string) => {
    setPost(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    setImageUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(fileName, file);

      if (uploadError) {
        toast({
          title: "Erro no upload",
          description: uploadError.message,
          variant: "destructive"
        });
        return;
      }

      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(fileName);

      setPost(prev => ({
        ...prev,
        featured_image: data.publicUrl
      }));

      toast({
        title: "Imagem enviada!",
        description: "A imagem foi adicionada ao artigo."
      });
    } catch (error) {
      toast({
        title: "Erro inesperado",
        description: "Tente novamente mais tarde",
        variant: "destructive"
      });
    } finally {
      setImageUploading(false);
    }
  };

  const handleInlineImageUpload = async (file: File): Promise<string | null> => {
    if (!user) return null;

    setInlineImageUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/inline/${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(fileName, file);

      if (uploadError) {
        toast({
          title: "Erro no upload",
          description: uploadError.message,
          variant: "destructive"
        });
        return null;
      }

      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(fileName);

      return data.publicUrl;
    } catch (error) {
      toast({
        title: "Erro inesperado",
        description: "Tente novamente mais tarde",
        variant: "destructive"
      });
      return null;
    } finally {
      setInlineImageUploading(false);
    }
  };

  const handleDrop = async (event: React.DragEvent) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length === 0) return;

    for (const file of imageFiles) {
      const imageUrl = await handleInlineImageUpload(file);
      if (imageUrl) {
        const imageMarkdown = `![${file.name}](${imageUrl})`;
        setPost(prev => ({
          ...prev,
          content: prev.content + '\n' + imageMarkdown
        }));
      }
    }
  };

  const handlePaste = async (event: React.ClipboardEvent) => {
    const items = Array.from(event.clipboardData.items);
    const imageItems = items.filter(item => item.type.startsWith('image/'));
    
    if (imageItems.length === 0) return;

    event.preventDefault();
    
    for (const item of imageItems) {
      const file = item.getAsFile();
      if (file) {
        const imageUrl = await handleInlineImageUpload(file);
        if (imageUrl) {
          const imageMarkdown = `![Imagem colada](${imageUrl})`;
          setPost(prev => ({
            ...prev,
            content: prev.content + '\n' + imageMarkdown
          }));
        }
      }
    }
  };

  const customImageCommand = {
    name: 'image-upload',
    keyCommand: 'image-upload',
    buttonProps: { 'aria-label': 'Upload de imagem', title: 'Upload de imagem' },
    icon: (<Upload size={12} />),
    execute: () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = async (event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
          const imageUrl = await handleInlineImageUpload(file);
          if (imageUrl) {
            const imageMarkdown = `![${file.name}](${imageUrl})`;
            setPost(prev => ({
              ...prev,
              content: prev.content + '\n' + imageMarkdown
            }));
          }
        }
      };
      input.click();
    }
  };

  const handleSave = async (status: 'draft' | 'published') => {
    if (!post.title || !post.content || !user) {
      toast({
        title: "Campos obrigatórios",
        description: "Título e conteúdo são obrigatórios",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const postData = {
        ...post,
        status,
        read_time: estimateReadTime(post.content),
        author_id: user.id,
        published_at: status === 'published' ? new Date().toISOString() : null
      };

      if (id) {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', id);

        if (error) throw error;
      } else {
        // Create new post
        const { error } = await supabase
          .from('blog_posts')
          .insert([postData]);

        if (error) throw error;
      }

      toast({
        title: status === 'published' ? "Artigo publicado!" : "Rascunho salvo!",
        description: status === 'published' 
          ? "O artigo foi publicado e está disponível no blog."
          : "Suas alterações foram salvas como rascunho."
      });

      navigate('/meupainel');
    } catch (error: any) {
      toast({
        title: "Erro ao salvar",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    'Inteligência Artificial',
    'Automação',
    'Chatbots',
    'Análise de Dados',
    'Tecnologia',
    'Negócios'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/meupainel">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Link>
              </Button>
              <h1 className="text-lg font-semibold">
                {id ? 'Editar Artigo' : 'Novo Artigo'}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                onClick={() => handleSave('draft')}
                disabled={loading}
              >
                <Save className="h-4 w-4 mr-2" />
                Salvar Rascunho
              </Button>
              <Button 
                onClick={() => handleSave('published')}
                disabled={loading}
              >
                <Eye className="h-4 w-4 mr-2" />
                Publicar
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Basic Info Card */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Informações Básicas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título *</Label>
                <Input
                  id="title"
                  value={post.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Digite o título do artigo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">URL (Slug)</Label>
                <Input
                  id="slug"
                  value={post.slug}
                  onChange={(e) => setPost(prev => ({ ...prev, slug: e.target.value }))}
                  placeholder="url-do-artigo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  value={post.description}
                  onChange={(e) => setPost(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Breve descrição do artigo (para SEO e prévia)"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Categoria</Label>
                  <Select
                    value={post.category}
                    onValueChange={(value) => setPost(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="featured-image">Imagem Destacada</Label>
                  <div className="flex gap-2">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={imageUploading}
                      className="hidden"
                      id="image-upload"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById('image-upload')?.click()}
                      disabled={imageUploading}
                      className="w-full"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      {imageUploading ? 'Enviando...' : 'Enviar Imagem'}
                    </Button>
                  </div>
                  {post.featured_image && (
                    <div className="mt-2">
                      <img
                        src={post.featured_image}
                        alt="Prévia"
                        className="w-full h-32 object-cover rounded border"
                      />
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Editor Card */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Conteúdo do Artigo *</CardTitle>
            </CardHeader>
            <CardContent>
              <div data-color-mode="dark">
                <MDEditor
                  value={post.content}
                  onChange={(value) => setPost(prev => ({ ...prev, content: value || '' }))}
                  preview="edit"
                  height={500}
                  visibleDragbar={false}
                  onDrop={handleDrop}
                  onPaste={handlePaste}
                  extraCommands={[customImageCommand]}
                />
                {inlineImageUploading && (
                  <div className="mt-2 text-sm text-gray-400">
                    Fazendo upload da imagem...
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default BlogEditor;