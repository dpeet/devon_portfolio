import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const LeftNav = () => (
    <div className="LeftNav">
    <div className="Name">Devon Peet</div>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Project1'>Project1</Link></li>
      <li><Link to='/Project2'>Project2</Link></li>
      <li><Link to='/Project3'>Project3</Link></li>      
    </ul>
    </div>
)

export default LeftNav
