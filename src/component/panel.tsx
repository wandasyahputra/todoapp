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
import moment from 'moment'

type PanelProps = {
  detail?: any,
  open: boolean,
  close: any,
  titleChange: any,
  deleteHandler: any,
  completeChange: any,
  dateChange: any,
  mydayHandler: any,
  importantHandler: any,
}


export const PanelFabrick: React.FunctionComponent<PanelProps> = ({detail, mydayHandler, dateChange, open, close, titleChange, deleteHandler, importantHandler, completeChange}) => {
  const moment1 = moment(detail.myday);
  const myday =  moment1.isSame(moment(), 'date')
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
  const starFill: IIconProps = { iconName: 'FavoriteStarFill' };
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
            {detail.important ? (
              <ActionButton iconProps={starFill} onClick={importantHandler(detail)} />)
              : null
            }
            {!detail.important ? (
              <ActionButton iconProps={star} onClick={importantHandler(detail)} />)
              : null
            }
          </Stack.Item>
        </Stack>
        <DatePickerWeekNumbersExample
          placeholder="Add due date"
          defaultValue={detail.duedate}
          selectDate={dateChange(detail)}
        />
        {myday ? (
          <ButtonDefaultExample text="Remove from My Day" icon="Delete" onClick={mydayHandler(detail, false)} />) : null
        }
        {!myday ? (
          <ButtonDefaultExample text="Add To My Day" icon="Sunny" onClick={mydayHandler(detail, true)} />) : null
        }
        <ButtonDefaultExample onClick={deleteHandler(detail)} text="Delete Task" icon="Delete" type="danger" />
      </Panel>
  );
};
