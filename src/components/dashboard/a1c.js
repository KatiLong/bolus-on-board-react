import React from 'react';
import { Link } from 'react-router-dom';

function A1c () {
    return (
        <div>
            <form action="" id="a1c-form">
                <fieldset>
                    <legend>A1c</legend>

                    <label for="a1c-entry">A1c Result</label>
                    <input type="number" class="insulin-input" id="a1c-entry" step="0.1" placeholder="6.6" required/>

                    <label for="a1c-date">Date</label>
                    <input type="date" class="date-dash" id="a1c-date" required/>

                    <button type="submit" class="submit-button">Add A1c</button>
                </fieldset>
            </form>

            <Link to='/dashboard'><button type="button" class="dash-back">Back</button></Link>
        </div>
    )
}

export default A1c;
