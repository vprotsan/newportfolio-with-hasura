import React from 'react';
import logo from '../images/logo.png';
import logo2x from '../images/logo@2x.png';
import coffee from '../images/coffee.png';

const Homepage = () => (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column col-md-offset-6" id="skills">
        <header className="App-header col-xs-12">
          <img srcSet={`${logo},
                       ${logo2x} 1.5x,
                       ${logo2x} 2x`}
           src={logo} alt="Protsan full stack developer" />

          <h1 className="App-title">V.Protsan</h1>
          <p className="tagline">full stack web developer</p>
          <p>Passionate about adopting ideas <br /> and bringing them to life through technology</p>
        </header>
        <div className="footnote">
             <img src={coffee} alt="Work hard play hard" />
        </div>
      </section>
)

export default Homepage;
