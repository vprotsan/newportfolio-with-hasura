import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => (

  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
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
        </ul>
      </div>
  </nav>
);

export default Menu;
