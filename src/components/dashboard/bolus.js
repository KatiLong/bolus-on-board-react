import React from 'react';
import { Link } from 'react-router-dom';
import { handleBolus } from '../../actions';
import { connect } from 'react-redux';

function Bolus (props) {
    console.log(props);
    return (
        <div>
            <form
                id="bolus-form"
                action="#root"
                onSubmit={(event) => {
                    event.preventDefault();
                    let insulinType = event.target.insulinType.value;
                    console.log(insulinType);
                    //pass in object
                    props.dispatch(handleBolus(insulinType, props.history));
                }}
            >

                <fieldset>

                    <label for="insulin-type">Insulin Type</label>
                    <select id="insulin-type" name="insulinType" defaultValue="Humalog">
                        <option value="Fiasp">Fiasp</option>
                        <option value="Humalog">Humalog</option>
                        <option value="Novolog">Novolog</option>
                        <option value="Insulin R">Insulin R</option>
                    </select>

                    <div className="insulin-amount">
                        <label for="bolus-units">Units of Insulin</label>
                        <input type="number" className="insulin-input" id="bolus-units" placeholder="6" /><span>unit(s)</span>
                    </div>
                    <div className="insulin-amount">
                        <label for="bolus-carbs">Carb Amount</label>
                        <input type="number" className="insulin-input" id="bolus-carbs" placeholder="54" /><span>gram(s)</span>
                    </div>

                    <label for="bolus-bg">Blood Sugar</label>
                    <input type="number" id="bolus-bg" placeholder="131" />

                    <label for="bolus-date">Date</label>
                    <input type="date" className="date-dash" id="bolus-date" value="2015-05-12" required/>

                    <label for="bolus-time">Time</label>
                    <input type="time" className="time-dash" id="bolus-time" value="16:35" required/>

                    <p>Calculated Units: Units || Carbs + Correction Amount -> Exact Amount</p>

                    <label for="suggested-bolus">Suggested Bolus Amount</label>
                    <input type="number" className="insulin-input" id="suggested-bolus" value="7" required/><span>unit(s)</span>

                    <p>Suggested Total: Exact calculation rounded to nearest whole number.</p>
                    <p>Info Toggle explaining Insulin Calculations: "Insulin Total Suggestions are calculated and rounded to nearest unit of insulin."</p>

                    <button type="submit" className="submit-button">Add Bolus</button>

                    <Link to='/dashboard'><button type="button" className="dash-back">Back</button></Link>

                </fieldset>
            </form>
        </div>
    )
}

export default connect()(Bolus);
