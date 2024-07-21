//  Question 10: How can you improve the performance of a React application that has many re-renders due to state changes?

// Solution:
// Use React.memo to prevent re-renders of functional components.
// Use useCallback and useMemo to memoize functions and values.
// Optimize state updates by batching them or using functional updates.
// Avoid passing new props or functions on every render.

import React, { useState, useCallback } from 'react';

const ExpensiveComponent: React.FC<{ onClick: () => void }> = React.memo(
  ({ onClick }) => {
    // Expensive rendering logic
    return <button onClick={onClick}>Click Me</button>;
  }
);

const ParentComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <ExpensiveComponent onClick={handleClick} />
      <div>Count: {count}</div>
    </div>
  );
};

export default ParentComponent;
