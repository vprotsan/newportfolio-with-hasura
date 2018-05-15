import React from 'react';
import '../css/portfolioItem.css';

const PortfolioItem = props => {

  let item;

  if (props.portfolioItems.length > 0) {
    item = props.portfolioItems.map(e =>
                <div key={e.id} className="card p-3 col-12 col-md-6 col-lg-4">
                    <div className="card-wrapper">
                        <div className="card-img">
                            <a href="articles.html">
                              <img src={`https://filestore.deterioration37.hasura-app.io/v1/file/` + e.file_id} title={e.title} alt={e.title} media-simple="true" />
                            </a>
                        </div>
                        <div className="card-box">
                            <h4 className="card-title mbr-fonts-style mbr-bold display-7">{e.title}</h4>
                            <p>{e.content}</p>
                        </div>
                        <div className="mbr-section-btn"><a href="articles.html" className="btn btn-warning display-4">Details</a></div>
                    </div>
                </div>
              )
  } else {
    item = 'No items';
  }

  return( <div className="row row-content justify-content-center">{item}</div> );
}

export default PortfolioItem;
