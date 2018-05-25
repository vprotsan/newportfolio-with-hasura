import React, { Component } from 'react';
import axios from 'axios';

import '../css/portfolioitemadd.css';

class PortfolioItemAdd extends Component {
    constructor(){
          super();
          this.state = {
              allCategories: [],
              chosenCat: 0,
              thumb: '',
              title: '',
              content: '',
              githubLink: '',
              livePreview: '',
              livePreview2: '',
              itemStatus: false
          }
          // this.handleThumbnail = this.handleThumbnail.bind(this);
          this.handleChosenCategory = this.handleChosenCategory.bind(this);
          this.handleManualFileInput = this.handleManualFileInput.bind(this);
          // this.uploadSuccess = this.uploadSuccess.bind(this);
          this.handleTitle = this.handleTitle.bind(this);
          this.handleContent = this.handleContent.bind(this);
          this.handleGithubLink = this.handleGithubLink.bind(this);
          this.handlelivePreview = this.handlelivePreview.bind(this);
          this.handlelivePreview2 = this.handlelivePreview2.bind(this);
     }

     handleChosenCategory(event){
         this.setState({chosenCat: event.target.value}, function(){
             console.log(this.state.chosenCat);
         });
     }

     handleManualFileInput(event){
         this.setState({thumb: event.target.value}, function(){
             console.log(this.state.thumb);
         });
     }

     //file upload
    //  uploadSuccess({ data }) {
    //    this.setState({thumb: data.file_id });
    // }

     // handleThumbnail(){
     //    const file = this.fileInput.files[0];
     //    var authToken = window.localStorage.getItem('HASURA_AUTH_TOKEN');
     //    console.log(authToken);
     //    let data = {
     //        headers: {
     //            "X-Hasura-Role": "user",
     //            "content-type":	"application/json; charset=utf-8",
     //            "Authorization" : "Bearer " + authToken,
     //        },
     //    	body: 'hey'
     //    }
     //
     //    console.log(data);
     //    const fileUploadUrl = `https://filestore.deterioration37.hasura-app.io/v1/file`;
     //    axios.post(fileUploadUrl, data)
     //      .then(response => console.log(response))
     //      .catch(error => console.log(error));
     // }

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

         var articleURL = "https://data.deterioration37.hasura-app.io/v1/query";
         var newArticle = {
             "headers": {
               'Content-Type': 'application/json',
               'X-Hasura-Role': "user",
               'Authorization': process.env.REACT_APP_HASURA_ACCESS_TOKEN,
             },
            "type": "insert",
            "args": {
                "table": "article",
                "objects": [
                    {
                        "live_preview_link": this.state.livePreview,
                        "github_link": this.state.githubLink,
                        "website_link": this.state.livePreview2,
                        "title": this.state.title,
                        "category_id": this.state.chosenCat,
                        "content": this.state.content,
                        "file_id": this.state.thumb,
                        "author_id": 1
                    }
                ]
            }
         }
         axios.post(articleURL, newArticle)
             .then(response => {
                 this.setState({
                     itemStatus: true
                 })
             })
             .catch(error => console.log(error));
     }

     componentDidMount(){
         var authToken = window.localStorage.getItem('HASURA_AUTH_TOKEN');
         var data = {
             headers: {
               'Authorization': process.env.REACT_APP_HASURA_ACCESS_TOKEN,
               "Content-Type": "application/json"
         	},
         }

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
            <option key={cat.id} value={cat.id}>{cat.title}</option>
        ))

        const succsessMsg = <div className="alert alert-success" role="alert" id="success_message">Success <i className="glyphicon glyphicon-thumbs-up"></i>Item has been added</div>
        const msg = this.state.itemStatus ? succsessMsg : null

        return(
            <form className="well form-horizontal" onSubmit={this.createNewPortfolioItem} id="contact_form">
                <fieldset>
                    <legend>Add New Portfolio Item</legend>

                    <div className="form-group">
                      <label className="col-md-4 control-label">Title</label>
                      <div className="col-md-4 inputGroupContainer">
                      <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input onChange={this.handleTitle} name="first_name" placeholder="First Name" className="form-control"  type="text" />
                        </div>
                      </div>
                    </div>

                    {/* <div className="form-group">
                      <label className="col-md-4 control-label">Preview</label>
                      <div className="col-md-4 inputGroupContainer">
                      <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-picture"></i></span>
                        <input type="file" ref={ref => this.fileInput = ref} onChange= {this.handleThumbnail}/>
                        </div>
                      </div>
                    </div> */}

                    <div className="form-group">
                      <label className="col-md-4 control-label">Preview</label>
                      <div className="col-md-4 inputGroupContainer">
                      <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-picture"></i></span>
                        <input onChange={this.handleManualFileInput} name="file_name" placeholder="File_id" className="form-control"  type="text" />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label">Category</label>
                        <div className="col-md-4 selectContainer">
                            <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                            <select value={this.state.chosenCat} onChange={this.handleChosenCategory} name="category" className="form-control selectpicker" >
                              <option value="0">Please select category</option>
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
                            <textarea onChange={this.handleContent} className="form-control" rows="5" name="comment" placeholder="Project Description"></textarea>
                      </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-4 control-label">GitHub link</label>
                       <div className="col-md-4 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-globe"></i></span>
                            <input onChange={this.handleGithubLink} name="website" placeholder="Website or domain name" className="form-control" type="text" />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-4 control-label">Live preview link(1)</label>
                       <div className="col-md-4 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-globe"></i></span>
                            <input onChange={this.handlelivePreview} name="website" placeholder="Website or domain name" className="form-control" type="text" />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-4 control-label">Live preview link(2)</label>
                       <div className="col-md-4 inputGroupContainer">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-globe"></i></span>
                            <input onChange={this.handlelivePreview2} name="website" placeholder="Website or domain name" className="form-control" type="text" />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="col-md-4 control-label"></label>
                      <div className="col-md-4">
                        <button type="submit" className="btn btn-warning" >Send <span className="glyphicon glyphicon-send"></span></button>
                      </div>
                      {msg}
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default PortfolioItemAdd;
