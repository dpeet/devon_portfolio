import React from 'react'
import { Link } from 'react-router-dom'
import Headshot from './../src/assets/headshot2.png'
import FontAwesome from 'react-fontawesome'



// The Header creates links that can be used to navigate
// between routes.
const LeftNav = () => (
    <div className="LeftNav">
      <Link to='/'>  
        <div className="Name">Devon Peet</div>
        <img className="Headshot" src={Headshot} alt="Devon Peet Headshot"/>
      </Link>
      <ul className="NavList">
        <li className="NavLink"><Link to='/Project1'>Dungeons and Dragons Digital Dice Tower</Link></li>
        <li className="NavLink"><Link to='/Project2'>Mass Spatial Gaming (Humans Vs Zombies)</Link></li>
        <li className="NavLink"><Link to='/Project3'>Portfolio Website</Link></li>      
        <li className="NavLink"><Link to='/Project3'>Salesforce Animation Page</Link></li>      
        
      </ul>
      <ul className="Social">
        <li>
          <a href="url"><FontAwesome name='github' /> Github</a>
        </li>
        <li>
          <a href="url"><FontAwesome name='linkedin' /> LinkedIn</a>
        </li>
      </ul>
    </div>
)

export default LeftNav