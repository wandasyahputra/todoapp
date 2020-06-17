import React from 'react';
import { DefaultPalette, Stack, IStackItemStyles } from 'office-ui-fabric-react';
import { NavFabricDemoAppExample } from '../widgets/nav';
import { ListTask } from '../widgets/listTask';
import { Header } from '../component/header'

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

export const AllTask: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Header/>
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
    </React.Fragment>
  );
};

export default AllTask