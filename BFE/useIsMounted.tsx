export function useIsMounted(): () => boolean {
  // your code here
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    }
  }, [])

  return () => isMounted.current;
}
