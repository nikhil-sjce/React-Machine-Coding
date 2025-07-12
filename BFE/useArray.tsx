import React, { useState, useEffect, useCallback } from 'react'

type UseArrayActions<T> = {
  push: (item: T) => void,
  removeByIndex: (index: number) => void
}

export function useArray<T>(initialValue: T[]): { value: T[] } & UseArrayActions<T> {
  const [list, setList] = useState<T[]>(initialValue);

  const pushElement = useCallback((element: T) => {
    setList((prev) => [...prev, element]);
  }, [])

  const removeByIndex = useCallback((index: number) => {
    setList((prev) => {
      const newList = prev.filter((_, elementIndex) => elementIndex !== index);
      return newList;
    })
  }, []) 

  useEffect(() => {
  setList(initialValue);
  }, [initialValue]);


  return {value: list, push: pushElement, removeByIndex}

}
