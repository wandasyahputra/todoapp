import React from 'react';import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom"
import AllTask from './pages/allTask'
import MyDay from './pages/myDay'
import Login from './pages/login'
import Important from './pages/important'

export const Routes: React.FunctionComponent = () => {  
  return (
    <Router>
      <Switch>
        {!localStorage.getItem('login') || localStorage.getItem('login') === '' ?
          <React.Fragment>
            <Route exact path="/login">
              <Login />
            </Route>
            <Redirect to="/login" />
          </React.Fragment> 
          : null
        }
        {localStorage.getItem('login') && localStorage.getItem('login') !== '' ?
          <React.Fragment>
            <Route path="/myday">
              <MyDay />
            </Route>
            <Route path="/important">
              <Important />
            </Route>
            <Route path="/">
              <AllTask />
            </Route>
            {/* <Redirect to="/" /> */}
          </React.Fragment> : null
        } 
      </Switch>
    </Router>
  )
};

export default Routes