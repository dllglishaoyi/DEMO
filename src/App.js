import React from "react";
import {Navigation} from './components/common'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import PageRenderer from './PageRenderer'

export default function App() {
  const user = {
    firstName: 'John',
    lastName: 'Doe'
  }

  return (
    <Router>
      <div className="App">
        <Navigation user={user}/>
        <Switch>
            <Route path="/:page" component={PageRenderer}/>
            <Route path="/" render={()=><Redirect to="/home"/>}/>
            <Route component={()=>404}/>
        </Switch>
      </div>
    </Router>
  );
}
