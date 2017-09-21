import React, { Component } from 'react';
//IMPORT STYLES
import '../styles/App.css';

export default class Home extends Component {
  render() {
    // INLINE STYLING
    let cuisineStyle = {
      "backgroundImage": "linear-gradient(rgba(1, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/cuisine.jpg)",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "height": "100%",
      "padding": "100px"
    }
    let aboutStyle = {
      // "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/dish.jpg)",
      // "backgroundSize": "cover",
      // "textShadow": "1px 1px 2px black",
      // "backgroundPosition": "top",
      // "height": "100%",
      // "padding": "100px"
    }
    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row" style={aboutStyle}>
          <article className="col-lg-6 col-lg-offset-3">
            <h2 className="headings">
              HOME
            </h2>
            <hr/>
            <p className="primary-text">
              Colot-Imposter is a coder.
            </p>
            <p className="primary-text">
              primary-text
            </p>
          </article>
        </section>
        <section className="row" style= {cuisineStyle}>
          <article className="col-lg-5">
            <h2 className="headings">
              Early Life
            </h2>
            <hr/>
            <p className="primary-text">D
              Man on the moon.
            </p>
          </article>
        </section>
      </div>
    );
  }
}
