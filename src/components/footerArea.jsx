import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class FooterArea extends Component {
  render() {
    return (

      <div className="footer-wrapper">
        <div className="footer-area footer-padding">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                <div className="single-footer-caption mb-50">
                  <div className="single-footer-caption mb-30">
                    {/* logo */}
                    <div className="footer-logo mb-35">
                      <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                    </div>
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p>This one's for the otters. If we don't keep them happy, who will?</p>
                      </div>
                      {/* social */}
                      <div className="footer-social">
                        <a href="https://www.instagram.com/happyotterbrewing/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
                        <a href="https://untappd.com/HappyOtterBrewingCo" target="_blank" rel="noopener noreferrer"><i className="fab fa-untappd" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Quick Links</h4>
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li> <Link to="/beers">Our Beers</Link> </li>
                      <li> <Link to="/merch">Merch</Link> </li>
                      <li> <Link to="/donate">Save the Otters</Link> </li> 
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-8 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Beers</h4>
                    <ul>
                      <li>Lo and Behold Porter</li>
                      <li>Ope! Midwest IPA</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-8">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle mb-20">
                    <h4>Contact Us</h4>
                    <p>happyotterbrewing@gmail.com</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
