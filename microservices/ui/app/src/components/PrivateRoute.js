import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PortfolioItemAdd from './PortfolioItemAdd';
import PropTypes from 'prop-types';


function PrivateRoute ({component: Component, authed, ...rest}) {

  let user = window.localStorage.getItem('currentUser') || false;

  return (
    <Route
      {...rest}
      render={(props) => user
        ? <PortfolioItemAdd {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

// PrivateRoute.propTypes = {
//      props: PropTypes.oneOfType([
//                 PropTypes.arrayOf(PropTypes.node),
//                 PropTypes.node
//             ]).isRequired,
// }

export default PrivateRoute;
