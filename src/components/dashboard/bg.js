import React from 'react';
import { Link } from 'react-router-dom';
import { populateDateTime } from '../populateDateTime';

class BloodGlucose extends React.Component {
    state = {
        bgAmount: 0,
        currentDate: "",
        currentTime: "",
        DateTime: ""
    }
    componentDidMount(){
        const {date, time, dateTime} = populateDateTime();
        this.setState({
            currentDate: date,
            currentTime: time,
            DateTime: dateTime
        })
    }
    onSubmit (formType, event){
        event.preventDefault();
        //dispatch action to POST to server
        console.log('BG form submitted');
        props.dispatch(handleDashForm({
            formType,
            bgAmount: this.state.bgAmount,
            currentDate: this.state.currentDate,
            currentTime: this.state.currentTime,
            DateTime: this.state.DateTime 
        }, props.history));

        this.setState({
            bgAmount: 0,
            currentDate: "",
            currentTime: "",
            DateTime: ""
        });
    }

    render() {
        return (
            <div>
                <form id="blood-glucose-form" onSubmit={(e) => this.onSubmit("blood-glucose", e)} >
                    <fieldset>
                        <legend>Blood Glucose</legend>
                        <p>For correction calculator, use BOLUS from previous menu.</p>
                        <label htmlFor="bg-input">Blood Sugar</label>
                        <input type="number" id="bg-input" defaultValue={this.state.bgAmount} /><span>mg/dl</span>
                        <label htmlFor="bg-date">Date</label>
                        <input type="date" className="date-dash" id="bg-date" defaultValue={this.state.currentDate} />
                        <label htmlFor="bg-time">Time</label>
                        <input type="time" className="time-dash" id="bg-time" defaultValue={this.state.currentTime} />

                        <button type="submit" className="submit-button">Add BG</button>

                    </fieldset>
                </form>

                <Link to='/dashboard'><button type="button" className="dash-back">Back</button></Link>
            </div>
        )
    }
}

export default BloodGlucose;
