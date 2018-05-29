import React from 'react';
import PropTypes from 'prop-types';

import '../css/login.css';

const Login = props => (

      <div className="container">

        <form onSubmit={ props.handleSubmit } className="form-signin">
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

Login.propTypes = {
     handleSubmit: PropTypes.func.isRequired,
     handleLoginChange: PropTypes.func.isRequired,
     handlePasswordChange: PropTypes.func.isRequired
}

export default Login;
