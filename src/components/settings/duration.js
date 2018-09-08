import React from 'react';
import { Link } from 'react-router-dom';

function Duration () {
    return (
        <div>
            <div className="settings-div" id="insulin-duration">
                <form action="" id="duration-form" class="settings-forms">
                    <fieldset>
                        <legend>Insulin Duration</legend>

                        <label for="duration">Amount</label>
                        <input type="number" id="duration" value="4" step="0.25"/>
                        <p>Hours</p>

                        <button type="submit">Update</button>
                    </fieldset>
                </form>
            </div>

        </div>
    )
}

export default Duration;

