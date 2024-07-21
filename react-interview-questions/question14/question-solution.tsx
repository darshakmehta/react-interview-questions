//  Question 14: How can you optimize performance when fetching data in React components?

// Solution:
// Use useEffect with proper dependency arrays to fetch data.
// Implement caching or use a library like React Query to manage server state.
// Debounce or throttle requests to prevent excessive network calls.

import React, { useEffect, useState } from 'react';

const fetchData = async (): Promise<string[]> => {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
};

const DataFetchingComponent: React.FC = () => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const result = await fetchData();
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (error) {
        // Handle error
      }
    };

    loadData();

    return () => {
      isMounted = false; // Cleanup to avoid updating state on unmounted component
    };
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default DataFetchingComponent;
