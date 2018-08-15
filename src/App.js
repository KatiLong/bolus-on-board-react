import React, { Component } from 'react';

import './App.css';
import './responsive.css';
import Login from './components/users/login';
import Signup from './components/users/signup';
import Disclaimer from './components/users/disclaimer';
import UserDashboard from './components/dashboard/user-dashboard';
import Bolus from './components/dashboard/bolus';
import Basal from './components/dashboard/basal';
import BloodGlucose from './components/dashboard/bg';
import A1c from './components/dashboard/a1c';
import Settings from './components/settings/settings';
import Logs from './components/logs';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <header role="banner">
                    <h1>B.O.B.</h1>
                    <h4>Your personal Insulin Tracking helper.</h4>
                </header>
                <Route exact path='/' component={Login}/>
                <Route exact path='/register' component={Signup}/>
                <Route exact path='/register/disclaimer' component={Disclaimer}/>
                <Route exact path='/dashboard' component={UserDashboard}/>
                <Route exact path='/dashboard/bolus' component={Bolus}/>
                <Route exact path='/dashboard/basal' component={Basal}/>
                <Route exact path='/dashboard/blood-glucose' component={BloodGlucose}/>
                <Route exact path='/dashboard/a1c' component={A1c}/>
                <Route exact path='/settings' component={Settings}/>
                <Route exact path='/logs' component={Logs}/>
            </div>
        </Router>
    );
  }
}

export default App;
