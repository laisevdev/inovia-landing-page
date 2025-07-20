import { useState, useEffect } from 'react';

interface TypewriterOptions {
  text: string;
  speed?: number;
  loop?: boolean;
  pauseAfterComplete?: number;
}

export const useTypewriter = ({ 
  text, 
  speed = 100, 
  loop = true, 
  pauseAfterComplete = 2000 
}: TypewriterOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else if (loop) {
          // Pause before starting to delete
          setTimeout(() => setIsDeleting(true), pauseAfterComplete);
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setDisplayText(text.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, text, speed, loop, pauseAfterComplete]);

  return displayText;
};