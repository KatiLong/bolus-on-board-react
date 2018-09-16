import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import InsulinOnBoard from './insulin-on-board';

import './dashboard.css';

function UserDashboard (props) {
    console.log(props);
    return (
        <Fragment>
            <section id="user-dashboard">
                <h3>User Dashboard</h3>

                <div className="chip" id="current-user"></div>
                <input id="current-username" type="hidden"/>
                <input id="current-username-id" type="hidden"/>
                <input id="current-user-iob" type="hidden"/>

                <InsulinOnBoard />

                <div id="dashboard-buttons">
                    <Link to='/dashboard/bolus'><button type="button" id="bolus-trigger" className="dash-button dash-4">Bolus</button></Link>
                    <Link to='/dashboard/blood-glucose'><button type="button" id="bg-trigger" className="dash-button dash-4">Blood Sugar</button></Link>
                    <Link to='/dashboard/basal'><button type="button" id="basal-trigger" className="dash-button dash-4">Basal</button></Link>
                    <Link to='/dashboard/a1c'><button type="button" id="a1c-trigger" className="dash-button dash-4">A1c</button></Link>
                </div>
                <div className="lower-dash-buttons">
                    <Link to='/settings/'><button type="button" id="settings-trigger" className="dash-button dash-2">Settings</button></Link>
                </div>
                
            </section>
        </Fragment>
    )
}

export default UserDashboard;

/* <Link to='/logs/'><button type="button" id="logs-trigger" className="dash-button dash-2">Logs</button></Link> */  
