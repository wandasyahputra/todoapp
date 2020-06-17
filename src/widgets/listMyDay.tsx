import React, {useState, useEffect} from 'react';
import { Stack, IStackItemStyles } from 'office-ui-fabric-react';
import { PanelFabrick } from '../component/panel'
import { Task } from '../component/task';
import moment from 'moment'

const stackItemStyles: IStackItemStyles = {
  root: {
    display: 'flex',
  },
};

export const ListMyDay: React.FunctionComponent = () => {
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
    localStorage.setItem('wanda', JSON.stringify(newData))
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

  return (
    <React.Fragment>
      <Stack grow styles={stackItemStyles}>
        {datas.map((item: any) => {
          const moment1 = moment(item.myday);
          const moment2 = item.duedate === '' ? false : moment(new Date(item.duedate));
          const myday =  moment1.isSame(moment(), 'date') || (moment2 !== false && moment2.isSame(moment(), 'date'))
          if (myday) {
            return(
              !item.complete ? 
              <Task openDetail={togglePanel} importantHandler={importantHandler} completeChange={completeChange} key={item.id} detail={item}/> :
              null
            )
          }
          return null
        })}
        {datas.map((item: any) => {
          const moment1 = moment(item.myday);
          const moment2 = item.duedate === '' ? false : moment(new Date(item.duedate));
          const myday =  moment1.isSame(moment(), 'date') || (moment2 !== false && moment2.isSame(moment(), 'date'))
          if (myday) {
            return(
              item.complete ? 
              <Task openDetail={togglePanel} importantHandler={importantHandler} completeChange={completeChange} key={item.id} detail={item}/> :
              null
            )
          }
          return null
        })}
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

export default ListMyDay