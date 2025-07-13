import React, {EffectCallback, DependencyList, useEffect, useRef} from 'react';

export function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  // your code here
  const currentRender = useRef(true);

  useEffect(() => {
    if(currentRender.current === true){
      currentRender.current = false;
      return;
    }
    return effect();
    }, deps)
}
