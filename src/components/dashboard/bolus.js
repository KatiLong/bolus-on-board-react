import React from 'react';
import { Link } from 'react-router-dom';
import { handleBolus } from '../../actions';
import { populateDateTime } from '../populateDateTime';
import { connect } from 'react-redux';

class Bolus extends React.Component {
    state = {
        insulinType: 'Humalog',
        insulinAmount: 0,
        carbAmount: 0,
        bloodSugar: 110,
        suggestedBolus: 0,
        currentDate: "",
        currentTime: ""
    }

    componentDidMount(){
        //Populate Date & Time, dispatch populate, setState()
        const {date, time, dateTime} = populateDateTime();
        this.setState({
            currentDate: date,
            currentTime: time
        })
    }

    onSubmit (formType, event){
        event.preventDefault();
        let insulinType = event.target.insulinType.value;
        console.log("Bolus Form submitted");
        //pass in object
        // props.dispatch(handleBolus(insulinType, props.history));
    }
    render() {
        return (
            <div>
                <form
                    id="bolus-htmlForm"
                    action="#root"
                    onSubmit={(event) => {(e) => this.onSubmit("bolus", e) }}>
                    <fieldset>
                        <label htmlFor="insulin-type">Insulin Type</label>
                        <select id="insulin-type" name="insulinType" defaultValue="Humalog">
                            <option value="Fiasp">Fiasp</option>
                            <option value="Humalog">Humalog</option>
                            <option value="Novolog">Novolog</option>
                        </select>

                        <div className="insulin-amount">
                            <label htmlFor="bolus-units">Units of Insulin</label>
                            <input type="number" className="insulin-input" id="bolus-units" defaultValue={this.state.insulinAmount} /><span>unit(s)</span>
                        </div>
                        <div className="insulin-amount">
                            <label htmlFor="bolus-carbs">Carb Amount</label>
                            <input type="number" className="insulin-input" id="bolus-carbs" defaultValue={this.state.carbAmount} /><span>gram(s)</span>
                        </div>

                        <label htmlFor="bolus-bg">Blood Sugar</label>
                        <input type="number" id="bolus-bg" defaultValue={this.state.bloodSugar} />

                        <label htmlFor="bolus-date">Date</label>
                        <input type="date" className="date-dash" id="bolus-date" defaultValue={this.state.currentDate} required/>

                        <label htmlFor="bolus-time">Time</label>
                        <input type="time" className="time-dash" id="bolus-time" defaultValue={this.state.currentTime} required/>

                        <p>Calculated Units: Units || Carbs + Correction Amount -> Exact Amount</p>

                        <label htmlFor="suggested-bolus">Suggested Bolus Amount</label>
                        <input type="number" className="insulin-input" id="suggested-bolus" defaultValue={this.state.suggestedBolus} required/><span>unit(s)</span>

                        <p>Suggested Total: Exact calculation rounded to nearest whole number.</p>
                        <p>Info Toggle: "Insulin Total Suggestions are calculated and rounded to nearest unit of insulin."</p>

                        <button type="submit" className="submit-button">Add Bolus</button>

                        <Link to='/dashboard'><button type="button" className="dash-back">Back</button></Link>

                    </fieldset>
                </form>
            </div>
        )
    }
}

export default connect()(Bolus);
