import React from 'react';
import { DefaultPalette, Stack, IStackItemStyles } from 'office-ui-fabric-react';
import { NavFabricDemoAppExample } from '../widgets/nav';
import ListImportant from '../widgets/listImportant';
import { Header } from '../component/header';

const stackItemStyles: IStackItemStyles = {
  root: {
    display: 'flex',
    height: 'calc(100vh - 48px)',
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
    <React.Fragment>
      <Header />
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
    </React.Fragment>
  );
};

export default Important