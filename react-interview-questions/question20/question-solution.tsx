// Question 20: How can you use TypeScript to create a dynamic component loader with React.lazy and Suspense?

import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const DynamicComponentLoader: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default DynamicComponentLoader;
