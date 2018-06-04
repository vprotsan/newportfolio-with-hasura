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
          isLoading: true,
          isActive: false
      }
      this.toggleClass= this.toggleClass.bind(this);
  }

  toggleClass() {
      const currentState = this.state.isActive;
      this.setState({ isActive: !currentState });
  };

  clearValue (e) {
		this.select.setInputValue('');
	}

  focusStateSelect = props => {
		this.select.focus();
	}

  updateValue = index => {
    console.log(index);
		this.setState({
			selectValue: index
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
    } else if(this.state.selectValue == null){
      pList = this.state.portfolioItems.filter( item => {
                  return item.category_id !== 4
              });
    }
    else {
      pList = this.state.portfolioItems;
    }

    if (this.state.isLoading) {
         return <Loading/>
    }

    let menuFilterItems = this.state.categories.map((item, index) => (
      <li key={item.id} role="presentation" className={this.state.isActive ? 'active' : ''}>
        <a data-id={item.id} onClick={this.updateValue.bind(this, index)} href="#">{item.title}</a>
      </li>
    ))

    return(
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Projects</h2>

          <div className="row">
            <div className="btn-group col-6 col-md-2 col-lg-4 col-lg-offset-8">
                <ul className="nav nav-pills">
                  {menuFilterItems}
                </ul>
            </div>
          </div>
              <PortfolioItem portfolioItems={pList}/>
        </div>

      </section>
    )
  }
}

export default Portfolio;
