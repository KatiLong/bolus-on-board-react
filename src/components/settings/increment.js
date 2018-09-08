import React from 'react';
import { Link } from 'react-router-dom';

function Increment (props) {
    return (
        <div>
            <div className="settings-div" id="settings-increment">
                <h4>Increment</h4>
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

