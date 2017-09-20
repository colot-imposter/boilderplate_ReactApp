import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){

    let navTitle = {
          "fontFamily": "Arizonia",
          "fontSize": "180%"}
      return (
        <div className="container-fluid nav">
          <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li style={navTitle}>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  <Link  className="selected" to="./">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>

{this.props.children}
</div>
          )
        }
      }
