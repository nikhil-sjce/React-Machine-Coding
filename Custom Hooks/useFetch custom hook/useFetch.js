import React, { useState, useEffect } from "react";

const useFetch = (initialApiUrl) => {
  const [urlData, setUrlData] = useState(null);
  const [url, setUrl] = useState(initialApiUrl);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      if (!url) return;

      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error("Error occurred while calling the API");
        const data = await response.json();
        setUrlData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getData();
  }, [url]);

  return [urlData, setUrl, error];
};

export default useFetch;
