import * as React from 'react';
import { Panel,
  TextField,
  Stack,
  Checkbox,
  IStackItemStyles,
  ICheckboxStyles,
  ITextFieldStyles,
  ActionButton,
  IIconProps  } from 'office-ui-fabric-react';
import { DatePickerWeekNumbersExample } from './calendar';
import { ButtonDefaultExample } from './button';

type PanelProps = {
  detail?: any,
  open: boolean,
  close: any,
  titleChange: any,
  dueDateChange: any,
  deleteHandler: any,
  completeChange: any,
  dateChange: any,
}


export const PanelFabrick: React.FunctionComponent<PanelProps> = ({detail, dateChange, open, close, titleChange, dueDateChange, deleteHandler, completeChange}) => {
  const stackItem: IStackItemStyles = {
    root: {
      alignItems: 'center'
    },
  };
  
  const checkboxStyle: ICheckboxStyles = {
    checkbox: {
      borderRadius: '50%',
    },
  };
  
  const inputStyleComplete: Partial<ITextFieldStyles> = {
    field: {
      textDecoration: 'line-through'
    }
  };
    
  const star: IIconProps = { iconName: 'FavoriteStar' };
  return (
    <Panel
        isLightDismiss
        isOpen={open}
        onDismiss={close(false)}
        closeButtonAriaLabel="Close"
        headerText="Task Detail"
      >
        <Stack horizontal styles={stackItem}>
          <Stack.Item styles={stackItem}>
            <Checkbox onChange={completeChange(detail)} label="" styles={checkboxStyle} defaultChecked={detail.complete} />
          </Stack.Item>
          <Stack.Item grow>
            <TextField onBlur={titleChange(detail)} styles={detail.complete ? inputStyleComplete : {}} borderless defaultValue={detail.title}/>
          </Stack.Item>
          <Stack.Item>
            <ActionButton iconProps={star} />
          </Stack.Item>
        </Stack>
        <DatePickerWeekNumbersExample
          placeholder="Add due date"
          defaultValue={detail.duedate}
          selectDate={dateChange(detail)}
        />
        <ButtonDefaultExample text="Add To My Day" icon="Sunny" onClick={()=> null} />
        <ButtonDefaultExample onClick={deleteHandler(detail)} text="Delete Task" icon="Delete" type="danger" />
      </Panel>
  );
};
