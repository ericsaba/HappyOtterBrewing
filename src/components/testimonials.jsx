import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  


export default class Testimonials extends Component {
  render() {
    return (
      <section className="client-say">
        <div className="container">
          {/* Section Tittle */}
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10 col-sm-10">
              <div className="section-tittle text-center">
                <span>Testimonial</span>
                <h2>What our drinkers say</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">

          	<OwlCarousel items={3}  className="owl-theme" margin={0} autoplay={true} loop >  
               	<div className="client-caption">
                  	<p>“I thought I liked beer before, but then I tried Happy Otter. It had so much flavor, I had to sit down. 
	                  You remember the first time you heard Down by the River by Neil Young? That’s what Happy Otter is like, but in a beer.”</p>
	                  {/* founder */}
                  	<div className="testimonial-founder d-flex align-items-center mt-30">
	                    <div className="founder-img">
	                      <img className="testi-pic" src="assets/img/testimonials/felipe.jpeg" alt="" />
	                    </div>
	                    <div className="founder-text">
	                      <span>Felipe</span>
	                      <p>Sr. Beer Analyst</p>
	                    </div>
              		</div>
              	</div>
                <div className="client-caption">
	                  <p>"Gotta be one of the best dang beers I'd ever done did have in my good ole' days"</p>
	                  {/* founder */}
	                  <div className="testimonial-founder d-flex align-items-center mt-30">
	                    <div className="founder-img">
	                      <img className="testi-pic" src="assets/img/testimonials/bennett.jpeg" alt="" />
	                    </div>
	                    <div className="founder-text">
	                      <span>Bennett</span>
	                      <p>Yeast Practitioner</p>
	                    </div>
	                  </div>
                </div>
	            <div className="client-caption">
	                  <p>"You know how a good beer can lead to good times and good friends? 
	                  Well, imagine that, but make it great. To me, that’s Happy Otter."</p>
	                  {/* founder */}
	                  <div className="testimonial-founder d-flex align-items-center mt-30">
	                    <div className="founder-img">
	                      <img className="testi-pic" src="assets/img/testimonials/jesse.jpeg" alt="" />
	                    </div>
	                    <div className="founder-text">
	                      <span>Jesse</span>
	                      <p>Beer journalist</p>
	                    </div>
                  	</div>
              	</div>
          		<div className="client-caption">
                  <p>"Anything I can do to help keep the otters happy, keeps me happy. 
                  And if it means drinking some great beer while I'm at it? Well sign me up!"</p>
                  {/* founder */}
                  <div className="testimonial-founder d-flex align-items-center mt-30">
                    <div className="founder-img">
                      <img className="testi-pic" src="assets/img/testimonials/kelly.jpeg" alt="" />
                    </div>
                    <div className="founder-text">
                      <span>Kelly</span>
                      <p>Masters in Beer Administration Candidate</p>
                    </div>
                  </div>
                </div>
	        </OwlCarousel> 
          </div>
        </div>
      </section>
    );
  }
};