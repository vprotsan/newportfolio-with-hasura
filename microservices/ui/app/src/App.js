import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Menu from './components/Menu';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import NotFound from './components/NotFound';

import './css/resume.css';
import './css/style.css';

const App = () => (
      <BrowserRouter>
        <div className="App" id="page-top">
          <div className="container-fluid p-0">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/portfolio" render={() => <Portfolio />}/>
              <Route exact path="/about" render={() => <About />}/>
              <Route exact path="/contact" render={() => <Contact />}/>
              <Route component={ NotFound }/>
            </Switch>
          </div>
          <Menu/>
        </div>
      </BrowserRouter>

)

export default App;
