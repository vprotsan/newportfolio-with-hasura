import React, { Component } from 'react';
import axios from 'axios';

import PortfolioItem from './PortfolioItem';
import PortfolioFilterItem from './PortfolioFilterItem';

class Portfolio extends Component {

  constructor(props){
      super(props);
      this.state = {
          categories: [],
          portfolioItems: []
      }
  }

  componentDidMount(){
      var self = this;
      const EndPoint = `https://data.deterioration37.hasura-app.io/v1/query`;
      const imgEndPoint = `http://filestore.deterioration37.hasura-app.io/v1/hooks/public-read`;
      //get categories
      axios.post(EndPoint, {
          "headers": {
            'Content-Type': 'application/json',
            'Authorization': "Bearer 9cec1b3d25d97a3ff2ba35c83449babefa87eac9b9ebc2fe",
            'X-Hasura-Role': 'admin',
          },
          'type': 'select',
          'args': {
            "table": "category",
            "columns": [
                "title",
                "id"
            ]
          }
      }).then((data) => {
           console.log('returned data:' + data.data);
           self.setState({
              categories: data.data,
            })
         })
         .catch(function (error) {
            console.log(error);
         })

      //get articles
       axios.post(EndPoint, {
           "headers": {
             'Content-Type': 'application/json',
             'Authorization': "Bearer 9cec1b3d25d97a3ff2ba35c83449babefa87eac9b9ebc2fe",
             'X-Hasura-Role': 'admin',
           },
           'type': 'select',
           'args': {
             "table": "article",
             "columns": [
                 "title",
                 "content",
                 "id",
                 "category_id",
                 "file_id"
             ]
           }
       }).then((data) => {
            console.log(data.data);
            self.setState({
               portfolioItems: data.data,
             })
          })
          .catch(function (error) {
             console.log(error);
          })

  }

  render(){
    return(
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>

          <div className="btn-group">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
              Filter by category <span className="caret"></span>
            </button>
            <PortfolioFilterItem categories={this.state.categories}/>
          </div>

          <div className="row row-content justify-content-center">
            <PortfolioItem portfolioItems={this.state.portfolioItems}/>
          </div>

        </div>

      </section>
    )
  }
}

export default Portfolio;
