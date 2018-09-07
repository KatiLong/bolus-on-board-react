import React from 'react';
import { Link } from 'react-router-dom';

function Increment (props) {
    return (
        <div>
        <h1>Increment</h1>
        <Link to='/dashboard'><button className="home-button">Home</button></Link>


            <div className="settings-div" id="settings-increment">
                <button type="button" className="back-button waves-effect waves-light btn">Back</button>
                <form action="" id="increment-form" className="settings-forms" onSubmit={props.updateSetting}>
                    <fieldset>
                        <legend>Insulin Increment</legend>

                        <label htmlFor="increment">Amount</label>
                        <input type="number" id="increment" step="0.5"/>

                        <button type="submit">Update</button>
                    </fieldset>
                </form>
            </div>

        </div>
    )
}

export default Increment;

