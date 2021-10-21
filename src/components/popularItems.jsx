import React, { Component } from 'react';

export default class PopularItems extends Component {
  render() {
    return (

      <section className="popular-items section-padding40 bkg-img">
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
	            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8">
	              <div className="single-items text-center mb-30">
	                <div className="items-top">
	                  <img src="assets/img/logo/loder.png" alt="" />
	                </div>
	                <div className="items-bottom">
	                  <h4><a href="#">Lo and Behold Porter </a></h4>
	                  <p>Alas! The porter the people have been waiting for has arrived. Let him take your bags while you dive into the depths of winter knowing a strong, dark porter (this beer, but also a man) is waiting for you while you by the fire.</p>
	                  <a href="https://untappd.com/b/happy-otter-brewing-co-lo-and-behold-porter/4555904" target="_blank" rel="noopener noreferrer" className="btn order-btn">Rate on Untappd</a>
	                </div>
	              </div>
	            </div>
	            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8">
	              <div className="single-items text-center mb-30">
	                <div className="items-top">
	                  <img src="assets/img/logo/loder.png" alt="" />
	                </div>
	                <div className="items-bottom">
	                  <h4><a href="#">Ope! Midwest IPA</a></h4>
	                  <p>This straight-down-the-middle American IPA captures the hoppy bitterness of a traditional IPA while layering in the juicy, dry-hopped twang of NE IPAs we’ve all come to love </p>
	                  <a href="https://untappd.com/b/happy-otter-brewing-co-ope-midwest-ipa/4491921" target="_blank" rel="noopener noreferrer" className="btn order-btn">Rate on Untappd</a>
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
