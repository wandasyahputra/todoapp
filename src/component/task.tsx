import * as React from 'react';
import { 
  Stack,
  Checkbox,
  IStackItemStyles,
  ICheckboxStyles,
  ActionButton,
  IIconProps,
  ITextStyles,
  FontIcon,
  Text,
  Separator
} from 'office-ui-fabric-react';
import moment from 'moment'
import { NeutralColors } from '@uifabric/fluent-theme';

type TaskProps = {
  detail?: any,
  openDetail: any,
  completeChange: any,
  importantHandler: any
}


export const Task: React.FunctionComponent<TaskProps> = ({detail, importantHandler, openDetail, completeChange}) => {
  const textCompleteStyle: ITextStyles = {
    root: {
      textDecoration: 'line-through'
    }
  }
  const textSmileStyle: ITextStyles = {
    root: {
      color: NeutralColors.gray80
    }
  }
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
  const starFill: IIconProps = { iconName: 'FavoriteStarFIll' };
  const momentToday = moment().set({hour:0,minute:0,second:0,millisecond:0}).toISOString()
  const moment1 = moment(detail.myday);
  const moment2 = detail.duedate === '' ? false : moment(new Date(detail.duedate));
  const myday =  moment1.isSame(momentToday, 'date')
  const today =  moment2 !== false ? moment2.diff(momentToday, 'days') : 'unset'

  return (
    <Stack.Item>
      <Stack horizontal styles={stackItemPadding}>
        <Stack.Item styles={stackItemPadding}>
          <Checkbox label="" onChange={completeChange(detail)} styles={checkboxStyle} defaultChecked={detail.complete} />
        </Stack.Item>
        <Stack.Item grow >
          <Text styles={detail.complete ? textCompleteStyle : {}} onClick={openDetail(detail)} block>{detail.title}</Text>
          <Text variant="small" styles={textSmileStyle} onClick={openDetail(detail)} block>
            {myday ? (
              <React.Fragment>
                <FontIcon iconName="Sunny" />
                {' My Day • '}
              </React.Fragment>
            ) : null}
            {today === 0 ? 'Today' : null}
            {today === 1 ? 'Tomorrow' : null}
            {today < 0 ? (
              <React.Fragment>
                <FontIcon iconName="Calendar" />
                {' Overdue • '}
              </React.Fragment>
            ) : null}
            {(today !== 0 && today !== 1) ? detail.duedate !== '' ? moment(new Date(detail.duedate).getTime()).format('DD MMM YYYY') : 'Due date is not set yet' : null}
          </Text>
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
      <Separator />
    </Stack.Item>
  );
};
