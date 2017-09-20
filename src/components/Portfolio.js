import React, { Component } from 'react';


export default class Portfolio extends Component {
  render() {



    let aboutStyle = {
      // "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/dish.jpg)",
      // "backgroundSize": "cover",
      // "textShadow": "1px 1px 2px black",
      // "backgroundPosition": "top",
      // "height": "100%",
      // "padding": "100px"
    }
    return (
      <section className="row" style={aboutStyle}>
        <article className="col-lg-6 col-lg-offset-3">
          <h2 className="headings">
            Portfolio
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
    );
  }
}
