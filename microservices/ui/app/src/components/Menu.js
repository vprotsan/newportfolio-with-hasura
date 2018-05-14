import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => (

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">V.Protsan</span>
      </a>
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink className="nav-link js-scroll-trigger" exact to="/">home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link js-scroll-trigger" exact to="/portfolio">portfolio</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link js-scroll-trigger" exact to="/about">about</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link js-scroll-trigger" exact to="/contact">contact</NavLink>
          </li>
        </ul>
      </div>
  </nav>
);

export default Menu;
