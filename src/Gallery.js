import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Row, Col} from 'react-flexbox-grid';
import HVZpic from './../src/assets/hvz.png'
import DNDpic from './../src/assets/d&d.png'
import Astropic from './../src/assets/astro.png'
import Websitepic from './../src/assets/website.png'

// The Roster component matches one of two different routes depending on the
// full pathname


const Gallery = () => (
  <Grid fluid gutter={0} className="Gallery">
    <Row center="xs">
      <Col className="Project1 card" xs={10} sm={10} md={5} lg={3}>
        <Link to='/Project1'>
          <img className="HVZpic ProjectImage" src={HVZpic} alt="Humans Vs Zombies Project"/>        
          <div className="Title">Dungeons and Dragons Digital Dice Tower</div>
          <div className="Year">Spring 2017</div>
        </Link>
      </Col>
      <Col className="Project2 card" xs={12}  sm={10} md={5} lg={3}>
        <Link to='/Project2'>
          <img className="DNDPic ProjectImage" src={DNDpic} alt="Dungeons and Dragons Project"/>        
          <div className="Title">Mass Spatial Gaming (Humans Vs Zombies)</div>
          <div className="Year">Fall 2016</div>          
        </Link>
      </Col>
      <Col className="Project3 card" xs={12}  sm={10} md={5} lg={3}>
        <Link to='/Project3'>
          <img className="DNDPic ProjectImage" src={Websitepic} alt="Portfolio Website"/>               
          <div className="Title">Portfolio Website</div>
          <div className="Year">Summer 2017</div>          
        </Link>
      </Col>
      <Col className="Project4 card" xs={12}  sm={10} md={5} lg={3}>
        <Link to='/Project4'>
          <img className="DNDPic ProjectImage" src={Astropic} alt="Salesforce Animation Page Project"/>               
          <div className="Title">Salesforce Animation Page</div>
          <div className="Year">Summer 2017</div>          
        </Link>
      </Col>
    </Row>
  </Grid>
)
export default Gallery
