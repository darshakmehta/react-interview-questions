//  Question 13: How can you handle performance optimization when dealing with large forms or complex state logic?

// Solution:

// Split the form into smaller components.
// Use useReducer for complex state logic.
// Memoize expensive computations.
// Use React.lazy and Suspense for code-splitting large forms.

import React, { useReducer } from 'react';

type State = { count: number };
type Action = { type: 'increment' | 'decrement' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const ComplexForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <div>Count: {state.count}</div>
    </div>
  );
};

export default ComplexForm;
