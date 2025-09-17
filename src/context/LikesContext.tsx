import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface LikesContextType {
  likes: { [key: string]: number };
  likedPosts: string[];
  likePost: (postId: string) => void;
  isPostLiked: (postId: string) => boolean;
  getPostLikes: (postId: string) => number;
}

const LikesContext = createContext<LikesContextType | undefined>(undefined);

const INITIAL_LIKES = {
  "1": 24,
  "2": 18,
  "3": 15
};

export const LikesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize from localStorage or use initial values
  const [likes, setLikes] = useState<{ [key: string]: number }>(() => {
    const stored = localStorage.getItem('blog-likes');
    return stored ? JSON.parse(stored) : INITIAL_LIKES;
  });

  const [likedPosts, setLikedPosts] = useState<string[]>(() => {
    const stored = localStorage.getItem('liked-posts');
    return stored ? JSON.parse(stored) : [];
  });

  // Persist to localStorage whenever likes change
  useEffect(() => {
    localStorage.setItem('blog-likes', JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem('liked-posts', JSON.stringify(likedPosts));
  }, [likedPosts]);

  const likePost = (postId: string) => {
    const isLiked = likedPosts.includes(postId);
    
    if (isLiked) {
      // Remove like
      setLikedPosts(prev => prev.filter(id => id !== postId));
      setLikes(prev => ({ ...prev, [postId]: Math.max(0, prev[postId] - 1) }));
    } else {
      // Add like
      setLikedPosts(prev => [...prev, postId]);
      setLikes(prev => ({ ...prev, [postId]: (prev[postId] || 0) + 1 }));
    }
  };

  const isPostLiked = (postId: string): boolean => {
    return likedPosts.includes(postId);
  };

  const getPostLikes = (postId: string): number => {
    return likes[postId] || 0;
  };

  const value: LikesContextType = {
    likes,
    likedPosts,
    likePost,
    isPostLiked,
    getPostLikes,
  };

  return (
    <LikesContext.Provider value={value}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = (): LikesContextType => {
  const context = useContext(LikesContext);
  if (context === undefined) {
    throw new Error('useLikes must be used within a LikesProvider');
  }
  return context;
};