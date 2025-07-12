import React, {useRef, useEffect} from 'react';
export function usePrevious<T>(value: T): T | undefined {
  const previosValue = useRef<T | undefined>();

  useEffect(() => {
    previosValue.current = value;
  }, [value])

  return previosValue.current
  
}
