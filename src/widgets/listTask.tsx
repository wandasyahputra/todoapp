import React, {useState, useEffect} from 'react';
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
  const [datas, setDatas] = useState([])
  useEffect(() => {
    const taskData = localStorage.getItem('wanda')
    setDatas(taskData !== null ? JSON.parse(taskData) : [])
  },[])

  const togglePanel = (data: any) => (e: any) => {
    setPanelData(data)
  }
  const titleChange = (data: any) => (e: any) => {
    let newData: any = []
    datas.map((item: any) => {
      if (item.id === data.id) {
        item.title = e.currentTarget.value
      }
      newData.push(item)
      return null
    })
    setDatas(newData)
    localStorage.setItem('wanda', JSON.stringify(newData))
  }
  
  const dueDateChange = (data: any) => (e: any) => {
    setPanelData(data)
  }
  
  const completeChange = (data: any) => (e: any) => {
    let newData: any = []
    datas.map((item: any) => {
      if (item.id === data.id) {
        item.complete = e.currentTarget.checked
      }
      newData.push(item)
      return null
    })
    setDatas(newData)
    localStorage.setItem('wanda', JSON.stringify(newData))
  }
  const dateChange = (data: any) => (e: any) => {
    let newData: any = []
    datas.map((item: any) => {
      if (item.id === data.id) {
        item.duedate = e.toString()
      }
      newData.push(item)
      return null
    })
    setDatas(newData)
    localStorage.setItem('wanda', JSON.stringify(newData))
  }

  const deleteHandler = (data: any) => (e: any) => {
    let newData: any = []
    datas.map((item: any) => {
      if (item.id === data.id) {
        return false
      }
      newData.push(item)
      return null
    })
    setDatas(newData)
    setPanelData(false)
    localStorage.setItem('wanda', JSON.stringify(newData))
  }

  const newTask = (e: any) => {
    let newData: any = []
    newData.push({
      id: new Date().getTime(),
      title: e.currentTarget.value,
      duedate: "",
      complete:false,
      important:false
    })
    datas.map((item: any) => {
      newData.push(item)
      return null
    })
    setDatas(newData)
    localStorage.setItem('wanda', JSON.stringify(newData))
    e.target.value = ''
    console.log(e.target)
    return null
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
              <TextField onBlur={newTask} borderless placeholder="Add new task" />
            </Stack.Item>
          </Stack>
          <Separator />
        </Stack.Item>
        {datas.map((item: any) => (!item.complete ? 
          <Task openDetail={togglePanel} completeChange={completeChange} key={item.id} detail={item}/> : null
        ))}
        {datas.map((item: any) => (item.complete ? 
          <Task openDetail={togglePanel} completeChange={completeChange} key={item.id} detail={item}/> : null
        ))}
      </Stack>
      <PanelFabrick
        detail={panelData}
        open={panelData}
        close={togglePanel}
        titleChange={titleChange}
        dueDateChange={dueDateChange}
        deleteHandler={deleteHandler}
        completeChange={completeChange}
        dateChange={dateChange}
      />
    </React.Fragment>
  );
};

export default ListTask