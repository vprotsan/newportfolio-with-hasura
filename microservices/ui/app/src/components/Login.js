import React from 'react';

import '../css/login.css';

const Login = props => (

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     username: "",
  //     password: "",
  //     logged: false
  //   }
  //   this.onlogin = this.onlogin.bind(this)
  //   this.handleLoginChange = this.handleLoginChange.bind(this)
  //   this.handlePasswordChange = this.handlePasswordChange.bind(this)
  // }

  // handleLoginChange = e =>
  //   this.setState({
  //     username: e.target.value
  // })
  //
  // handlePasswordChange = e =>
  //   this.setState({
  //     password: e.target.value
  // })

  // onlogin(event) {
  //   event.preventDefault();
  //   var url = "https://auth.deterioration37.hasura-app.io/v1/login";
  //   axios.post(url, {
  //     "headers": {
  //         "Content-Type": "application/json"
  //     },
  //     "provider": "username",
  //     "data": {
  //        "username": this.state.username,
  //        "password": this.state.password
  //    }
  //  }).then(data => {
  //    this.setState({
  //      logged: true
  //    })
  //    console.log(data);
  //    var authToken = data.auth_token
	//    window.localStorage.setItem('HASURA_AUTH_TOKEN', authToken);
  //  }).catch(function (error) {
  //     console.log(error);
  //  })
  // }

      <div className="container">

        <form onSubmit={props.onlogin} className="form-signin">
          <h2 className="form-signin-heading">Please sign in</h2>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input name="login" onChange={props.handleLoginChange} type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input name="password" onChange={props.handlePasswordChange} type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
          <div className="checkbox">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>

      </div>

)

export default Login;
