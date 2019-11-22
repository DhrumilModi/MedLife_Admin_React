import React, { Component } from 'react';
import './Navbar.css';
import logo from './logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import {  faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm  justify-content-between ">
      <div className="ExtraWidth">
          <button class="drawer-button">
             <span className="line1"> </span>
             <span className="line2">  </span>
             <span className="line3"> </span>
          </button>     
      </div>
      
      <div>
             <img src={logo} className="logo" alt="Medlife"/>      
      </div>

      <ul className="navbar-nav mx-4 flex-container justify-content-end">
        <li className="nav-item">
        <Link to="/login"><a className="nav-link logout" href="#">Log Out <FontAwesomeIcon icon={faSignOutAlt}/></a></Link>
        </li>
      </ul>
     
    </nav>
    );
  }
}

export default Navbar;
