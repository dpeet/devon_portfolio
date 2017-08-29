import React from 'react'
import {Link} from 'react-router-dom';

// The Roster component matches one of two different routes depending on the
// full pathname

// Style was cribbed from https://codepen.io/mcraiganthony/pen/NxGxqm

const Gallery = () => (
<ul className="cards">
  <li className="cards__item">
    <div className="card">
      <Link to='/dndtower'>
        <div className="card__image card__image--dnd"> </div>
        <div className="card__content">
          <div className="card__title">Dungeons and Dragons Dice Tower</div>
          <p className="card__text">Spring 2017</p>
        </div>
      </Link>   
    </div>
  </li>
  <li className="cards__item">
    <div className="card">
      <Link to='/hvz'>
        <div className="card__image card__image--hvz"> </div>
        <div className="card__content">
          <div className="card__title">Mass Spatial Gaming (Humans Vs Zombies)</div>
          <p className="card__text">Fall 2016</p>
        </div>
      </Link>  
    </div>
  </li>
  <li className="cards__item">
    <div className="card">
      <Link to='/portfoliowebsite'>
        <div className="card__image card__image--portfolio"> </div>
        <div className="card__content">
          <div className="card__title">Portfolio Website</div>
          <p className="card__text">Summer 2017</p>
        </div>
      </Link>  
    </div>
  </li>
  <li className="cards__item">
    <div className="card">
      <Link to='/salesforceanimation'>
        <div className="card__image card__image--animation"> </div>
        <div className="card__content">
          <div className="card__title">Salesforce Animation Page Redesign</div>
          <p className="card__text">Summer 2017</p>
        </div>
      </Link>  
    </div>
  </li>
</ul>
);
export default Gallery
