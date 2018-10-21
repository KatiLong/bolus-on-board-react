import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
// import './components/settings/settings.css';
import './responsive.css';
import Login from './components/users/login';
import Register from './components/users/signup';
import UserDashboard from './components/dashboard/dashboard';
import Bolus from './components/dashboard/bolus';
import Basal from './components/dashboard/basal';
import BloodGlucose from './components/dashboard/bg';
import A1c from './components/dashboard/a1c';
import Settings from './components/settings/settings';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <header role="banner">
                    <h1>B.O.B.</h1>
                    <h4>Your personal Insulin tracking helper.</h4>
                </header>
                <Route exact path='/' component={Login}/>
                <Route exact path='/register' component={Register}/>

                <Route exact path='/dashboard' component={UserDashboard}/>
                <Route exact path='/dashboard/bolus' component={Bolus}/>
                <Route exact path='/dashboard/bolus-status' component={BolusStatus}/>
                <Route exact path='/dashboard/basal' component={Basal}/>
                <Route exact path='/dashboard/blood-glucose' component={BloodGlucose}/>
                <Route exact path='/dashboard/a1c' component={A1c}/>
                <Route exact path='/settings' component={Settings}/>

            </div>
        </Router>
    );
  }
}

//map state to props toDashboard (from state to component)
//if (this.state.toDashboard === true) {
//    return <Redirect to='/dashboard' />
//}

const mapStateToProps = (state) => {
    return {
        authenticated: state.user.authenticated
    }
};

//<Route exact path='/settings/carb-ratio' component={CarbRatio}/>
//    <Route exact path='/settings/correction' component={CorrectionFactor}/>
//        <Route exact path='/settings/duration' component={Duration}/>
//            <Route exact path='/settings/increment' component={Increment}/>
//                <Route exact path='/settings/target-bg' component={TargetBg}/>

//LOGS
// import Logs from './components/logs';
// <Route exact path='/logs' component={Logs}/>

export default connect(mapStateToProps)(App);
