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
        const {date, time} = populateDateTime();
        this.setState({
            currentDate: date,
            currentTime: time
        })
    }

    onSubmit (formType, event){
        event.preventDefault();
        let insulinType = event.target.insulinType.value;
        console.log("Bolus Form submitted");

        //Add Bolus Entry to Server
        //Update Insulin on Board

        // props.dispatch(handleBolus(insulinType, props.history));
    }

    carbInsulinChange (e){
        console.log(this.props.carbRatio)
        if (e.target.name === "insulin") {
            this.setState({
                insulinAmount: e.target.value,
                carbAmount: e.target.value * this.props.carbRatio.amount
            }, () => {
                this.calculateSuggestedBolus()
            })
            
        } else if (e.target.name === "carbs") {
            this.setState({
                insulinAmount: e.target.value/this.props.carbRatio.amount,
                carbAmount: e.target.value
            }, () => {
                this.calculateSuggestedBolus()
            })
        }
        //add suggested bolus update
    }

    calculateSuggestedBolus() {
        console.log("Calculate Suggested Bolus ran");
        let sum = 0 + parseFloat(this.state.insulinAmount);

        let difference = this.state.bloodSugar - this.props.targetBg.amount;
        console.log(difference);
        //if inputted Blood Sugar is less than target
        if (this.state.bloodSugar <= this.props.targetBg.amount) {
            console.log("BG below");
            // Do/add nothing unless Blood Sugar is low
            if (this.state.bloodSugar <= this.props.lowBg.amout) { //When Blood Sugar is low, use less insulin for how low the user is
                console.log("BG Low");
                sum -= ((this.props.lowBg.amout - this.state.bloodSugar)/this.props.correction.amount)
                console.log(typeof(sum), sum);
            }
        } else { //Add insulin for the amount the User's BG is High
            console.log("Calculator Else", sum, (this.state.bloodSugar - this.props.targetBg.amount), this.props.correction.amount)
            sum += ((this.state.bloodSugar - this.props.targetBg.amount)/this.props.correction.amount);
            console.log(typeof(sum), sum);
            // console.log(sum)
        }
        //Suggested Bolus should never go below zero
        if (sum < 0) sum = 0;

        this.setState({
            suggestedBolus: sum
        })
        // return sum;
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
                        <select id="insulin-type" name="insulinType" defaultValue={this.state.insulinType} 
                            onChange={(e) => this.setState({insulinType: e.target.value})} >
                            <option value="Fiasp">Fiasp</option>
                            <option value="Humalog">Humalog</option>
                            <option value="Novolog">Novolog</option>
                        </select>

                        <div className="insulin-amount">
                            <label htmlFor="bolus-units">Units of Insulin</label>
                            <input type="number" className="insulin-input" name="insulin" id="bolus-units" value={this.state.insulinAmount} 
                                onChange={(e) => this.carbInsulinChange(e)} /><span>unit(s)</span>
                        </div>
                        <div className="insulin-amount">
                            <label htmlFor="bolus-carbs">Carb Amount</label>
                            <input type="number" className="insulin-input" name="carbs" id="bolus-carbs" value={this.state.carbAmount} 
                                onChange={(e) => this.carbInsulinChange(e)} /><span>gram(s)</span>
                        </div>

                        <label htmlFor="bolus-bg">Blood Sugar</label>
                        <input type="number" id="bolus-bg" defaultValue={this.state.bloodSugar}  
                            onChange={(e) => { this.setState({bloodSugar: e.target.value}, () => this.calculateSuggestedBolus())}} />

                        <label htmlFor="bolus-date">Date</label>
                        <input type="date" className="date-dash" id="bolus-date" value={this.state.currentDate} 
                            onChange={(e) => this.setState({currentDate: e.target.value})} required/>

                        <label htmlFor="bolus-time">Time</label>
                        <input type="time" className="time-dash" id="bolus-time" value={this.state.currentTime} 
                            onChange={(e) => this.setState({currentTime: e.target.value})} required/>

                        <p>Calculated Units: Units || Carbs + Correction Amount -> Exact Amount</p>

                        <label htmlFor="suggested-bolus">Suggested Bolus Amount</label>
                        <input type="number" className="insulin-input" id="suggested-bolus" name="suggestedBolus" value={this.state.suggestedBolus} step=".5"
                            onChange={(e) => this.setState({suggestedBolus: e.target.value})} required/><span>unit(s)</span>

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

const mapStateToProps = (state) => {
    return {
        increment: state.settings.increment,
        duration: state.settings.duration,
        carbRatio: state.settings.carbRatio,
        correction: state.settings.correction,
        targetBg: state.settings.targetBg,
        lowBg: state.settings.lowBg
    }
};

export default connect(mapStateToProps)(Bolus);
