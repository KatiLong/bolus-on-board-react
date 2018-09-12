import React, { Fragment } from 'react';
import { connect } from 'react-redux';

class SuggestedBolus extends React.Component {


    calculateSuggestedBolus(currentBg) {
        console.log("Calculate Suggested Bolus ran, insulinAmount is: " + this.state.insulinAmount);
        let sum = this.state.insulinAmount;
        let bloodSugar;
        (!currentBg) ? bloodSugar = this.state.bloodSugar: bloodSugar = currentBg;

        let difference = bloodSugar - this.props.targetBg.amount;
        //if inputted Blood Sugar is less than target
        if (this.state.bloodSugar <= this.props.targetBg.amount) {
            console.log(difference);
            // Do/add nothing unless Blood Sugar is low
            if (this.state.bloodSugar < this.props.lowBg.amout) { //When Blood Sugar is low, use less insulin for how low the user is
                sum -= ((this.props.lowBg.amout - this.state.bloodSugar)/this.props.correction.amount)
            }
        } else { //Add insulin for the amount the User's BG is High
            sum += ((this.state.bloodSugar - this.props.targetBg.amount)/this.props.correction.amount)
        }
        if (sum < 0) sum = 0;
        this.setState({
            suggestedBolus: sum
        })
        // return sum;
    }

    render() {
        return (
            <Fragment>
                        <p>Calculated Units: Units || Carbs + Correction Amount -> Exact Amount</p>

                        <label htmlFor="suggested-bolus">Suggested Bolus Amount</label>
                        <input type="number" className="insulin-input" id="suggested-bolus" name="suggestedBolus" value={this.state.suggestedBolus} step=".5"
                            onChange={(e) => this.setState({suggestedBolus: e.target.value})} required/><span>unit(s)</span>
            </Fragment>
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

export default connect(mapStateToProps)(SuggestedBolus);
