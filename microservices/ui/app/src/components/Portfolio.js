import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Modal from 'react-modal';

import 'react-select/dist/react-select.css';

import PortfolioItem from './PortfolioItem';


//Modal
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#page');
//end modal

class Portfolio extends Component {

  constructor(){
      super();
      this.state = {
          categories: [],
          portfolioItems: [],
          modalIsOpen: false,
          defaultCategory: 'Select Category',
          selectValue: 'new-south-wales',
          selectedOption: '',
    			disabled: false,
    			clearable: true,
    			rtl: false,
      }
      //modal
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
  }

  clearValue (e) {
		this.select.setInputValue('');
	}

  switchCountry = e => {
		var newCat = e.target.value;
		this.setState({
			defaultCategory: newCat,
			selectValue: null,
		});
	}

  focusStateSelect = props => {
		this.select.focus();
	}

  updateValue = newValue => {
		this.setState({
			selectValue: newValue,
		});
	}

  //modal
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  //end modal


  componentDidMount(){
      var self = this;
      const EndPoint = `https://data.deterioration37.hasura-app.io/v1/query`;
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
    const cat = this.state.categories.map(e => ({value: e.id, label: e.title}))
    const { selectedOption } = this.state.selectedOption;

    return(
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Projects</h2>

          <div className="row">
            <div className="btn-group col-6 col-md-2 col-lg-2 col-lg-offset-10">
                {/* <Select
                  name="form-field-name"
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={cat}
                /> */}

                <Select
        					id="state-select"
        					ref={(ref) => { this.select = ref; }}
        					onBlurResetsInput={false}
        					onSelectResetsInput={false}
        					autoFocus
        					options={cat}
        					simpleValue
        					clearable={this.state.clearable}
        					name="selected-state"
        					disabled={this.state.disabled}
        					value={this.state.selectValue}
        					onChange={this.updateValue}
        					rtl={this.state.rtl}
        				/>

            </div>
          </div>
          <PortfolioItem onClick={this.openModal} portfolioItems={this.state.portfolioItems}/>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>

      </section>
    )
  }
}

export default Portfolio;
