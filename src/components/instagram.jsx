import React, { Component } from 'react';

export default class Instagram extends Component {
  render() {
    return (

      <div className="instagram-area fix">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-xl-12">
              <div className="instagram-active owl-carousel">
                <div className="single-instagram">
                  <img src="assets/img/gallery/instra1.png" alt="" />
                  <a href="#"><i className="ti-instagram" /></a>
                </div>
                <div className="single-instagram">
                  <img src="assets/img/gallery/instra2.png" alt="" />
                  <a href="#"><i className="ti-instagram" /></a>
                </div>
                <div className="single-instagram">
                  <img src="assets/img/gallery/instra3.png" alt="" />
                  <a href="#"><i className="ti-instagram" /></a>
                </div>
                <div className="single-instagram">
                  <img src="assets/img/gallery/instra4.png" alt="" />
                  <a href="#"><i className="ti-instagram" /></a>
                </div>
                <div className="single-instagram">
                  <img src="assets/img/gallery/instra1.png" alt="" />
                  <a href="#"><i className="ti-instagram" /></a>
                </div>
                <div className="single-instagram">
                  <img src="assets/img/gallery/instra4.png" alt="" />
                  <a href="#"><i className="ti-instagram" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};