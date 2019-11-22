import React, { Component } from 'react';
import './App.css';
import LogIn from'./Component/LogIn/LogIn';
import Home from'./Component/Home/Home';
import Disease from './Component/Disease/AddDisease/Disease'
import ManageDisease from './Component/Disease/Manage Disease/ManageDisease'

import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LogIn} />
        <Route path="/disease/addDisease" component={Disease} />
        <Route path="/disease/manageDisease" component={ManageDisease} />
      </Router>
    );
  }
}

export default App;
