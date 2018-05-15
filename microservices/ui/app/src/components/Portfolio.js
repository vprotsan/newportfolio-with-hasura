import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import PortfolioItem from './PortfolioItem';
// import PortfolioFilterItem from './PortfolioFilterItem';

class Portfolio extends Component {

  constructor(props){
      super(props);
      this.state = {
          categories: [],
          selectedCategory: '',
          portfolioItems: []
      }
  }

  handleChange = selectedOption => {
    this.setState({ selectedCategory: selectedOption });
    console.log(`Selected: ${this.state.selectedCategory.label}`);
  }

  componentDidMount(){
      var self = this;
      const EndPoint = `https://data.deterioration37.hasura-app.io/v1/query`;
      // const imgEndPoint = `http://filestore.deterioration37.hasura-app.io/v1/hooks/public-read`;
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

    // let categories;
    //
    // if (this.state.categories.length > 0) {
    //   categories = this.state.categories.map(cat => ({ value: cat.id,
    //                                                   label: cat.title
    //                                                 }));
    // } else {
    //   categories = 'No categories';
    // }

    console.log(this.state.categories);
    const categories = this.state.categories.map(e => ({value: e.id, label: e.title}))

    const selectedCategory = this.state.selectedCategory;

    return(
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Projects</h2>

          <div className="row">
            <div className="btn-group col-6 col-md-2 col-lg-2 col-lg-offset-10">
                <Select
                  name="form-field-name"
                  value={selectedCategory}
                  onChange={this.handleChange}
                  options={categories}
                />
            </div>
          </div>

          <PortfolioItem portfolioItems={this.state.portfolioItems}/>
        </div>

      </section>
    )
  }
}

export default Portfolio;
