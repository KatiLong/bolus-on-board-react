import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path='/' component={Login}/>
                <Route exact path='/register' component={Signup}/>
            </div>
        </Router>
    );
  }
}

export default App;
