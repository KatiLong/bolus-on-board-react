import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import IobCalculator from './iob-calculator';

import './dashboard.css';

class UserDashboard extends React.Component {

    render() {
        if (!this.props.authenticated) {
            return <Redirect to='/' />
        }
        return (
            <Fragment>
                <section id="user-dashboard">
                    <h3>User Dashboard</h3>

                    <div className="chip" id="current-user"></div>
                    <input id="current-username" type="hidden"/>
                    <input id="current-username-id" type="hidden"/>
                    <input id="current-user-iob" type="hidden"/>

                    <IobCalculator />

                    <div id="dashboard-buttons">
                        <div id="dash-section-1">
                            <Link to='/dashboard/bolus'><button type="button" id="bolus-trigger" className="dash-button dash-4">Bolus
                                <span className="info-box" id="bolus">Bolus allows a User to input carbs and blood sugar to calculate a suggested bolus amount.</span>
                            </button></Link>
                            <Link to='/dashboard/blood-glucose'><button type="button" id="bg-trigger" className="dash-button dash-4 tooltip">Blood Sugar
                                <span className="info-box" id="bg">The Blood Sugar button allows a user to track a Blood Glucose reading.</span>
                            </button></Link>
                        </div>
                        <div id="dash-section-2">
                            <Link to='/dashboard/basal'><button type="button" id="basal-trigger" className="dash-button dash-4">Basal
                                <span className="info-box" id="basal">The Basal button allows a user to track a Basal shot, which is specifically a Long-Acting Insulin (generally lasting for 24 hours) and taken once or twice daily.</span>
                            </button></Link>
                            <Link to='/dashboard/a1c'><button type="button" id="a1c-trigger" className="dash-button dash-4">A1c
                                <span className="info-box" id="a1c">The A1c button allows a user to track an A1c reading, a bloodwork test generally recommended every three months.</span>
                            </button></Link>
                        </div>
                    </div>
                    <div className="lower-dash-buttons">
                        <Link to='/settings/'><button type="button" id="settings-trigger" className="dash-button dash-2">Settings
                            <span className="info-box" id="settings-info">
                                Settings allow the User to update factors specific to them in making calculations, and these are use in the IOB Calculator as well as the Bolus Calculator.
                            </span>
                        </button></Link>
                    </div>
                    
                </section>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.user.authenticated
    }
};

export default connect(mapStateToProps)(UserDashboard);

/* <Link to='/logs/'><button type="button" id="logs-trigger" className="dash-button dash-2">Logs</button></Link> */  
