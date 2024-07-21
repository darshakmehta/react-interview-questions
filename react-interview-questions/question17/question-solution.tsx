// Question 17: How can you create a higher-order component (HOC) in React with TypeScript to add additional props?

import React from 'react';

type WithTimestampProps = {
  timestamp: string;
};

const withTimestamp = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P) => {
    const timestamp = new Date().toLocaleString();
    return <Component {...props} timestamp={timestamp} />;
  };
};

type MyComponentProps = {
  message: string;
} & WithTimestampProps;

const MyComponent: React.FC<MyComponentProps> = ({ message, timestamp }) => (
  <div>
    <p>{message}</p>
    <p>{timestamp}</p>
  </div>
);

const MyComponentWithTimestamp = withTimestamp(MyComponent);

export default MyComponentWithTimestamp;
