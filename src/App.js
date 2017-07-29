import React, { Component } from 'react';
import './App.css';
import LeftNav from "./LeftNav"
import Main from "./Main"
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Grid fluid gutter={0} className="AppContainerGrid">
        <Row className="AppContainerRow">
          <Col className="LeftNav" xs={12} sm={2}>
            <LeftNav />
          </Col>
          <Col className="ProjectGallery" xs={12} sm={10}>          
            <Main />
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default App;
