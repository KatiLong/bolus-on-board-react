import React from 'react';
import { Link } from 'react-router-dom';
import { handleDashForm, iobOnLogin, updateIob, addIobEntry, updateIobEntry, deleteIobEntry } from '../../actions';
import { populateDateTime } from '../populateDateTime';
import { newBolusEntry } from './dashboard-calculators/new-bolus-iob-calculator';

import { connect } from 'react-redux';

import './dashboard.css';

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
        console.log("Bolus Form submitted");
        // 'bolusCarbs', 'bolusUnits', 'insulinType', 'bolusTime', 'bolusDate', 'bolusAmount', 'loggedInUsername', 'inputDateTime'
        //Add Bolus Entry to Server
        this.props.dispatch(handleDashForm(formType, {
            insulinType: this.state.insulinType,
            bolusUnits: this.state.insulinAmount,
            bolusCarbs: this.state.carbAmount,
            bloodSugar: this.state.bloodSugar,
            bolusAmount: this.state.suggestedBolus,
            bolusDate: this.state.currentDate,
            bolusTime: this.state.currentTime,
            inputDateTime: this.state.currentDate + 'T' + this.state.currentTime,
            loggedInUsername: this.props.loggedInUsername 
        }, this.props.history));

        //Update Insulin on Board 
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
        console.log("Calculate Suggested Bolus ran", this.state.insulinAmount, typeof(this.state.insulinAmount));
        let sum;
        if (this.state.insulinAmount === "" || this.state.carbAmount === "") {
            console.log("Insulin or Carbs empty");
        } else if (this.state.bloodSugar === ""){
            console.log("BG empty");
            sum = 0 + parseFloat(this.state.insulinAmount);
            //Suggested Bolus should never go below zero
            if (sum < 0) sum = 0;
            //Round to Two Decimal Places
            sum = Math.round(sum * 100) / 100
            //Update Suggested Bolus
            this.setState({
                suggestedBolus: sum
            })
        } else { //Calculating Blood Sugar with Total
            sum = 0 + parseFloat(this.state.insulinAmount);
            
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
            //Round to Two Decimal Places
            sum = Math.round(sum * 100) / 100
            //Update Suggested Bolus
            this.setState({
                suggestedBolus: sum
            })
        }
    }

    render() {
        return (
            <div>
                <form
                    id="bolus-htmlForm"
                    action="#root"
                    onSubmit={(e) => this.onSubmit("bolus", e) }>
                    <fieldset>
                        <div id="bolus-section">
                            <label htmlFor="insulin-type">Insulin Type</label>
                            <select id="insulin-type" name="insulinType" defaultValue={this.state.insulinType} 
                                onChange={(e) => this.setState({insulinType: e.target.value})} >
                                <option value="Fiasp">Fiasp</option>
                                <option value="Humalog">Humalog</option>
                                <option value="Novolog">Novolog</option>
                            </select>

                            <div className="half-div">
                                <label htmlFor="bolus-units">Units of Insulin</label>
                                <input type="number" className="insulin-input" name="insulin" id="bolus-units" value={this.state.insulinAmount} 
                                    onChange={(e) => this.carbInsulinChange(e)} /><span>unit(s)</span>
                            </div>
                            <div className="half-div">
                                <label htmlFor="bolus-carbs">Carb Amount</label>
                                <input type="number" className="insulin-input" name="carbs" id="bolus-carbs" value={this.state.carbAmount} 
                                    onChange={(e) => this.carbInsulinChange(e)} /><span>gram(s)</span>
                            </div>

                            <label htmlFor="bolus-bg">Blood Sugar</label>
                            <input type="number" id="bolus-bg" defaultValue={this.state.bloodSugar}  
                                onChange={(e) => { this.setState({bloodSugar: e.target.value}, () => this.calculateSuggestedBolus())}} />
                        </div>
                        <div id="dateTime-section">
                            <div className="half-div">
                                <label htmlFor="bolus-date">Date</label>
                                <input type="date" className="date-dash" id="bolus-date" value={this.state.currentDate} 
                                    onChange={(e) => this.setState({currentDate: e.target.value})} required/>
                            </div>
                            <div className="half-div">
                                <label htmlFor="bolus-time">Time</label>
                                <input type="time" className="time-dash" id="bolus-time" value={this.state.currentTime} 
                                    onChange={(e) => this.setState({currentTime: e.target.value})} required/>
                            </div>
                        </div>
                        <div id="suggested-bolus-section">
                            <label htmlFor="suggested-bolus">Suggested Bolus Amount</label>
                            <input type="number" className="insulin-input" id="suggested-bolus" name="suggestedBolus" value={this.state.suggestedBolus} step=".5"
                                onChange={(e) => this.setState({suggestedBolus: e.target.value})} required/><span>unit(s)</span>
                            <p>Info Toggle: "Insulin Total Suggestions are calculated and rounded to nearest unit of insulin."</p>

                            <button type="submit" className="submit-button">Add Bolus</button>

                            <Link to='/dashboard'><button type="button" className="dash-back">Back</button></Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateIob: (iob) => dispatch(updateIob(iob)),
    iobOnLogin: (iob) => dispatch(iobOnLogin(iob)),
    addIobEntry: (bolusEntry) => dispatch(addIobEntry(bolusEntry)),
    updateIobEntry: (iobEntry) => dispatch(updateIobEntry(iobEntry)),
    deleteIobEntry: (iobEntry) => dispatch(deleteIobEntry(iobEntry))
});

const mapStateToProps = (state) => {
    return {
        iobAmount: state.iob.iobAmount,
        iobTimeLeft: state.iob.iobTimeLeft,
        iobStack: state.iob.iobStack,
        increment: state.settings.increment,
        duration: state.settings.duration,
        carbRatio: state.settings.carbRatio,
        correction: state.settings.correction,
        targetBg: state.settings.targetBg,
        lowBg: state.settings.lowBg,
        loggedInUsername: state.user.email
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Bolus);
