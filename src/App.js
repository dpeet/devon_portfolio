import React, { Component } from 'react';
import './App.css';
import LeftNav from "./LeftNav"
import Main from "./Main"
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col className="LeftNav" xs={12} md={2}>
            <LeftNav />
          </Col>
          <Col className="ProjectGallery" xs={12} md={10}>          
            <Main />
            <p>Check out my social stuff</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
