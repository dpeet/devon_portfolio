import React from 'react'
import { Link } from 'react-router-dom'


// The Roster component matches one of two different routes
// depending on the full pathname
const Gallery = () => (
  <div className="Gallery">
    <Link to='/Project1'>
      <div className="card">
      <p>Project1</p>
    </div>
    </Link>
    <Link to='/Project2'>
      <div className="card">
      <p>Project2</p>
    </div>  
    </Link>
  </div>
  )

export default Gallery
