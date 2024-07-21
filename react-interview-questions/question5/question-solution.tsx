// Question 5: How can you optimize the rendering of a large list of items?

// Solution:
// Use React.memo for functional components or PureComponent for class components to prevent unnecessary re-renders. /
// For very large lists, consider using virtualization libraries like react-window or react-virtualized to render only the visible items.
// If react-window provides the functionality your project needs, I would strongly recommend using it instead of react-virtualized

import React from 'react';
import { FixedSizeList as List } from 'react-window';

const Row = ({
  index,
  style,
}: {
  index: number;
  style: React.CSSProperties;
}) => <div style={style}>Row {index}</div>;

const LargeList: React.FC = () => (
  <List height={150} itemCount={1000} itemSize={35} width={300}>
    {Row}
  </List>
);

export default LargeList;
