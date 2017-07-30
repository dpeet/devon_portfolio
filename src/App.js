import React, { Component } from 'react';
import './App.css';
import LeftNav from "./LeftNav"
import Main from "./Main"
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Grid fluid gutter={0} className="AppContainerGrid"> */}
          <div className="LeftNav">
            <LeftNav />
          </div>
          <div className="ProjectGallery">          
            <Main />
          </div>
      {/* </Grid> */}
      </div>
    );
  }
}

export default App;
