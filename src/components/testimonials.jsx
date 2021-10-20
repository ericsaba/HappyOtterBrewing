import React, { Component } from 'react';

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
                <h2>What Customers Say</h2>
              </div>
            </div>
          </div>
          <div className="custom-row">
            <div className="client-active">
              <div className="col-lg-5 col-md-6 col-sm-6">
                <div className="client-caption">
                  <p>"Leather detail shoulder contrastic colour 
                    contour stunning silhouette working peplum. 
                    Statement buttons cover-up tweaks patch.</p>
                  {/* founder */}
                  <div className="testimonial-founder d-flex align-items-center mt-30">
                    <div className="founder-img">
                      <img src="assets/img/gallery/Homepage_testi.png" alt="" />
                    </div>
                    <div className="founder-text">
                      <span>Oliva jems</span>
                      <p>UIX designer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-6">
                <div className="client-caption">
                  <p>"Leather detail shoulder contrastic colour 
                    contour stunning silhouette working peplum. 
                    Statement buttons cover-up tweaks patch.</p>
                  {/* founder */}
                  <div className="testimonial-founder d-flex align-items-center mt-30">
                    <div className="founder-img">
                      <img src="assets/img/gallery/Homepage_testi2.png" alt="" />
                    </div>
                    <div className="founder-text">
                      <span>Oliva jems</span>
                      <p>UIX designer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-6">
                <div className="client-caption">
                  <p>"Leather detail shoulder contrastic colour 
                    contour stunning silhouette working peplum. 
                    Statement buttons cover-up tweaks patch.</p>
                  {/* founder */}
                  <div className="testimonial-founder d-flex align-items-center mt-30">
                    <div className="founder-img">
                      <img src="assets/img/gallery/Homepage_testi.png" alt="" />
                    </div>
                    <div className="founder-text">
                      <span>Oliva jems</span>
                      <p>UIX designer</p>
                    </div>
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