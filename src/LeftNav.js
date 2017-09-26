import React from 'react'
import { Link } from 'react-router-dom'
import Headshot from './../src/assets/me_circle.png'
import FontAwesome from 'react-fontawesome'



// The Header creates links that can be used to navigate
// between routes.
const LeftNav = () => (
    <div className="LeftNav">
      <Link to='/'>  
        <img className="Headshot" src={Headshot} alt="Devon Peet Headshot"/>
        <div className="Name">Devon Peet</div>
        <hr/>        
      </Link>
      <ul className="NavList">
        <li className="NavLink"><Link to='/dndtower'>Dungeons and Dragons Digital Dice Tower</Link></li>
        <li className="NavLink"><Link to='/hvz'>Mass Spatial Gaming (Humans Vs Zombies)</Link></li>
        <li className="NavLink"><Link to='/jetedit'>Jet Edit</Link></li>
        <li className="NavLink"><Link to='/salesforceanimation'>Salesforce Animation Page</Link></li>      
      </ul>
      <ul className="Social">
        <li><a href="mailto:dpeet@gatech.edu"><FontAwesome name='envelope' /> Email</a></li>
        <li><a href="https://github.com/dpeet"><FontAwesome name='github' /> Github</a></li>
        <li><a href="https://www.linkedin.com/in/devon-peet/"><FontAwesome name='linkedin' /> LinkedIn</a></li>
      </ul>
    </div>
);

export default LeftNav
