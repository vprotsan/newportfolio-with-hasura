import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import {AuthConsumer} from 'react-check-auth';
import {AuthProvider} from "react-check-auth";

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

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      authed: false,
      component: '',
    }
    // this.onlogin = this.onlogin.bind(this);
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

  // onlogin = event => {
  //     event.preventDefault();
  //
  //     var url = `https://auth.deterioration37.hasura-app.io/v1/login`;
  //     axios({
  //       "url": "https://auth.deterioration37.hasura-app.io/v1/login",
  //       "method" : 'POST',
  //       "headers": {
  //         "Cache-Control": "no-cache"
  //       },
  //       "provider": "username",
  //       "data": {
  //          "username": this.state.username,
  //          "password": this.state.password
  //      }
  //    }).then((data) => {
  //      this.setState({
  //        authed: true
  //      })
  //      console.log(data);
  //      var authToken = data.auth_token
  //      window.localStorage.setItem('HASURA_AUTH_TOKEN', authToken);
  //    }).catch(function (error) {
  //       console.log(error);
  //    })
  // }

render(){
  // let checkIfloggedIn;
  //
  // if  (( window.localStorage.getItem('HASURA_AUTH_TOKEN') !== "undefined" ) &&
  //      ( window.localStorage.getItem('HASURA_AUTH_TOKEN') !== null )){
  //   checkIfloggedIn = true;
  // } else {
  //   checkIfloggedIn = false;
  // }
  // console.log(checkIfloggedIn);

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
              {/* <Route exact path="/login" render={() => (
                checkIfloggedIn ?
                <Redirect to="/portfolioitemadd"/> :
                <Login
                  handleLoginChange={this.handleLoginChange}
                  handlePasswordChange={this.handlePasswordChange}
                  onLogin={this.onlogin}/>
              )
              }/> */}

              <PrivateRoute authed={this.state.authed} path='/portfolioitemadd' component={PortfolioItemAdd} />
              {/* <Route exact path="/portfolioitemadd" render={() => <PortfolioItemAdd />}/> */}
              <Route exact path="/login" render={() => <Login />} />
              <Route component={ NotFound }/>
            </Switch>
          </div>
          <Menu/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
