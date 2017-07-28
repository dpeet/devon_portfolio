import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const LeftNav = () => (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Project1'>Project1</Link></li>
      <li><Link to='/Project2'>Project2</Link></li>
    </ul>
)

export default LeftNav
