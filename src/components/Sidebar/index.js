import React, { Component } from 'react';

import './Sidebar.css';
import SlideBar from 'Components/Sidebar/SlideBar';
import MinifiedBar from 'Components/Sidebar/MinifiedBar';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandBar: false
    };

    this.onMenuClick = this.onMenuClick.bind(this);
    this.onCloseMenuClick = this.onCloseMenuClick.bind(this);
  }

  onMenuClick () {
    this.setState({
      expandBar: true
    });
  }

  onCloseMenuClick () {
    this.setState({
      expandBar: false
    });
  }

  render () {
    var {expandBar} = this.state;
    return (
      <div id="header-wrapper" className="dt-sticky-menu">
        Sidebar
        <SlideBar expandBar={expandBar} onCloseMenuClick={this.onCloseMenuClick}/>
        <MinifiedBar expandBar={expandBar} onMenuClick={this.onMenuClick} />
      </div>
    );
  }
}

export default Sidebar;
