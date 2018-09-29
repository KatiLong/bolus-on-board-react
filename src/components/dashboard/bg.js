import React from 'react';
import { Link } from 'react-router-dom';
import { populateDateTime } from '../populateDateTime';
import { handleDashForm } from '../../actions';
import { connect } from 'react-redux';

import './dashboard.css';

class BloodGlucose extends React.Component {
    state = {
        bgAmount: 0,
        currentDate: "",
        currentTime: ""
    }
    componentDidMount(){
        const {date, time} = populateDateTime();
        this.setState({
            currentDate: date,
            currentTime: time
        })
    }
    onSubmit (formType, event){
        event.preventDefault();
        //dispatch action to POST to server
        console.log('BG form submitted');
        // 'bloodGlucose', 'bgDate', 'bgTime', 'loggedInUsername', 'inputDateTime'
        this.props.dispatch(handleDashForm(formType, {
            bloodGlucose: this.state.bgAmount,
            bgDate: this.state.currentDate,
            bgTime: this.state.currentTime,
            inputDateTime: this.state.currentDate + 'T' + this.state.currentTime,
            loggedInUsername: this.props.loggedInUsername 
        }, this.props.history));
    }

    render() {
        return (
            <div>
                <form id="blood-glucose-form" onSubmit={(e) => this.onSubmit("blood-glucose", e)} >
                    <fieldset>
                        <legend>Blood Glucose</legend>
                        <p>For correction calculator, use</p><Link to='/dashboard/bolus'><button type="button">Bolus</button></Link>
                        <label htmlFor="bg-input">Blood Sugar</label>
                        <input type="number" id="bg-input" defaultValue={this.state.bgAmount} 
                            onChange={(e) => this.setState({bgAmount: e.target.value})} /><span>mg/dl</span>
                        <label htmlFor="bg-date">Date</label>
                        <input type="date" className="date-dash" id="bg-date" defaultValue={this.state.currentDate} 
                            onChange={(e) => this.setState({currentDate: e.target.value})}/>
                        <label htmlFor="bg-time">Time</label>
                        <input type="time" className="time-dash" id="bg-time" defaultValue={this.state.currentTime} 
                            onChange={(e) => this.setState({currentTime: e.target.value})}/>

                        <button type="submit" className="submit-button">Add BG</button>

                    </fieldset>
                </form>

                <Link to='/dashboard'><button type="button" className="dash-back">Back</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUsername: state.user.email
    }
};

export default connect(mapStateToProps)(BloodGlucose);
