import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';


const Portfolio = () => (

  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
    <div class="my-auto">
      <h2 class="mb-5">Experience</h2>

      <div class="row row-content justify-content-center">
        <PortfolioItem />
      </div>

    </div>

  </section>
)

export default Portfolio;
