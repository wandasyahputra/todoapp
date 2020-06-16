import React, {useState} from 'react';
import { Stack, IStackItemStyles, ActionButton, IIconProps, TextField } from 'office-ui-fabric-react';
import { Separator } from 'office-ui-fabric-react/lib/components/Separator';
import { PanelFabrick } from '../component/panel'
import { Task } from '../component/task';

const stackItemStyles: IStackItemStyles = {
  root: {
    display: 'flex',
  },
};
const stackItemPadding: IStackItemStyles = {
  root: {
    padding: '0 10px',
    alignItems: 'center'
  },
};
const add: IIconProps = { iconName: 'Add' };

export const ListTask: React.FunctionComponent = () => {
  const [panelData, setPanelData] = useState(false)
  const taskData = localStorage.getItem('wanda')
  const wanda = taskData !== null ? JSON.parse(taskData) : []
  // console.log(taskData !== null ? JSON.parse(taskData) : '')

  const togglePanel = (data: any) => (e: any) => {
    setPanelData(data)
  }
  return (
    <React.Fragment>
      <Stack grow styles={stackItemStyles}>
        <Stack.Item>
          <Stack horizontal styles={stackItemPadding}>
            <Stack.Item >
              <ActionButton iconProps={add} />
            </Stack.Item>
            <Stack.Item grow>
              <TextField borderless placeholder="Add new task" />
            </Stack.Item>
          </Stack>
          <Separator />
        </Stack.Item>
        {wanda.map((item: any, key: any) => (
          <Task openDetail={togglePanel} key={key} detail={item}/>
        ))}
      </Stack>
      <PanelFabrick detail={panelData} open={panelData} close={togglePanel} />
    </React.Fragment>
  );
};

export default ListTask