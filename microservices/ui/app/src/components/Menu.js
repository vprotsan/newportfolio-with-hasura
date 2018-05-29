import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Menu = (props) => {

    let user = window.localStorage.getItem('currentUser');

    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
          <div className="loggedInUser">{user ? JSON.parse(user).username : null }</div>
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">V.Protsan</span>
          </a>
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" exact to="/">home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" exact to="/portfolio">portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" exact to="/about">about</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" exact to="/contact">contact</NavLink>
              </li>
              { user
                  ?
                  <ul>
                      <li className="nav-item">
                        <NavLink className="nav-link js-scroll-trigger" exact to="/portfolioitemadd">add new portfolio item</NavLink>
                      </li>
                      <li className="nav-item">
                        <button onClick={props.userLogOut} className="nav-link js-scroll-trigger" >Log out</button>
                      </li>
                  </ul>
                  :
                  null
              }
            </ul>
          </div>
      </nav>

    );

};

Menu.propTypes = {
     userLogOut: PropTypes.func.isRequired,
}

export default Menu;
