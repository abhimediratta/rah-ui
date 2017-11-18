import React, { Component } from 'react';
import Sidebar from 'Components/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="inner-wrapper">
          <Sidebar />
          Hello
        </div>
      </div>
    );
  }
}

export default App;
