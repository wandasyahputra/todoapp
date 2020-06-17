import React from 'react';import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import AllTask from './pages/allTask'
import MyDay from './pages/myDay'
import Important from './pages/important'

export const Routes: React.FunctionComponent = () => {  
  return (
    <Router>
      <Switch>
        <Route path="/myday">
          <MyDay />
        </Route>
        <Route path="/important">
          <Important />
        </Route>
        <Route path="/">
          <AllTask />
        </Route>
      </Switch>
    </Router>
  )
};

export default Routes