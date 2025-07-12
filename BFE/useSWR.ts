import React, {useState, useEffect} from 'react'
export function useSWR<T = any, E = any>(
  _key: string,
  fetcher: () => T | Promise<T>
): {
  data?: T
  error?: E
} {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<E>();
  const fetcherResult = fetcher();

  useEffect(() => {
    const fetchData = async() => {
      try{
        const dataResponse = await fetcherResult;
        setData(dataResponse);
      }catch(err){
        setError(err)
      }
      // Promise.resolve(fetcher())
      // .then((response) => {setData(response)})
      // .catch((err) => {setError(err)})
    }

    if(fetcherResult instanceof Promise){
      fetchData()
    }
  }, [fetcher, _key])

  const result: T|undefined = fetcherResult instanceof Promise? data : fetcherResult;

  return {data: result, error};

}

