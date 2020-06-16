import React, {useState} from 'react';
import { DefaultPalette, Stack, IStackItemStyles , Link, FontWeights } from 'office-ui-fabric-react';
import { Separator } from 'office-ui-fabric-react/lib/components/Separator';
import { ButtonDefaultExample } from '../component/button';
import { DatePickerWeekNumbersExample } from '../component/calendar';
import { PivotIconCountExample } from '../component/pivotMenu';
import { DetailsListDocumentsExample } from '../component/detailList';
import { NavFabricDemoAppExample } from '../component/nav';

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

const stackItemStyles: IStackItemStyles = {
  root: {
    // alignItems: 'center',
    // background: DefaultPalette.themePrimary,
    // color: DefaultPalette.white,
    display: 'flex',
    // height: 50,
    // justifyContent: 'center',
    // overflow: 'hidden',
  },
};
const nonShrinkingStackItemStyles: IStackItemStyles = {
  root: {
    // alignItems: 'center',
    // background: DefaultPalette.themePrimary,
    // color: DefaultPalette.white,
    display: 'flex',
    // height: 50,
    // justifyContent: 'center',
    // overflow: 'hidden',
    // width: 500,
  },
};
export const App: React.FunctionComponent = () => {
  const [lala] = useState('wanda')
  
  return (
    <Stack
    horizontal
    >
      <Stack.Item disableShrink styles={nonShrinkingStackItemStyles}>
        <NavFabricDemoAppExample />
      </Stack.Item>
      <Stack.Item grow styles={stackItemStyles}>
        <div>
          <div>
            <p>alalllalala</p>
            <p>lalalalalalal</p>
          </div>
          <Separator />
        </div>
      </Stack.Item>
    </Stack>
  );
};

export default App