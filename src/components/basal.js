import React from 'react';
import { Link } from 'react-router-dom';

function Basal () {
    return (
        <div>
            <form action="" id="basal-form">
                <fieldset>
                    <legend>Basal</legend>

                    <label for="basal-insulin-type">Insulin Type</label>
                    <select id="basal-insulin-type">
                        <option value="Basaglar" selected>Basaglar</option>
                        <option value="Levemir">Levemir</option>
                        <option value="Lantus">Lantus</option>
                    </select>

                    <label for="basal-units">Units of Insulin</label>
                    <input type="number" class="insulin-input" id="basal-units" placeholder="25"/><span>unit(s)</span>
                    <label for="basal-date">Date</label>
                    <input type="date" class="date-dash" id="basal-date"/>
                    <label for="basal-time">Time</label>
                    <input type="time" class="time-dash" id="basal-time"/>

                    <button type="submit">Add Basal</button>

                </fieldset>
            </form>


            <Link to='/dashboard'><button type="button" class="dash-back">Back</button></Link>
        </div>
    )
}

export default Basal;

