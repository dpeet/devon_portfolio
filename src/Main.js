import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Gallery from './Gallery'
import Project1 from './Project1'
import Project2 from './Project2'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Gallery}/>
      <Route path='/Project1' component={Project1}/>
      <Route path='/Project2' component={Project2}/>
    </Switch>
  </main>
)

export default Main
