import React, { Component } from 'react';
import './App.css';
import LeftNav from "./LeftNav"
import Main from "./Main"

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="App row">
          <div className="LeftNav col-sm-2">
            <LeftNav />
          </div>
          <div className="ProjectGallery col-sm-10">
            <Main />
            <p>Check out my social stuff</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
