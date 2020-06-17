import React from 'react';
import { DefaultPalette, Stack, IStackItemStyles } from 'office-ui-fabric-react';
import { NavFabricDemoAppExample } from '../widgets/nav';
import { ListTask } from '../widgets/listTask';

const stackItemStyles: IStackItemStyles = {
  root: {
    display: 'flex',
    height: '100vh',
    overflowY: 'scroll'
  },
};
const nonShrinkingStackItemStyles: IStackItemStyles = {
  root: {
    background: DefaultPalette.neutralLighter,
    display: 'flex',
  },
};

export const AllTask: React.FunctionComponent = () => {
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

export default AllTask