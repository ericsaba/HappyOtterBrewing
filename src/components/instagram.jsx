import React, { Component } from 'react';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

export default class Instagram extends Component {
  state = {
    instaData: [],
  }

  async componentDidMount() {
    let data = []
    const url = "https://www.instagram.com/happyotterbrewing/?hl=en"
    const instaSource = await axios.get(url, function(req, res) {
      res.header("Access-Control-Allow-Origin", "*");
    })

    const instaObj = instaSource.instaData
      .match (
        /<script type="text\/javascript">window\.sharedData = (.*)<\/script>/
      )[1]
      .slice(0, -1)

    const convertedJsonObj = JSON.parse(instaObj)
    console.log(convertedJsonObj, "JSON OBJECT")
    const mediaArr = convertedJsonObj.entry_data.ProfilePage[0].graphql.user
      .edge_owner_to_timeline_media.edges

    mediaArr.map(el => {
      const node = el.node
      data.push(node)
    })
    this.setState({ instaData: data})
  }

  renderInstaPics = () => {
    return this.state.instaData.map((media, index) => {
      return (
        <div style={{display: "inline" }} key={index}>
          <img
            src={media.thumbnail_src}
            alt="insta"
            style={{ width: "200px"}}
          />
        </div>
      )
    })
  }


  render() {
    return (
      <div className="instagram-area fix">


        <div className="container-fluid p-15">
          <OwlCarousel items={3}  className="owl-theme" margin={20} autoplay={true} loop >  
              <div className="single-instagram">
                <img className="img insta" src= {'assets/img/gallery/instra1.png'}/>
                <a href="#"><i className="ti-instagram" /></a>
              </div>  

          </OwlCarousel> 

          {/*
          
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
          */}
        </div>
      </div>
    );
  }
};