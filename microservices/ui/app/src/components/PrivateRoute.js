import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PortfolioItemAdd from './PortfolioItemAdd';


function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <PortfolioItemAdd {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

export default PrivateRoute;
