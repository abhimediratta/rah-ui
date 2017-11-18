import React, { Component } from 'react';
import LogoMini from '../logo-mini.png';

class MinifiedBar extends Component {
  render () {
    var {expandBar, onMenuClick} = this.props;
    return (
      <div>
        MinifiedBar
        <div className={'header-bar ' + (expandBar ? '' : 'active')} style={{display: 'block'}}>
          <a className="menu-nav" onClick={onMenuClick}>
                    <span></span>
                </a>
          <a className="logo-mini" href="index.html">
          	<img src={LogoMini} alt="" />
              <span><i>RED</i> ART</span>
          </a>
          <a className="logo-mobile" href="index.html">
          	<img alt="" src={LogoMini} />
              <p><span>RED</span> ART</p>
          </a>
          {/* <div className="share-mini">
            <a className="show fa fa-share-alt" href="#"></a>
            <div className="icons" style={ { display: 'none' } }>
              <a className="fa fa-facebook" href="#"></a>
              <a className="fa fa-twitter" href="#"></a>
              <a className="fa fa-instagram" href="#"></a>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default MinifiedBar;
