import React from 'react';
import { Link } from 'react-router-dom';

function CorrectionFactor () {
    return (
        <div>
            <div className="settings-div" id="settings-correction-factor">
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

