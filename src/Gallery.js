import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Row, Col} from 'react-flexbox-grid';

// The Roster component matches one of two different routes depending on the
// full pathname
const Gallery = () => (

  <Grid fluid className="Gallery">
    <Row>
      <Col className="Project1 card" xs={12} md={2} mdOffset={1}>
        <Link to='/Project1'>
          <p>Project1</p>
        </Link>
      </Col>
      <Col className="Project2 card" xs={12} md={2} mdOffset={1}>
        <Link to='/Project2'>
          <p>Project2</p>
        </Link>
      </Col>
      <Col className="Project3 card" xs={12} md={2} mdOffset={1}>
        <Link to='/Project3'>
          <p>Project3</p>
        </Link>
      </Col>
    </Row>
  </Grid>

)
export default Gallery
