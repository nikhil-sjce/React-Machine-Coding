import React, {useState, useEffect} from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debauncedValue, setDebauncedValue] = useState(value);

  useEffect(()=> {
    const timeoutFn = setTimeout(() => {
      setDebauncedValue(value);
    }, delay)
    return () => clearTimeout(timeoutFn);
  }, [value, delay])

  return debauncedValue;

}
