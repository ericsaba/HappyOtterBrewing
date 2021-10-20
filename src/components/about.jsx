import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (

      <div className="support-company-area pb-padding">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6 col-md-10">
              <div className="support-location-img">
                <img src="assets/img/gallery/about.png" alt="" className="w-100" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-10">
              <div className="right-caption">
                {/* Section Tittle */}
                <div className="section-tittle mb-30">
                  <span>Fresh &amp; Delicious</span>
                  <h2>A Simple Way to
                    Eating Delicious</h2>
                </div>
                <div className="support-caption">
                  <p className="mb-40">Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip ex ea commodo conse quat is aute irure, quis nostrud exer.</p>
                  <a href="#" className="btn post-btn">Our Story</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
