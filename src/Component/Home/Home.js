import React, { Component } from 'react';
import './Home.css';
import NavBar from'../../Component/Navbar/Navbar';
import SideBar from'../../Component/SideBar/SideBar';
import LogIn from'../../Component/LogIn/LogIn';

import {BrowserRouter as Router,Route} from 'react-router-dom';

class Home extends Component {
  render() {
    return (

      <div class="main">
            <div>
            <NavBar />
            <SideBar />
            
            </div>
            {/* <Router>
              <Route path="/" component={LogIn} />
            </Router> */}
      </div>
    );
  }
}

export default Home;
