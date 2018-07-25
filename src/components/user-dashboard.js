import React from 'react';
import {Link} from 'react-router-dom';

function UserDashboard (props) {
    console.log(props);
    return (
        <div>
            <section id="user-dashboard">
                <h3>User Dashboard</h3>

                <div class="chip" id="current-user"></div>
                <input id="current-username" type="hidden"/>
                <input id="current-username-id" type="hidden"/>
                <input id="current-user-iob" type="hidden"/>

                <section id="iob-display">
                    <h4>Insulin On Board:</h4>
                    <span>Units: <span id="i-o-b"></span></span>
                    <span> | </span>
                    <span>Time Remaining: <span id="iob-time"></span></span>
                </section>

                <Link to='/dashboard/bolus'><button type="button" id="bolus-trigger" class="dash-button dash-4">Bolus</button></Link>
                <Link to='/dashboard/blood-glucose'><button type="button" id="bg-trigger" class="dash-button dash-4">Blood Sugar</button></Link>
                <Link to='/dashboard/basal'><button type="button" id="basal-trigger" class="dash-button dash-4">Basal</button></Link>
                <Link to='/dashboard/a1c'><button type="button" id="a1c-trigger" class="dash-button dash-4">A1c</button></Link>

            </section>
        </div>
    )
}

export default UserDashboard;
