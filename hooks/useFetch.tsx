import { useEffect, useRef, useState, useCallback } from "react";

export default function useFetch<T>(url: string, options: RequestInit = {}) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const mounted = useRef(true);

  const handleFetch = () => {
    setIsLoading(true);

    fetch(url, options)
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    mounted.current && handleFetch();
    return () => {
      mounted.current = false;
    };
  }, []);

  const makeRequest = useCallback(handleFetch, [url]);

  return { data, isLoading, errorMessage, makeRequest };
}
