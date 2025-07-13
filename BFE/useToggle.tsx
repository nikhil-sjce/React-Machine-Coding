import React , {useEffect, useState} from 'react';
export function useToggle(on: boolean): [boolean, () => void] {
  // your code here
  const [toggle, setToggle] = useState(on);
  const toggleFunction = () => {
    setToggle(!toggle);
  }
  return [toggle, toggleFunction];
}
