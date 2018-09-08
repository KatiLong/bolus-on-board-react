import React from 'react';
import { Link } from 'react-router-dom';

function TargetBg () {
    return (
        <div>
            <div class="settings-div" id="settings-target-bg">
                <h4>TargetBg</h4>
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

