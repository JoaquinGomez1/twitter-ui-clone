import { useEffect, useRef, useState } from "react";

export default function useFetch<T>(url: string, options: RequestInit = {}) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current && handleFetch();
    return () => {
      mounted.current = false;
    };
  }, []);

  const handleFetch = () => {
    setIsLoading(true);

    fetch(url, options)
      .then((res) => res.json())
      .then((resData) => setData(resData))
      .catch((err) => setErrorMessage(err));

    setIsLoading(false);
  };

  return { data, isLoading, errorMessage };
}
