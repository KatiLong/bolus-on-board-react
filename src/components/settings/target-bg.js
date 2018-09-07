import React from 'react';
import { Link } from 'react-router-dom';

function TargetBg () {
    return (
        <div>
        <h1>TargetBg</h1>
        <Link to='/dashboard'><button className="home-button">Home</button></Link>

        <div class="settings-div" id="settings-target-bg">
        <button type="button" class="back-button waves-effect waves-light btn">Back</button>
        <form action="" id="target-bg-form" class="settings-forms">
        <fieldset>
        <legend>Target BG</legend>

        <label for="target-bg">Amount</label>
        <input type="number" id="target-bg" value="120"/>

        <button type="submit" class="waves-effect waves-light btn">Update</button>
        </fieldset>
        </form>
        </div>


        </div>
    )
}

export default TargetBg;

