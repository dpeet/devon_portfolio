import React, { Component } from 'react';
import './App.css';
import LeftNav from "./LeftNav"
import Main from "./Main"

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="LeftNav">
            <LeftNav />
          </div>
          <div className="ProjectGallery">          
            <Main />
          </div>
      </div>
    );
  }
}

export default App;
