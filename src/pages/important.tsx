import React from 'react';
import { DefaultPalette, Stack, IStackItemStyles } from 'office-ui-fabric-react';
import { NavFabricDemoAppExample } from '../widgets/nav';
import ListImportant from '../widgets/listImportant';

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

export const Important: React.FunctionComponent = () => {
  return (
    <Stack
      horizontal
    >
      <Stack.Item disableShrink styles={nonShrinkingStackItemStyles}>
        <NavFabricDemoAppExample />
      </Stack.Item>
      <Stack grow styles={stackItemStyles}>
        <ListImportant />      
      </Stack>
    </Stack>
  );
};

export default Important