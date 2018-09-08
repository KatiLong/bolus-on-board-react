import React from 'react';
import { Link } from 'react-router-dom';

function CarbRatio () {
    return (
        <div>
            <div className="settings-div" id="settings-carb-ratio">
                <h4>CarbRatio</h4>
                <form action="" id="carb-ratio-form" className="settings-forms">
                    <fieldset>
                        <legend>Carb Ratio</legend>

                        <label for="carb-ratio">Amount</label>
                        <input type="number" id="carb-ratio" value="9"/>

                        <button type="submit" className="waves-effect waves-light btn">Update</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default CarbRatio;

