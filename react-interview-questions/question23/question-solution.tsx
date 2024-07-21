// Question 23: How can you use TypeScript to create a compound component pattern in React?

import React from 'react';

type TabProps = {
  label: string;
  children: React.ReactNode;
};

const Tab: React.FC<TabProps> = ({ children }) => <div>{children}</div>;

type TabsProps = {
  children: React.ReactNode;
};

const Tabs: React.FC<TabsProps> & { Tab: React.FC<TabProps> } = ({
  children,
}) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div>
      <div>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <button onClick={() => handleClick(index)}>
                {child.props.label}
              </button>
            );
          }
          return null;
        })}
      </div>
      <div>{React.Children.toArray(children)[selectedTab]}</div>
    </div>
  );
};

Tabs.Tab = Tab;

const App: React.FC = () => (
  <Tabs>
    <Tabs.Tab label='Tab 1'>Content of Tab 1</Tabs.Tab>
    <Tabs.Tab label='Tab 2'>Content of Tab 2</Tabs.Tab>
  </Tabs>
);

export default App;
