import React, {useRef, useEffect} from 'react';
export function useTimeout(callback: () => void, delay: number) {
  const updatedCallback = useRef(callback)

  useEffect(() => {
    console.log("callBack", callback)
    updatedCallback.current = callback;
  }, [callback])

  useEffect(() => {
    if(delay === null || delay === undefined) return;
    const id = setTimeout(() => updatedCallback.current(), delay);
    return () => clearTimeout(id);
  }, [delay])

}
