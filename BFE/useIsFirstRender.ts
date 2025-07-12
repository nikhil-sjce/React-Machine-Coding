import React, {useRef, useEffect} from 'react';
export function useIsFirstRender(): boolean {
  // your code here
  let firstRender = useRef(true);

  useEffect(() => {
    if(firstRender){
      firstRender.current = false;
    }
  }, [firstRender])

  return firstRender.current;
}
