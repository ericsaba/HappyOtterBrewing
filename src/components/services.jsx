import React, { Component } from 'react';

export default class Services extends Component {
  render() {
    return (

      <div className="our-services section-padding40 position-relative">
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="cl-xl-7 col-lg-8 col-md-10">
              {/* Section Tittle */}
              <div className="section-tittle text-center mb-70">
                <span>Our Features</span>
                <h2>Quality is Our First Priority</h2>
              </div> 
            </div>
          </div>
          <div className="row">
            <div className=" col-lg-4 col-md-6 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <img src="assets/img/icon/icon1.svg" alt="" />
                </div>
                <div className="services-cap">
                  <h5><a href="#">Pet Boarding</a></h5>
                  <p>consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <img src="assets/img/icon/icon2.svg" alt="" />
                </div>
                <div className="services-cap">
                  <h5><a href="#">Pet Boarding</a></h5>
                  <p>consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-6">
              <div className="single-services text-center mb-30">
                <div className="services-ion">
                  <img src="assets/img/icon/icon3.svg" alt="" />
                </div>
                <div className="services-cap">
                  <h5><a href="#">Pet Boarding</a></h5>
                  <p>consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
