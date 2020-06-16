import React from 'react';
import { DefaultPalette, Stack, IStackItemStyles } from 'office-ui-fabric-react';
import { NavFabricDemoAppExample } from '../widgets/nav';
import { ListTask } from '../widgets/listTask';

const stackItemStyles: IStackItemStyles = {
  root: {
    display: 'flex',
  },
};
const nonShrinkingStackItemStyles: IStackItemStyles = {
  root: {
    background: DefaultPalette.neutralLighter,
    display: 'flex',
  },
};

export const App: React.FunctionComponent = () => {
  return (
    <Stack
      horizontal
    >
      <Stack.Item disableShrink styles={nonShrinkingStackItemStyles}>
        <NavFabricDemoAppExample />
      </Stack.Item>
      <Stack grow styles={stackItemStyles}>
        <ListTask />       
      </Stack>
    </Stack>
  );
};

export default App