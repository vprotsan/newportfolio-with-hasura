import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PortfolioItemAdd from './PortfolioItemAdd';


function PrivateRoute ({component: Component, authed, ...rest}) {

  let user = window.localStorage.getItem('currentUser');

  return (
    <Route
      {...rest}
      render={(props) => user
        ? <PortfolioItemAdd {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

export default PrivateRoute;
