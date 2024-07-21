//  Question 12: How can you prevent unnecessary updates of derived state in React components?

// Solution:
// Use useMemo to memoize derived state so that it only recalculates when its dependencies change.

import React, { useState, useMemo } from 'react';

const DerivedStateComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  const derivedValue = useMemo(() => {
    return count * 2; // Expensive calculation
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>Derived Value: {derivedValue}</div>
    </div>
  );
};

export default DerivedStateComponent;
