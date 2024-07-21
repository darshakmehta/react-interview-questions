//  Question 9:  How can you optimize performance when using context in a React application?

// Solution:
// Minimize the number of components that consume the context to avoid unnecessary re-renders.
// Split contexts if necessary, and use React.memo or useMemo to avoid re-rendering components that do not need to re-render when context changes.

import React, { createContext, useContext, useMemo } from 'react';

const MyContext = createContext<number>(0);

const ChildComponent: React.FC = React.memo(() => {
  const value = useContext(MyContext);
  return <div>{value}</div>;
});

const ParentComponent: React.FC = () => {
  const value = useMemo(() => 42, []); // Context value memoization

  return (
    <MyContext.Provider value={value}>
      <ChildComponent />
    </MyContext.Provider>
  );
};

export default ParentComponent;
