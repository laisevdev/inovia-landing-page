import { useState, useEffect, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

interface BlogPost {
  title: string;
  slug: string;
  description: string;
  content: string;
  category: string;
  featured_image?: string | null;
}

const DRAFT_STORAGE_KEY = 'blog_editor_draft';
const AUTO_SAVE_INTERVAL = 30000; // 30 segundos

export const useDraftPersistence = (postId?: string) => {
  const { toast } = useToast();
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const getStorageKey = useCallback(() => {
    return postId ? `${DRAFT_STORAGE_KEY}_${postId}` : DRAFT_STORAGE_KEY;
  }, [postId]);

  const saveDraft = useCallback((post: BlogPost, showToast: boolean = false) => {
    try {
      const draftData = {
        ...post,
        timestamp: Date.now(),
        url: window.location.pathname
      };
      
      sessionStorage.setItem(getStorageKey(), JSON.stringify(draftData));
      setLastSaved(new Date());
      setHasUnsavedChanges(false);
      
      if (showToast) {
        toast({
          title: "Rascunho salvo automaticamente",
          description: "Suas alterações foram salvas localmente."
        });
      }
    } catch (error) {
      console.warn('Erro ao salvar rascunho:', error);
    }
  }, [getStorageKey, toast]);

  const loadDraft = useCallback((): BlogPost | null => {
    try {
      const saved = sessionStorage.getItem(getStorageKey());
      if (!saved) return null;
      
      const parsed = JSON.parse(saved);
      
      // Verificar se o rascunho não é muito antigo (24 horas)
      const maxAge = 24 * 60 * 60 * 1000;
      if (Date.now() - parsed.timestamp > maxAge) {
        sessionStorage.removeItem(getStorageKey());
        return null;
      }
      
      // Remover propriedades de controle
      const { timestamp, url, ...postData } = parsed;
      return postData;
    } catch (error) {
      console.warn('Erro ao carregar rascunho:', error);
      return null;
    }
  }, [getStorageKey]);

  const clearDraft = useCallback(() => {
    try {
      sessionStorage.removeItem(getStorageKey());
      setHasUnsavedChanges(false);
      setLastSaved(null);
    } catch (error) {
      console.warn('Erro ao limpar rascunho:', error);
    }
  }, [getStorageKey]);

  const markAsChanged = useCallback(() => {
    setHasUnsavedChanges(true);
  }, []);

  // Auto-save
  useEffect(() => {
    if (!hasUnsavedChanges) return;

    const autoSaveTimeout = setTimeout(() => {
      // Esta função será chamada pelo componente pai
      const event = new CustomEvent('autoSaveDraft');
      window.dispatchEvent(event);
    }, AUTO_SAVE_INTERVAL);

    return () => clearTimeout(autoSaveTimeout);
  }, [hasUnsavedChanges]);

  // Prevenir saída com mudanças não salvas
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = 'Você tem alterações não salvas. Tem certeza que deseja sair?';
        return e.returnValue;
      }
    };

    const handlePopState = (e: PopStateEvent) => {
      if (hasUnsavedChanges) {
        const confirmLeave = window.confirm(
          'Você tem alterações não salvas. Tem certeza que deseja sair?'
        );
        if (!confirmLeave) {
          e.preventDefault();
          window.history.pushState(null, '', window.location.href);
        }
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [hasUnsavedChanges]);

  return {
    saveDraft,
    loadDraft,
    clearDraft,
    markAsChanged,
    hasUnsavedChanges,
    lastSaved
  };
};