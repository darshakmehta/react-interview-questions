// Question 7: How can you prevent unnecessary re-renders of child components in a list?

// Solution:
// Use React.memo or useCallback to prevent unnecessary re-renders.
// Additionally, make sure to use stable callback functions and props by memoizing them with useCallback or useMemo.

import React, { useCallback } from 'react';

type ItemProps = { id: number; onClick: () => void };

const ListItem: React.FC<ItemProps> = React.memo(({ id, onClick }) => (
  <div onClick={onClick}>Item {id}</div>
));

const List: React.FC = () => {
  const handleClick = useCallback((id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      {[1, 2, 3].map((id) => (
        <ListItem key={id} id={id} onClick={() => handleClick(id)} />
      ))}
    </div>
  );
};

export default List;
