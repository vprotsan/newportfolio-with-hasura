import React from 'react';
import logo from '../images/logo-blue.png';
import logo2x from '../images/logo-blue@2x.png';
import coffee from '../images/coffee.png';
import preview from '../images/preview.png';
import {Helmet} from "react-helmet";

const Homepage = () => (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column col-md-offset-6" id="skills">
            <Helmet>

                  <meta charset="utf-8" />
                  <meta name="twitter:card" content="summary" />
                  <meta name="og:image" content={preview} />
                  <meta name="og:url" content="http://vprotsan.com" />
                  <meta name="og:site_name" content="Valeriya Protsan full stack developer(Javascript/ReactJS)" />
                  <meta name="og:type" content="website" />

                  <title>Valeriya Protsan - full stack developer(Javascript/ReactJS)</title>
                  <link rel="canonical" href="http://vprotsan.com/contact" />
                  <meta name="description" content="Passionate about adopting ideas and bringing them to life through technology" />
            </Helmet>
            <div>
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
            </div>
      </section>
)

export default Homepage;
