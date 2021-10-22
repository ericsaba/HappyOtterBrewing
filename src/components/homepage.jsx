import React, { Component } from 'react';
import PopularItems from './popularItems'
import Testimonials from './testimonials'

export default class Homepage extends Component {
  render() {
    return (
      <main>
        <PopularItems></PopularItems>
        <Testimonials></Testimonials>
      </main>
    );
  }
};