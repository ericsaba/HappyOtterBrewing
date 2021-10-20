import React, { Component } from 'react';

export default class Video extends Component {
  render() {
    return (

      <div className="video-area section-bg2 d-flex align-items-center" data-background="assets/img/gallery/video-bg.png">
        <div className="container">
          <div className="video-wrap position-relative">
            {/* Video icon */}
            <div className="video-icon">
              <a className="popup-video btn-icon" href="https://www.youtube.com/watch?v=up68UAfH0d0"><i className="fas fa-play" /></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
