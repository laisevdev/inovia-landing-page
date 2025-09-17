-- Criar tabela para emails pré-autorizados
CREATE TABLE public.authorized_emails (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL UNIQUE,
  role user_role NOT NULL DEFAULT 'user',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  used boolean NOT NULL DEFAULT false,
  used_at timestamp with time zone,
  authorized_by uuid REFERENCES auth.users(id)
);

-- Habilitar RLS na tabela authorized_emails
ALTER TABLE public.authorized_emails ENABLE ROW LEVEL SECURITY;

-- Criar políticas para authorized_emails
CREATE POLICY "Admins can manage authorized emails" 
ON public.authorized_emails 
FOR ALL 
USING (get_current_user_role() = 'admin');

-- Criar função para verificar se um email está autorizado
CREATE OR REPLACE FUNCTION public.is_email_authorized(email_to_check text)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 
    FROM public.authorized_emails 
    WHERE email = email_to_check 
    AND used = false
  );
$$;

-- Atualizar a função handle_new_user para usar emails autorizados
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Verificar se o email está autorizado
  IF NOT (SELECT is_email_authorized(NEW.email)) THEN
    RAISE EXCEPTION 'Email não autorizado para cadastro';
  END IF;

  -- Obter o role do email autorizado
  INSERT INTO public.user_profiles (user_id, email, role)
  SELECT NEW.id, NEW.email, ae.role
  FROM public.authorized_emails ae
  WHERE ae.email = NEW.email AND ae.used = false;

  -- Marcar o email como usado
  UPDATE public.authorized_emails
  SET used = true, used_at = now()
  WHERE email = NEW.email;

  RETURN NEW;
END;
$$;