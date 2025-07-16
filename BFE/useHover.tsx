import { useState, useCallback, useRef, useEffect, RefCallback } from 'react';

export function useHover<T extends HTMLElement>(): [RefCallback<T>, boolean] {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T | null>(null);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const setRef: RefCallback<T> = useCallback((node) => {
    if (ref.current) {
      ref.current.removeEventListener('mouseenter', handleMouseEnter);
      ref.current.removeEventListener('mouseleave', handleMouseLeave);
    }

    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
    }

    ref.current = node;
  }, [handleMouseEnter, handleMouseLeave]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mouseenter', handleMouseEnter);
        ref.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return [setRef, isHovered];
}
