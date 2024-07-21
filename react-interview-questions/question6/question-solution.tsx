// Question 6: What is the purpose of React.memo, and how does it help with performance?

// Solution:
// React.memo is a higher-order component that memoizes the result of a component rendering.
// It helps avoid unnecessary re-renders of functional components by performing a shallow comparison of props.
// Use it for components that receive the same props frequently but do not need to re-render unless their props change.

import React from 'react';

type Props = { value: number };

const ExpensiveComponent: React.FC<Props> = React.memo(({ value }) => {
  // Expensive rendering logic
  return <div>{value}</div>;
});

export default ExpensiveComponent;
