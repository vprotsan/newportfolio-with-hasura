import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
import PortfolioItem from './PortfolioItem';
import Loading from './Loading';


class Portfolio extends Component {

  constructor(){
      super();
      this.state = {
          categories: [],
          portfolioItems: [],
          selectValue: null,
          isLoading: true
      }
  }

  clearValue (e) {
		this.select.setInputValue('');
	}

  focusStateSelect = props => {
		this.select.focus();
	}

  updateValue = newValue => {
		this.setState({
			selectValue: newValue
		});
	}

  componentWillMount(){
      var self = this;
      const EndPoint = `https://data.deterioration37.hasura-app.io/v1/query`;
      axios.post(EndPoint, {
          "headers": {
            'Content-Type': 'application/json',
            'Authorization': process.env.REACT_APP_HASURA_ACCESS_TOKEN,
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
              isLoading: false
            })
         })
         .catch(function (error) {
            console.log(error);
         })

      //get articles
       axios.post(EndPoint, {
           "headers": {
             'Content-Type': 'application/json',
             'Authorization': process.env.REACT_APP_HASURA_ACCESS_TOKEN,
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
                 "file_id",
                 "github_link",
                 "website_link",
                 "live_preview_link"
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
    const cat = this.state.categories.map(e => ({value: e.id, label: e.title}));

    var pList;
    if (this.state.selectValue){
      pList = this.state.portfolioItems.filter( item => item.category_id === this.state.selectValue );
    } else {
      pList = this.state.portfolioItems;
    }

    if (this.state.isLoading) {
         return <Loading/>
    }

    return(
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Projects</h2>

          <div className="row">
            <div className="btn-group col-6 col-md-2 col-lg-4 col-lg-offset-8">
                <Select
        					id="state-select"
        					ref={(ref) => { this.select = ref; }}
        					onBlurResetsInput={false}
        					onSelectResetsInput={false}
        					autoFocus
        					options={cat}
        					simpleValue
        					name="selected-state"
        					value={this.state.selectValue}
        					onChange={this.updateValue}
        				/>
            </div>
          </div>
              <PortfolioItem portfolioItems={pList}/>
        </div>

      </section>
    )
  }
}

export default Portfolio;
