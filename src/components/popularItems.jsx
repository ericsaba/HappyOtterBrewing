import React, { Component } from 'react';

export default class PopularItems extends Component {
  render() {
    return (

      <section className="popular-items section-padding40">
        <div className="container">
          {/* Section Tittle */}
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10 col-sm-10">
              <div className="section-tittle text-center mb-60">
                <span>Good beer makes happy otters</span>
                <h2>Beers on tap</h2>
              </div>
            </div>
          </div>
          <div className="popular-active">
          	<div className="row justify-content-center">
	            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
	              <div className="single-items text-center mb-30">
	                <div className="items-top">
	                  <img src="assets/img/gallery/items1.png" alt="" />
	                </div>
	                <div className="items-bottom">
	                  <h4><a href="#">Chocolate </a></h4>
	                  <p>Land behold it created good saw after she'd our set.</p>
	                  <a href="#" className="btn order-btn">$20  I  Order Now</a>
	                </div>
	              </div>
	            </div>
	            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
	              <div className="single-items text-center mb-30">
	                <div className="items-top">
	                  <img src="assets/img/gallery/items2.png" alt="" />
	                </div>
	                <div className="items-bottom">
	                  <h4><a href="#">Sweetheart</a></h4>
	                  <p>Land behold it created good saw after she'd our set.</p>
	                  <a href="#" className="btn order-btn">$20  I  Order Now</a>
	                </div>
	              </div>
	            </div>
	            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
	              <div className="single-items text-center mb-30">
	                <div className="items-top">
	                  <img src="assets/img/gallery/items3.png" alt="" />
	                </div>
	                <div className="items-bottom">
	                  <h4><a href="#">Blackforest </a></h4>
	                  <p>Land behold it created good saw after she'd our set.</p>
	                  <a href="#" className="btn order-btn">$20  I  Order Now</a>
	                </div>
	              </div>
	            </div>
	        </div>
          </div>
        </div>
      </section>
    );
  }
};
