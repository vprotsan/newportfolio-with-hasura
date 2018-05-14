import React from 'react';


const PortfolioItem = () => (

  <div className="card p-3 col-12 col-md-6 col-lg-4">
      <div className="card-wrapper">
          <div className="card-img">
              <a href="articles.html"><img src="assets/images/articles-1200x800.png" title="" alt="" media-simple="true" /></a>
          </div>
          <div className="card-box">
              <h4 className="card-title mbr-fonts-style mbr-bold display-7">
                 ARTICLES</h4>
          </div>
          <div className="mbr-section-btn"><a href="articles.html" className="btn btn-warning display-4">LIVE DEMO</a></div>
      </div>
  </div>
)

export default PortfolioItem;
