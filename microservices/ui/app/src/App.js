import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import { AuthConsumer } from 'react-check-auth';
import { AuthProvider } from "react-check-auth";

import Menu from './components/Menu';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';
import PortfolioItemAdd from './components/PortfolioItemAdd';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';

import './css/resume.css';
import './css/style.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      authed: false,
      component: <PortfolioItemAdd />,
      currUser: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleLoginChange = e =>
    this.setState({
      username: e.target.value
  })

  handlePasswordChange = e =>
    this.setState({
      password: e.target.value
  })

  handleSubmit = e => {
      alert('prevented');
      e.preventDefault();

      var url = `https://auth.deterioration37.hasura-app.io/v1/login`;
      var authToken;
      axios.post(url, {
            "provider": "username",
            "data": {
                "username": this.state.username,
                "password": this.state.password
            }
      }
     ).then((data) => {
       this.setState({
         authed: true,
         currUser: data.data
       }, function(){
         console.log(this.state.currUser);
       })
       authToken = data.data.auth_token
       window.localStorage.setItem('HASURA_AUTH_TOKEN', authToken);
       console.log(authToken);
     }).catch(function (error) {
        console.log(error);
     })
  }

render(){

  return(
      <BrowserRouter>
        <div className="App" id="page-top">
            { React.version }
          <div className="container-fluid p-0">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/portfolio" render={() => <Portfolio />}/>
              <Route exact path="/about" render={() => <About />}/>
              <Route exact path="/contact" render={() => <Contact />}/>
              <PrivateRoute authed={this.state.authed} path='/portfolioitemadd' component={PortfolioItemAdd} />
              <Route exact path="/login" render={() =>
                                        <Login
                                          handleLoginChange={this.handleLoginChange}
                                          handlePasswordChange={this.handlePasswordChange}
                                          handleSubmit={this.handleSubmit}/>}
                                        />
              <Route component={ NotFound }/>
            </Switch>
          </div>
          <Menu currUser={this.state.currUser.username}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
