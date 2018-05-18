import React, { Component } from 'react';
import axios from 'axios';

import '../css/portfolioitemadd.css';

class PortfolioItemAdd extends Component {
    constructor(){
          super();
          this.state = {
              allCategories: [],
              chosenCat: ' ',
              thumb: '',
              title: '',
              content: '',
              githubLink: '',
              livePreview: '',
              livePreview2: ''
          }
          this.handleThumbnail = this.handleThumbnail.bind(this);
     }

     handleChosenCategory(event){
         this.setState({chosenCat: event.target.value});
         console.log(this.state.chosenCat);
     }

     //file upload
     uploadSuccess({ data }) {
       this.setState({thumb: data.file_id });
    }

    uploadFail(error) {
      this.setState({thumb: ''});
    }


     handleThumbnail(){
        const file = this.fileInput.files[0];
        let data = {
            headers: {
              "Authorization": process.env.REACT_APP_HASURA_ACCESS_TOKEN,
              "X-Hasura-Role": "admin"
        	},
        	body: file
        }
        const url = "https://filestore.deterioration37.hasura-app.io/v1/file";
        axios.post(url, data)
          .then(response => {
              response.json();
              console.log(response);
          })
          .catch(error => console.log(error))
     }

     handleTitle(event){
         this.setState({title: event.target.value});
         console.log(this.state.title);
     }

     handleContent(event){
         this.setState({content: event.target.value});
         console.log(this.state.content);
     }

     handleGithubLink(event){
         this.setState({githubLink: event.target.value});
         console.log(this.state.githubLink);
     }

     handlelivePreview(event){
         this.setState({livePreview: event.target.value});
         console.log(this.state.livePreview);
     }

     handlelivePreview2(event){
         this.setState({livePreview2: event.target.value});
         console.log(this.state.livePreview2);
     }

     createNewPortfolioItem = (event) => {
         event.preventDefault();
         console.log(event);
     }

     componentDidMount(){
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
               console.log(data.data);
                self.setState({
                   allCategories: data.data,
                 })
              })
              .catch(function (error) {
                 console.log(error);
              })
             }

    render(){
        const categories = this.state.allCategories.map((cat, index) => (
            <option key={cat.id} value={cat.title}>{cat.title}</option>
        ))
        return(
            <form className="well form-horizontal" onSubmit={this.createNewPortfolioItem} id="contact_form">
                <fieldset>
                    <legend>Add New Portfolio Item</legend>

                    <div className="form-group">
                      <label className="col-md-4 control-label">Title</label>
                      <div className="col-md-4 inputGroupContainer">
                      <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input  name="first_name" placeholder="First Name" className="form-control"  type="text" />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-4 control-label">Preview</label>
                      <div className="col-md-4 inputGroupContainer">
                      <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-picture"></i></span>
                        <input type="file" ref={ref => this.fileInput = ref} onChange= {this.handleThumbnail}/>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label">Category</label>
                        <div className="col-md-4 selectContainer">
                            <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                            <select value={this.state.chosenCat} onChange={this.handleChosenCategory} name="state" className="form-control selectpicker" >
                              <option value=" ">Please select category</option>
                              {categories}
                            </select>
                          </div>
                        </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-4 control-label">Project Description</label>
                        <div className="col-md-4 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                            <textarea className="form-control" name="comment" placeholder="Project Description"></textarea>
                      </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-4 control-label">GitHub link</label>
                       <div className="col-md-4 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-globe"></i></span>
                            <input name="website" placeholder="Website or domain name" className="form-control" type="text" />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-4 control-label">Live preview link(1)</label>
                       <div className="col-md-4 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-globe"></i></span>
                            <input name="website" placeholder="Website or domain name" className="form-control" type="text" />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-4 control-label">Live preview link(2)</label>
                       <div className="col-md-4 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-globe"></i></span>
                            <input name="website" placeholder="Website or domain name" className="form-control" type="text" />
                        </div>
                      </div>
                    </div>

                    <div className="alert alert-success" role="alert" id="success_message">Success <i className="glyphicon glyphicon-thumbs-up"></i> Thanks for contacting us, we will get back to you shortly.</div>

                    <div className="form-group">
                      <label className="col-md-4 control-label"></label>
                      <div className="col-md-4">
                        <button type="submit" className="btn btn-warning" >Send <span className="glyphicon glyphicon-send"></span></button>
                      </div>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default PortfolioItemAdd;
