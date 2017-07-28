import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Project1 from './Project1'
import Project2 from './Project2'

// The Roster component matches one of two different routes
// depending on the full pathname
const Content = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/Project1' component={Project1}/>
    <Route exact path='/Project2' component={Project2}/>    
  </Switch>
)


export default Content
