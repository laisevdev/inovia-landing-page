-- Inserir o primeiro usuário admin baseado no usuário existente
INSERT INTO public.user_profiles (user_id, email, role)
VALUES ('a5adfc35-4554-44c8-b8aa-05b2a1e9836d', 'laisevalves@gmail.com', 'admin')
ON CONFLICT (user_id) DO UPDATE SET role = 'admin';