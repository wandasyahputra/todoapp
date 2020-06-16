import React from 'react';import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import App from './pages/App'

export const Routes: React.FunctionComponent = () => {  
  return (
    <Router>
      <Switch>
        <Route path="/all">
          {null}
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  )
};

export default Routes