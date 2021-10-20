import React, { Component } from 'react';

export default class HeaderArea extends Component {
  render() {
    return (

      <div className="header-area">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="menu-wrapper d-flex align-items-center justify-content-between">
              <div className="left-content d-flex align-items-center">
                <div className="logo">
                  <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                </div>
                {/* Main-menu */}
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">                                                                                          
                      <li><a href="index.html">Home</a></li>
                      <li><a href="product.html">Product</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="#">Blog</a>
                        <ul className="submenu">
                          <li><a href="blog.html">Blog</a></li>
                          <li><a href="blog_details.html">Blog Details</a></li>
                          <li><a href="elements.html">Element</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>     
              {/* Button */}
              <div className="buttons">
                <ul>
                  <li className="button-header">
                    <a href="#" className="header-btn mr-25"> <i className="fas fa-phone-alt" /> 513 833 4906</a>
                    <a href="#" className="btn header-btn2">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Mobile Menu */}
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};