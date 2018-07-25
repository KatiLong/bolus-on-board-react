import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Disclaimer from './components/disclaimer';
import UserDashboard from './components/user-dashboard';
import Bolus from './components/bolus';
import Basal from './components/basal';
import BloodGlucose from './components/bg';
import A1c from './components/a1c';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path='/' component={Login}/>
                <Route exact path='/register' component={Signup}/>
                <Route exact path='/register/disclaimer' component={Disclaimer}/>
                <Route exact path='/dashboard' component={UserDashboard}/>
                <Route exact path='/dashboard/bolus' component={Bolus}/>
                <Route exact path='/dashboard/basal' component={Basal}/>
                <Route exact path='/dashboard/blood-glucose' component={BloodGlucose}/>
                <Route exact path='/dashboard/a1c' component={A1c}/>
            </div>
        </Router>
    );
  }
}

export default App;
