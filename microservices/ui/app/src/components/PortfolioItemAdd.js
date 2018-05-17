import React, { Component } from 'react';

import '../css/portfolioitemadd.css';

class PortfolioItemAdd extends Component {

    <form class="well form-horizontal" action=" " method="post"  id="contact_form">
        <fieldset>
            <legend>Add New Portfolio Item</legend>

            <div class="form-group">
              <label class="col-md-4 control-label">Title</label>
              <div class="col-md-4 inputGroupContainer">
              <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input  name="first_name" placeholder="First Name" class="form-control"  type="text" />
                </div>
              </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">Category</label>
                <div class="col-md-4 selectContainer">
                    <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
                    <select name="state" class="form-control selectpicker" >
                      <option value=" " >Please select category</option>
                      <option >Wyoming</option>
                    </select>
                  </div>
                </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label">Project Description</label>
                <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                    <textarea class="form-control" name="comment" placeholder="Project Description"></textarea>
              </div>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label">GitHub link</label>
               <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
                    <input name="website" placeholder="Website or domain name" class="form-control" type="text" />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label">Live preview link(1)</label>
               <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
                    <input name="website" placeholder="Website or domain name" class="form-control" type="text" />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label">Live preview link(2)</label>
               <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
                    <input name="website" placeholder="Website or domain name" class="form-control" type="text" />
                </div>
              </div>
            </div>

            <div class="alert alert-success" role="alert" id="success_message">Success <i class="glyphicon glyphicon-thumbs-up"></i> Thanks for contacting us, we will get back to you shortly.</div>

            <div class="form-group">
              <label class="col-md-4 control-label"></label>
              <div class="col-md-4">
                <button type="submit" class="btn btn-warning" >Send <span class="glyphicon glyphicon-send"></span></button>
              </div>
            </div>
        </fieldset>
    </form>

}

export default PortfolioItemAdd;
