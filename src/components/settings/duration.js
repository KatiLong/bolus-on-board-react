import React from 'react';
import { Link } from 'react-router-dom';

function Duration () {
    return (
        <div>
        <h1>Duration</h1>
        <Link to='/dashboard'><button className="home-button">Home</button></Link>

        <div class="settings-div" id="insulin-duration">
        <button type="button" class="back-button">Back</button>
        <form action="" id="duration-form" class="settings-forms">
        <fieldset>
        <legend>Insulin Duration</legend>

        <label for="duration">Amount</label>
        <input type="number" id="duration" value="4" step="0.25"/>
        <p>Hours</p>

        <button type="submit" class="waves-effect waves-light btn">Update</button>
        </fieldset>
        </form>
        </div>

        </div>
    )
}

export default Duration;

