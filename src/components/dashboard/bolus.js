import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { handleBolus, updateBolusInput } from '../../actions';
import { populateDateTime } from '../populateDateTime';
import { SuggestedBolus } from './suggestedBolus';

import { connect } from 'react-redux';

class Bolus extends React.Component {


    componentDidMount(){
        //Populate Date & Time, dispatch populate, setState()
        const {date, time, dateTime} = populateDateTime();
        this.props.updateInput({
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

    carbInsulinChange (e){
        console.log(this.props.carbRatio)
        if (e.target.name === "insulin") {
            this.props.updateInput({
                insulinAmount: e.target.value,
                carbAmount: e.target.value * this.props.carbRatio.amount
            })
            
        } else if (e.target.name === "carbs") {
            this.props.updateInput({
                insulinAmount: e.target.value/this.props.carbRatio.amount,
                carbAmount: e.target.value
            })
        }
        //add suggested bolus update
    }

    //Answer to the "State one step behind" problem
    //https://stackoverflow.com/questions/41043419/reactjs-onclick-state-change-one-step-behind

    calculateSuggestedBolus(currentBg) {
        console.log("Calculate Suggested Bolus ran, insulinAmount is: " + this.props.insulinAmount);
        console.log("bloodSugar is:" + this.props.bloodSugar)
        // let sum = this.props.insulinAmount;
        // let bloodSugar;
        // (!currentBg) ? bloodSugar = this.props.bloodSugar: bloodSugar = currentBg;

        // let difference = bloodSugar - this.props.targetBg.amount;
        // //if inputted Blood Sugar is less than target
        // if (this.props.bloodSugar <= this.props.targetBg.amount) {
        //     console.log(difference);
        //     // Do/add nothing unless Blood Sugar is low
        //     if (this.props.bloodSugar < this.props.lowBg.amout) { //When Blood Sugar is low, use less insulin for how low the user is
        //         sum -= ((this.props.lowBg.amout - this.props.bloodSugar)/this.props.correction.amount)
        //     }
        // } else { //Add insulin for the amount the User's BG is High
        //     sum += ((this.props.bloodSugar - this.props.targetBg.amount)/this.props.correction.amount)
        // }
        // if (sum < 0) sum = 0;
        // this.props.updateInput({
        //     suggestedBolus: sum
        // })
        // return sum;
    }

    render() {
        return (
            <Fragment>
                <form
                    id="bolus-htmlForm"
                    action="#root"
                    onSubmit={(event) => {(e) => this.onSubmit("bolus", e) }}>
                    <fieldset>
                        <label htmlFor="insulin-type">Insulin Type</label>
                        <select id="insulin-type" name="insulinType" defaultValue={this.props.insulinType} 
                            onChange={(e) => this.setState({insulinType: e.target.value})} >
                            <option value="Fiasp">Fiasp</option>
                            <option value="Humalog">Humalog</option>
                            <option value="Novolog">Novolog</option>
                        </select>

                        <div className="insulin-amount">
                            <label htmlFor="bolus-units">Units of Insulin</label>
                            <input type="number" className="insulin-input" name="insulin" id="bolus-units" value={this.props.insulinAmount} 
                                onChange={(e) => {
                                    this.carbInsulinChange(e)
                                    this.calculateSuggestedBolus();
                                    }} /><span>unit(s)</span>
                        </div>
                        <div className="insulin-amount">
                            <label htmlFor="bolus-carbs">Carb Amount</label>
                            <input type="number" className="insulin-input" name="carbs" id="bolus-carbs" value={this.props.carbAmount} 
                                onChange={(e) => this.carbInsulinChange(e)} /><span>gram(s)</span>
                        </div>

                        <label htmlFor="bolus-bg">Blood Sugar</label>
                        <input type="number" id="bolus-bg" defaultValue={this.props.bloodSugar} />

                        <label htmlFor="bolus-date">Date</label>
                        <input type="date" className="date-dash" id="bolus-date" value={this.props.currentDate} 
                            onChange={(e) => this.setState({currentDate: e.target.value})} required/>

                        <label htmlFor="bolus-time">Time</label>
                        <input type="time" className="time-dash" id="bolus-time" value={this.props.currentTime} 
                            onChange={(e) => this.setState({currentTime: e.target.value})} required/>

                        <p>Calculated Units: Units || Carbs + Correction Amount -> Exact Amount</p>

                        <label htmlFor="suggested-bolus">Suggested Bolus Amount</label>
                        <input type="number" className="insulin-input" id="suggested-bolus" name="suggestedBolus" value={this.props.suggestedBolus} step=".5"
                            onChange={(e) => this.setState({suggestedBolus: e.target.value})} required/><span>unit(s)</span>

                        <p>Suggested Total: Exact calculation rounded to nearest whole number.</p>
                        <p>Info Toggle: "Insulin Total Suggestions are calculated and rounded to nearest unit of insulin."</p>

                        <button type="submit" className="submit-button">Add Bolus</button>

                        <Link to='/dashboard'><button type="button" className="dash-back">Back</button></Link>

                    </fieldset>
                </form>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateInput: (inputType, inputAmount) => dispatch(updateBolusInput(inputType, inputAmount))
})

const mapStateToProps = (state) => {
    return {
        increment: state.settings.increment,
        duration: state.settings.duration,
        carbRatio: state.settings.carbRatio,
        correction: state.settings.correction,
        targetBg: state.settings.targetBg,
        lowBg: state.settings.lowBg,
        insulinType: state.bolus.insulinType,
        insulinAmount: state.bolus.insulinAmount,
        carbAmount: state.bolus.carbAmount,
        bloodSugar: state.bolus.bloodSugar,
        suggestedBolus: state.bolus.suggestedBolus,
        currentDate: state.bolus.currentDate,
        currentTime: state.bolus.currentTime
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Bolus);
