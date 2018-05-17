import React, { Component } from 'react';

import '../css/portfolioitemadd.css';

class PortfolioItemAdd extends Component {
    constructor(){
          super();
          this.state = {
              categories: [],
              portfolioItems: [],
              selectValue: null
          }
     }

     createNewPortfolioItem = () => {

     }

     componentDidMount(){
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
                 })
              })
              .catch(function (error) {
                 console.log(error);
              })
             }

    render(){
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
                        <label className="col-md-4 control-label">Category</label>
                        <div className="col-md-4 selectContainer">
                            <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                            <select name="state" className="form-control selectpicker" >
                              <option value=" " >Please select category</option>
                              <option >Wyoming</option>
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
