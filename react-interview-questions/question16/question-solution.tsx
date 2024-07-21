// Question 16: How can you implement a custom hook for data fetching with TypeScript that handles loading, error, and success states?

import React, { useState, useEffect } from 'react';

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

const useFetch = <T,>(url: string): FetchState<T> => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: T = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error.message });
      }
    };

    fetchData();
  }, [url]);

  return state;
};

const DataFetchingComponent: React.FC = () => {
  const { data, loading, error } = useFetch<string[]>(
    'https://api.example.com/data'
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <ul>{data && data.map((item) => <li key={item}>{item}</li>)}</ul>;
};

export default DataFetchingComponent;
