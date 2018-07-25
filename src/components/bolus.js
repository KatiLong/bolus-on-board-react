import React from 'react';
import { Link } from 'react-router-dom';

function Bolus () {
    return (
        <div>
            <form id="bolus-form" action="#root">

                <fieldset>

                    <label for="insulin-type">Insulin Type</label>
                    <select id="insulin-type">
                        <option value="Fiasp">Fiasp</option>
                        <option value="Humalog" selected>Humalog</option>
                        <option value="Novolog">Novolog</option>
                        <option value="Insulin R">Insulin R</option>
                    </select>

                    <div class="insulin-amount">
                        <label for="bolus-units">Units of Insulin</label>
                        <input type="number" class="insulin-input" id="bolus-units" placeholder="6" value="6"/><span>unit(s)</span>
                    </div>
                    <div class="insulin-amount">
                        <label for="bolus-carbs">Carb Amount</label>
                        <input type="number" class="insulin-input" id="bolus-carbs" placeholder="54" value="54"/><span>gram(s)</span>
                    </div>

                    <label for="bolus-bg">Blood Sugar</label>
                    <input type="number" id="bolus-bg" placeholder="131" value="131"/>

                    <label for="bolus-date">Date</label>
                    <input type="date" class="date-dash" id="bolus-date" value="2015-05-12" required/>

                    <label for="bolus-time">Time</label>
                    <input type="time" class="time-dash" id="bolus-time" value="16:35" required/>

                    <p>Calculated Units: Units || Carbs + Correction Amount -> Exact Amount</p>

                    <label for="suggested-bolus">Suggested Bolus Amount</label>
                    <input type="number" class="insulin-input" id="suggested-bolus" value="7" required/><span>unit(s)</span>

                    <p>Suggested Total: Exact calculation rounded to nearest whole number.</p>
                    <p>Info Toggle explaining Insulin Calculations: "Insulin Total Suggestions are calculated and rounded to nearest unit of insulin."</p>

                    <button type="submit" class="submit-button">Add Bolus</button>

                    <Link to='/dashboard'><button type="button" class="dash-back">Back</button></Link>

                </fieldset>
            </form>
        </div>
    )
}

export default Bolus;
