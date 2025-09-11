import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface LikesContextType {
  likes: { [key: number]: number };
  likedPosts: number[];
  likePost: (postId: number) => void;
  isPostLiked: (postId: number) => boolean;
  getPostLikes: (postId: number) => number;
}

const LikesContext = createContext<LikesContextType | undefined>(undefined);

const INITIAL_LIKES = {
  1: 24,
  2: 18,
  3: 15
};

export const LikesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize from localStorage or use initial values
  const [likes, setLikes] = useState<{ [key: number]: number }>(() => {
    const stored = localStorage.getItem('blog-likes');
    return stored ? JSON.parse(stored) : INITIAL_LIKES;
  });

  const [likedPosts, setLikedPosts] = useState<number[]>(() => {
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

  const likePost = (postId: number) => {
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

  const isPostLiked = (postId: number): boolean => {
    return likedPosts.includes(postId);
  };

  const getPostLikes = (postId: number): number => {
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