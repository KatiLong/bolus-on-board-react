import React from 'react';
import { Link } from 'react-router-dom';

function CorrectionFactor () {
    return (
        <div>
        <h1>CorrectionFactor</h1>
        <Link to='/dashboard'><button className="home-button">Home</button></Link>

        <button type="button" id="correction-factor-trigger" className="setting-button">Correction Factor</button>
        <div className="settings-div" id="settings-correction-factor">
        <button type="button" className="back-button">Back</button>
        <form action="" id="correction-factor-form" className="settings-forms">
        <fieldset>
        <legend>Correction Factor</legend>

        <label for="correction-factor">Amount</label>
        <input type="number" id="correction-factor" value="32"/>

        <button type="submit">Update</button>
        </fieldset>
        </form>
        </div>

        </div>
    )
}

export default CorrectionFactor;

