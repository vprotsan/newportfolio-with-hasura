import React from 'react';
import '../css/contact.css';
import {Helmet} from "react-helmet";

const Contact = () => (
  <section className="resume-section p-3 p-lg-5 d-flex flex-column col-md-offset-6" id="contact">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Valeriya Protsan - Contact me</title>
          <link rel="canonical" href="http://vprotsan.com/contact" />
          <meta name="description" content="Valeriya Prostan, contact me" />
      </Helmet>
      <div>
        <h1>Heey!  Look me up on LinkedIn or github!</h1>

        <div className="container" id="panda-animation">
            <div className="container-for-animation">
              <div className="panda-container">
                  <div className="panda">
                      <div className="earleft"></div>
                      <div className="earright"></div>
                      <div className="head">
                          <div className="morda">
                              <div className="smile"></div>
                              <div className="smile2"></div>
                          </div>
                          <div className="eye right"><div></div></div>
                          <div className="eye left"><div></div></div>
                      </div>
                      <div className="body"></div>
                      <div className="armright">
                              <div className="bamboo-in-hand">
                                  <div className="leaves"></div>
                              </div>
                          </div>
                          <div className="armleft">
                              <div className="fingers">
                                  <div className="one"></div>
                                  <div className="two"></div>
                                  <div className="three"></div>
                                  <div className="four"></div>
                              </div>
                          </div>
                          <div className="legleft"></div>
                          <div className="legright"></div>
                  </div>
              </div>
              <div className="bamboo">
                   <div className="tree-one">
                        <div className="leaves"></div>
                  </div>
                  <div className="tree-two">
                        <div className="leaves"></div>
                  </div>
              </div>
            </div>
        </div>

        <ul className="soc">
            <li><a className="soc-linkedin" href="https://linkedin.com/in/vprotsan" > </a></li>
            <li><a className="soc-github" href="https://github.com/vprotsan"> </a></li>
            <li><a className="soc-twitter" href="https://twitter.com/Valeria_Protsan"> </a></li>
            <li><a className="soc-mail soc-icon-last" href="mailto:protsan.valeriya@gmail.com" > </a></li>
        </ul>
      </div>
  </section>
)

export default Contact;
