//  Question 11: What is the purpose of useTransition, and how can it be used to improve performance?

// Solution:
// useTransition is a React hook that helps manage state transitions without blocking user interactions.
// It allows you to mark updates as non-urgent, which can help prevent the UI from freezing during expensive state updates.

import React, { useState, useTransition } from 'react';

const App: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setInput(event.target.value);
    });
  };

  return (
    <div>
      <input type='text' value={input} onChange={handleChange} />
      {isPending && <div>Loading...</div>}
    </div>
  );
};

export default App;
