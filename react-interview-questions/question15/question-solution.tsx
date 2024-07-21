//  Question 15: How can you implement debounce and throttle for an input field in a React TypeScript application to optimize performance?

// Solution:
// Debouncing ensures that the event handler is only invoked after a certain period of inactivity.
// This is useful for actions like search input, where you want to wait until the user has stopped typing.

// Solution Using Debounce
import React, { useState, useEffect } from 'react';

const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const DebouncedInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500ms debounce

  useEffect(() => {
    if (debouncedValue) {
      // Fetch data or perform actions based on debounced input
      console.log('Fetching data for', debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <input
      type='text'
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder='Type to search'
    />
  );
};

export default DebouncedInput;

// Solution Using Throttle
// Throttling ensures that the event handler is only invoked at most once within a specified period.
// This is useful for events like window resizing or scrolling, where you want to limit the number of times the handler is called.

import React, { useState, useEffect, useRef } from 'react';

const useThrottle = (callback: () => void, delay: number) => {
  const lastCall = useRef<number>(0);

  return () => {
    const now = Date.now();
    if (now - lastCall.current >= delay) {
      callback();
      lastCall.current = now;
    }
  };
};

const ThrottledResize: React.FC = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = useThrottle(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, 1000); // 1000ms throttle

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <div>
      <p>
        Window size: {windowSize.width} x {windowSize.height}
      </p>
    </div>
  );
};

export default ThrottledResize;

// Explanation
// Debounce:

// useDebounce is a custom hook that returns a debounced value.
// The input field's value is debounced with a 500ms delay.
// useEffect triggers a console log (or any other action) when the debounced value changes, simulating an API call.
// Throttle:

// useThrottle is a custom hook that returns a throttled version of a callback function.
// The window resize event handler is throttled to trigger at most once every 1000ms.
// useEffect adds and cleans up the event listener for window resize.
// These techniques help in optimizing performance by controlling the frequency of function executions for events that can fire rapidly.
