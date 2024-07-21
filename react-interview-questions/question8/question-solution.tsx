//  Question 8: What is the role of useMemo, and how can it improve performance?

// Solution:
// useMemo is a React hook that memoizes the result of a computation between renders.
// It can prevent expensive calculations from running on every render by returning the cached result if dependencies haven’t changed.

import React, { useMemo } from 'react';

const ExpensiveComponent: React.FC<{ numbers: number[] }> = ({ numbers }) => {
  const sum = useMemo(() => numbers.reduce((a, b) => a + b, 0), [numbers]);

  return <div>Sum: {sum}</div>;
};

export default ExpensiveComponent;
