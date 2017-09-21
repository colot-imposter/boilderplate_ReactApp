import React, { Component } from 'react';
import '../styles/App.css';

export default class References extends Component {
  render() {
    let refStyle = {
      "backgroundColor": "#99b3ff",
      "backgroundSize": "cover",
      "backgroundPosition": "top",
      "height": "100%",
      "padding": "20px",
      // "display": "flex",
      "flexDirection":"row",
      "justifyContent":"center"
    }
    let oneRefStyle={
      "paddingLeft":"30px",
      "fontSize":"25px",
      "textAlign":"center",
      "display": "flex",
      "margin":"1em",
      "color":"#0d0056",
      "border-bottom": "1px solid black"

    }
    let paraStyle={
      "margin":".5em",


    }
    return(
      <div className="allReferences" style={refStyle}>
      <div className="reference" style={oneRefStyle}>
      <p style={paraStyle}>Name: Peter</p>
      <p style={paraStyle}>Number: 1800-pickels</p>
      <p style={paraStyle}>About: Colton picks the pickels too. Great Job!</p>
      </div>
      <div className="reference" style={oneRefStyle}>
      <p style={paraStyle}>Name: Franchescha Chooch </p>
      <p style={paraStyle}>Number:  714-I-Am-Liar</p>
      <p style={paraStyle}>About:  If Colton tells you anything about Franchescha, its probably not true...</p>
      </div>
      <div className="reference" style={oneRefStyle}>
      <p style={paraStyle}>Name: Barth Brooks</p>
      <p style={paraStyle}>Number: 1800-barth-bb</p>
      <p style={paraStyle}>About:    Some people cant say their r's and l's I can and Colton can too!! </p>
      </div>
    </div>
    )
  }
}
