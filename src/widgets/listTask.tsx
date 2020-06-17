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
  const [newTaskValue, setNewTaskValue] = useState('')
  const login = localStorage.getItem('login') || ''
  
  useEffect(() => {
    const login = localStorage.getItem('login') || ''
    const taskData = localStorage.getItem(login)
    setDatas(taskData !== null ? JSON.parse(taskData) : [])
  },[])

  const togglePanel = (data: any) => (e: any) => {
    setPanelData(data)
  }

  const handleTaskValueChange = (e: any) => {
    setNewTaskValue(e.target.value)
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
    localStorage.setItem(login, JSON.stringify(newData))
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
    localStorage.setItem(login, JSON.stringify(newData))
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
    localStorage.setItem(login, JSON.stringify(newData))
  }

  const importantHandler = (data: any) => (e: any) => {
    let newData: any = []
    datas.map((item: any) => {
      if (item.id === data.id) {
        item.important = !data.important
      }
      newData.push(item)
      return null
    })
    setDatas(newData)
    localStorage.setItem(login, JSON.stringify(newData))
  }
    
  const mydayHandler = (data: any, status: boolean) => (e: any) => {
    let newData: any = []
    datas.map((item: any) => {
      if (item.id === data.id) {
        item.myday = status ? new Date().getTime() : ''
      }
      newData.push(item)
      return null
    })
    setDatas(newData)
    localStorage.setItem(login, JSON.stringify(newData))
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
    localStorage.setItem(login, JSON.stringify(newData))
  }

  const newTask = (e: any) => {
    if (e.currentTarget.value === '') {
      return false
    }
    let newData: any = []
    newData.push({
      id: new Date().getTime(),
      title: e.currentTarget.value,
      duedate: "",
      complete:false,
      myday: '',
      important:false
    })
    datas.map((item: any) => {
      newData.push(item)
      return null
    })
    setNewTaskValue('')
    setDatas(newData)
    localStorage.setItem(login, JSON.stringify(newData))
    e.target.value = ''
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
              <TextField onBlur={newTask} onChange={handleTaskValueChange} value={newTaskValue} borderless placeholder="Add new task" />
            </Stack.Item>
          </Stack>
          <Separator />
        </Stack.Item>
        {datas.map((item: any) => (!item.complete ? 
          <Task openDetail={togglePanel} importantHandler={importantHandler} completeChange={completeChange} key={item.id} detail={item}/> : null
        ))}

        {/* to make sure completed items rendered on bottom */}
        {datas.map((item: any) => (item.complete ? 
          <Task openDetail={togglePanel} importantHandler={importantHandler} completeChange={completeChange} key={item.id} detail={item}/> : null
        ))}
      </Stack>
      <PanelFabrick
        detail={panelData}
        open={panelData}
        close={togglePanel}
        titleChange={titleChange}
        deleteHandler={deleteHandler}
        completeChange={completeChange}
        dateChange={dateChange}
        mydayHandler={mydayHandler}
        importantHandler={importantHandler}
      />
    </React.Fragment>
  );
};

export default ListTask