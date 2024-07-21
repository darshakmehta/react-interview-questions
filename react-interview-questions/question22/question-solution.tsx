// Question 22: How can you implement a render props component in TypeScript?

import React from 'react';

type RenderProps = {
  render: (count: number, increment: () => void) => React.ReactNode;
};

const RenderPropsComponent: React.FC<RenderProps> = ({ render }) => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return <>{render(count, increment)}</>;
};

const App: React.FC = () => (
  <RenderPropsComponent
    render={(count, increment) => (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    )}
  />
);

export default App;
