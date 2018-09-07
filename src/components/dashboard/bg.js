import React from 'react';
import { Link } from 'react-router-dom';

function BloodGlucose () {
    return (
        <div>
            <form action="" id="blood-glucose-form">
                <fieldset>
                    <legend>Blood Glucose</legend>
                    <p>For correction calculator, use BOLUS from previous menu.</p>
                    <label for="bg-input">Blood Sugar</label>
                    <input type="number" id="bg-input"/><span>mg/dl</span>
                    <label for="bg-date">Date</label>
                    <input type="date" className="date-dash" id="bg-date"/>
                    <label for="bg-time">Time</label>
                    <input type="time" className="time-dash" id="bg-time"/>

                    <button type="submit" className="submit-button">Add BG</button>

                </fieldset>
            </form>

            <Link to='/dashboard'><button type="button" className="dash-back">Back</button></Link>
        </div>
    )
}

export default BloodGlucose;
