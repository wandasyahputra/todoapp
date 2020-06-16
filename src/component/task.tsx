import * as React from 'react';
import { 
  Stack,
  Checkbox,
  IStackItemStyles,
  ICheckboxStyles,
  ActionButton,
  IIconProps,
  Text,
  Separator
} from 'office-ui-fabric-react';

type TaskProps = {
  detail?: any,
  openDetail: any,
}


export const Task: React.FunctionComponent<TaskProps> = ({detail, openDetail}) => {
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
    
  const star: IIconProps = { iconName: 'FavoriteStar' };
  return (
    <Stack.Item>
      <Stack horizontal styles={stackItemPadding}>
        <Stack.Item styles={stackItemPadding}>
          <Checkbox label="" styles={checkboxStyle} defaultChecked={detail.complete} />
        </Stack.Item>
        <Stack.Item grow >
          <Text onClick={openDetail(detail)} block>{detail.title}</Text>
          <Text block>{detail.duedate}</Text>
        </Stack.Item>
        <Stack.Item>
          <ActionButton iconProps={star} />
        </Stack.Item>
      </Stack>
      <Separator />
    </Stack.Item>
  );
};
