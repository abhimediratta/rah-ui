import React, { Component } from 'react';
import Logo from '../logo.png';

class SlideBar extends Component {
  render() {
    var {expandBar, onCloseMenuClick} = this.props;
    return (
      <header className={'slide-bar ' + (expandBar ? 'active' : '')}>
          <div className="header-container">
            <div className="header-inner">
              <a className="close-btn" onClick={onCloseMenuClick}>
                <span className="close"></span>
              </a>
              <a href="index.html" className="logo-container">
                <img src={Logo} alt="" />
              </a>
              <nav>
                <ul className="menu type3">
                  <li className="current_page_item menu-item-simple-parent">
                    <a href="">Home Page <span className="arrow"></span></a>
                    <ul className = "sub-menu" > <li>
                      <a href="http://www.wedesignthemes.com/html/redart/default">Default</a>
                    </li>
                    <li>
                      <a href="http://www.wedesignthemes.com/html/redart/menu-overlay">Menu Overlay</a>
                    </li>
                    <li className="current_page_item">
                      <a href="http://www.wedesignthemes.com/html/redart/slide-bar">Slide Bar</a>
                    </li>
                    <li>
                      <a href="http://www.wedesignthemes.com/html/redart/slider-over-menu">Slider Over Menu</a>
                    </li>
                  </ul>
                  </li>
                  <li className="menu-item-simple-parent"><a title="About" href="about.html">About Us</a></li>
                  <li className="menu-item-simple-parent"><a href="">Gallery Page <span className="arrow"></span></a>
                    <ul className="sub-menu">
                      <li><a href="gallery.html">Gallery</a></li>
                      <li><a href="gallery-detail.html">Gallery detail</a></li>
                      <li><a href="gallery-detail-with-lhs.html">Gallery-detail-left-sidebar</a></li>
                      <li><a href="gallery-detail-with-rhs.html">Gallery-detail-right-sidebar</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-simple-parent"><a href="">Shop Page <span className="arrow"></span></a>
                    <ul className="sub-menu">
                      <li><a href="shop.html">Shop</a></li>
                      <li><a href="shop-detail.html">Shop Detail</a></li>
                      <li><a href="shop-cart.html">Cart Page</a></li>
                      <li><a href="shop-checkout.html">Checkout Page</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-simple-parent"><a href="">Blog Page <span className="arrow"></span></a>
                    <ul className="sub-menu">
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="blog-detail.html">Blog detail</a></li>
                      <li><a href="blog-detail-with-lhs.html">Blog-detail-left-sidebar</a></li>
                      <li><a href="blog-detail-with-rhs.html">Blog-detail-right-sidebar</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-simple-parent"><a title="Contact" href="contact.html">Contact</a></li>
                  <li className="menu-item-simple-parent"><a href="">Shortcodes <span className="arrow"></span></a>
                    <ul className="sub-menu">
                      <li><a href="progressbar.html"> Progress bar </a></li>
                      <li><a href="buttons.html"> Buttons Page </a></li>
                      <li><a href="tabs.html"> tabs &amp; accordions </a></li>
                      <li><a href="typography.html"> typography </a></li>
                      <li><a href="columns.html"> columns </a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/* <div className="social-icons">
                <a className="fa fa-facebook" href="#"></a>
                <a className="fa fa-twitter" href="#"></a>
                <a className="fa fa-instagram" href="#"></a>
              </div> */}
              <p className="copyrights">COPYRIGHT &copy; <a href="">RED ART</a></p>
            </div>
          </div>
        </header>
    )
  }
};

export default SlideBar;
