import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Menu from './components/Menu';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import NotFound from './components/NotFound';

import './css/resume.css';
import './css/style.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      logged: false
    }
    this.onlogin = this.onlogin.bind(this)
    this.handleLoginChange = this.handleLoginChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleLoginChange = e =>
    this.setState({
      username: e.target.value
  })

  handlePasswordChange = e =>
    this.setState({
      password: e.target.value
  })

  onlogin(event) {
      event.preventDefault();
      var url = "https://auth.deterioration37.hasura-app.io/v1/login";
      axios.post(url, {
        "headers": {
            "Content-Type": "application/json"
        },
        "provider": "username",
        "data": {
           "username": this.state.username,
           "password": this.state.password
       }
     }).then(data => {
       this.setState({
         logged: true
       })
       console.log(data);
       var authToken = data.auth_token
       window.localStorage.setItem('HASURA_AUTH_TOKEN', authToken);
     }).catch(function (error) {
        console.log(error);
     })
  }

render(){
  let checkIfloggedIn = ()=>{
    if ( this.state.logged || window.localStorage.getItem('HASURA_AUTH_TOKEN')){
      return true;
    }else {
      return false;
    }
  }
  return(
      <BrowserRouter>
        <div className="App" id="page-top">
          <div className="container-fluid p-0">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/portfolio" render={() => <Portfolio />}/>
              <Route exact path="/about" render={() => <About />}/>
              <Route exact path="/contact" render={() => <Contact />}/>
              <Route exact path="/login" render={() => (
                checkIfloggedIn ?
                <Redirect to="/addPortfolioItem"/> :
                <Login
                  handleLoginChange={this.handleLoginChange}
                  handlePasswordChange={this.handlePasswordChange}
                  onLogin={this.onlogin}/>
                )}
              />
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
