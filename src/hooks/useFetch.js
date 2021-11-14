import { useState, useEffect, useCallback } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
      setError(null);
    } catch (e) {
      setError(e.message);
      setData([]);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getData(url);
  }, [getData, url]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;
