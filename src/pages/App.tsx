import React from 'react';
import { DefaultPalette, Checkbox, Stack, IStackItemStyles, ICheckboxStyles, Text, ActionButton, IIconProps } from 'office-ui-fabric-react';
import { Separator } from 'office-ui-fabric-react/lib/components/Separator';
import { NavFabricDemoAppExample } from '../component/nav';

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
const stackItemPadding: IStackItemStyles = {
  root: {
    padding: '0 10px',
    alignItems: 'center'
  },
};
const checkboxStyle: ICheckboxStyles = {
  checkbox: {
    borderRadius: '50%',
  },
};
const star: IIconProps = { iconName: 'FavoriteStarFill' };

export const App: React.FunctionComponent = () => {
  return (
    <Stack
      horizontal
    >
      <Stack.Item disableShrink styles={nonShrinkingStackItemStyles}>
        <NavFabricDemoAppExample />
      </Stack.Item>
      <Stack grow styles={stackItemStyles}>
        <Stack.Item>
          <Stack horizontal styles={stackItemPadding}>
            <Stack.Item styles={stackItemPadding}>
              <Checkbox label="" styles={checkboxStyle} defaultChecked />
            </Stack.Item>
            <Stack.Item grow>
              <Text block>alalllalala</Text>
              <Text block>lalalalalalal</Text>
            </Stack.Item>
            <Stack.Item>
              <ActionButton iconProps={star} />
            </Stack.Item>
          </Stack>
          <Separator />
        </Stack.Item>
        <Stack.Item>
          <Stack horizontal styles={stackItemPadding}>
            <Stack.Item styles={stackItemPadding}>
              <Checkbox label="" styles={checkboxStyle} defaultChecked />
            </Stack.Item>
            <Stack.Item>
              <Text block>alalllalala</Text>
              <Text block>lalalalalalal</Text>
            </Stack.Item>
          </Stack>
          <Separator />
        </Stack.Item>
        <Stack.Item>
          <Stack horizontal styles={stackItemPadding}>
            <Stack.Item styles={stackItemPadding}>
              <Checkbox label="" styles={checkboxStyle} defaultChecked />
            </Stack.Item>
            <Stack.Item>
              <Text block>alalllalala</Text>
              <Text block>lalalalalalal</Text>
            </Stack.Item>
          </Stack>
          <Separator />
        </Stack.Item>
      </Stack>
    </Stack>
  );
};

export default App