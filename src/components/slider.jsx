import React, { Component } from 'react';

export default class Slider extends Component {
  render() {
    return (

      <div className="slider-area slider-bg1">
        <div className="slider-active">
          {/* Single Slider */}
          <div className="single-slider d-flex align-items-center slider-height ">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-6 col-lg-7 col-md-8 ">
                  <div className="hero__caption">
                    <div className="shop-tittle heartbeat">
                      <h2>Delicious</h2>
                    </div>
                    <h1 data-animation="fadeInUp" data-delay=".6s ">Delicious Cake For Everyone</h1>
                    <p data-animation="fadeInUp" data-delay=".8s">Land behold it created good saw after she'd Our set 
                      living. Signs midst dominion creepeth morning</p>
                    {/* Slider btn */}
                    <div className="slider-btns">
                      <a data-animation="fadeInUp" data-delay="1s" href="industries.html" className="btn slider-btn">Explore Menu</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>           
        </div>
        {/* hero-shape */}
        <div className="hero-shape bounce-animate">
          <img src="assets/img/hero/hero-shape.png" alt="" />
        </div>
      </div>
    );
  }
};