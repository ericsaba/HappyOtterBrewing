/* eslint-env jquery */
import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

import { API, Storage } from 'aws-amplify';
import { listReviews } from '../graphql/queries'
import { createReview as createReviewMutation, deleteReview as deleteReviewMutation } from '../graphql/mutations'

const initialFormState = { reviewer: '', review_description: '', reviewer_title: '' }

function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchReviews();
  }, []);

  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchReviews();
  }

  async function fetchReviews() {
    const apiData = await API.graphql({ query: listReviews });
    const reviewsFromAPI = apiData.data.listReviews.items;
    await Promise.all(reviewsFromAPI.map(async review => {
      if (review.image) {
        const image = await Storage.get(review.image);
        review.image = image;
      }
      return review;
    }))
    setReviews(apiData.data.listReviews.items); 
  }

  async function createReview() {
    if (!formData.reviewer || !formData.review_description) return;
    await API.graphql({ query: createReviewMutation, variables: {input: formData }});
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setReviews([...reviews, formData]);
    setFormData(initialFormState);
  }

  async function deleteReview({ id }) {
    const newReviewsArray = reviews.filter(review => review.id !== id);
    setReviews(newReviewsArray);
    await API.graphql({query: deleteReviewMutation, variables: {input: {id}}});
  }

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
          {/*check if reviews exists, and if so, render owlcarousel*/}
          {reviews.length && (
          	<OwlCarousel items={3}  className="owl-theme" margin={0} autoplay={true} loop>  
                {reviews.map(review => (
                  <div className="client-caption" key={review.id || review.reviewer}>
                    <p>{review.review_description}</p>
                    <div className="testimonial-founder d-flex align-items-center mt-30">
                      <div className="founder-img">
                        {
                          review.image && <img src={review.image} alt={review.reviewer} className="testi-pic" />
                        }
                      </div>
                      <div className="founder-text">
                        <span>{review.reviewer}</span>
                        <p>{review.reviewer_title}</p>
                      </div>
                  </div>
                  {/* 
                  <button onClick={() => deleteReview(review)}>Delete review</button>
                  */}
                  </div>
                ))  }     
            </OwlCarousel> 
          )}
        </div>
        {/*
        <input onChange={e => setFormData({ ...formData, 'review_description': e.target.value})}
          placeholder="Review description"
          value={formData.review_description}
        />
        <input onChange={e => setFormData({ ...formData, 'reviewer': e.target.value})}
          placeholder="Your name"
          value={formData.reviewer}
        />
        <input onChange={e => setFormData({ ...formData, 'reviewer_title': e.target.value})}
          placeholder="Title"
          value={formData.reviewer_title}
        /> 
        <input type="file" onChange={onChange} />
        <button onClick={createReview}>Submit review</button>
        <div style={{marginBottom: 30}}>
          {
            reviews.map(review => (
                <div key={review.id || review.reviewer}>
                  <h2>{review.review_description}</h2>
                  <p>{review.reviewer}</p>
                  <p>{review.reviewer_title}</p>
                  <button onClick={() => deleteReview(review)}>Delete review</button>
                  {
                    review.image && <img src={review.image} alt={review.reviewer} style={{width: 400}} />
                  }
                </div>
            ))
          }
        </div>
      */}
      </div>
    </section>
  );
}

export default Testimonials;