import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import InsulinOnBoard from './insulin-on-board';
import { updateIob, updateIobEntries, deleteIobEntryApi } from '../../actions';
import IobInfo from '../iob-info.js';

import './dashboard.css';

class IobCalculator extends Component {

    state = {
        iobInfoShow: false
    }

    componentDidMount() {
        // Test code for recursive setTimeout Loop
        let chainId = Math.random();
        console.log('Component Did Update, Set Interval test, chainId: ', chainId);
        // Call Calculator First Time
        this.calculator((new Date()).getTime());
        this.interval = setInterval(() => {
            console.log('Set Interval test, chainId: ', chainId)
            // Call Calculator Second Time
            this.calculator((new Date()).getTime());
        }, 15000*5); //1 minute increment -> 5 min increment
          
    }
    componentWillUnmount() {
        console.log('Set Interval end');
        clearInterval(this.interval);
    }

    iobTimeFormat (totalIOBTime) {

        let hour = Math.floor(totalIOBTime);
        let remainder = totalIOBTime - hour;
        console.log('Hour: ', hour, 'remainder: ', remainder);
        let minutes = Math.round(remainder*60)

        if(hour <= 1) {
            return `${minutes} mins`;
        } else {
            return `${hour}:${minutes} mins`;
        }
    }

    toggleIobInfo () {
        console.log('Toggle iobInfo');
        this.setState({iobInfoShow: (this.state.iobInfoShow) ? false : true})
    }

    calculator (mountTime) {
        // const mountTime = (new Date()).getTime();

        let currentInsulinStack = (!this.props.iobStack) ? [] : [...this.props.iobStack];
        
        let updatedInsulinStack, bolusElapsed, bolusRate, timeElapsed;
        let duration = (this.props.duration)*3600000; //In Milliseconds
        let totalIOBAmount = 0;
        let totalIOBTime = 0;

        // Skips Map if Stack is currently Empty, makes sure IOB Amounts are Zeroed Out
        if (currentInsulinStack.length === 0) {
            console.log('Stack is Empty');

            this.props.dispatch(updateIob(0,0));

            // Clear Entry Stack (for Testing only)
            // this.props.dispatch(clearIobStack(iobId, currentInsulinStack));
        } else {
            console.log('Stack is not empty, map running');

            // MAP Updates Each Entry on insulin stack
            updatedInsulinStack = currentInsulinStack.map((el, ind) => {
                // Time Elapsed is the difference from IOB Component Mounting (i.e. Login) from the Time of Bolus
                // Both Numbers calculated using getTime method (number of milliseconds since 1 January 1970 00:00:00)
                timeElapsed = mountTime - el.timeStart;
                // The rate that the insulin has expired
                bolusRate = (el.entryAmount)/(duration-900000);
                // How much insulin has expired
                bolusElapsed = bolusRate*timeElapsed;
                // Element
                // currentInsulin: 1.22
                // entryAmount: 1.22
                // timeRemaining: 4.25
                // timeStart: 1538092839193
                // _id: "5bad6f27a122bf07f21eaafb"

                //If it's been longer than the User's set duration, zero out the element
                if (timeElapsed >= duration) {
                    console.log('Element Zeroed Out', timeElapsed);
                    //Update Total Amount, Total Time set by Element with most time remaining
                    totalIOBAmount = Math.min(Math.max((totalIOBAmount - el.currentInsulin), 0), duration);
                    
                    //Set Current Element to 0
                    el.timeRemaining = 0;
                    el.currentInsulin = 0;
                    return el;
                }

                // For first 15 minutes of Bolus Entry, don't change Amount 
                if (timeElapsed <=  900000) {
                    console.log(el._id, 'First 15 minutes');
                    el.currentInsulin = el.entryAmount;
                    el.timeRemaining = Math.min(Math.max((duration - timeElapsed), 0), duration);

                    totalIOBAmount += el.entryAmount;
                    // Setting Total IOB Time to highest Time Remaining of an Entry
                    if (totalIOBTime < el.timeRemaining) totalIOBTime = el.timeRemaining

                    return el;
                }
                
                // All other cases, run Calculator
                console.log('time start: ', el.timeStart, 'time Elapsed: ', timeElapsed, 'el.timeRemian: ', Math.max((el.timeStart - timeElapsed), 0));
                // Element TimeRemaining calculated from Bolus Start Time & Time Elapesd, minimum amount 0, max amount duration
                el.timeRemaining = Math.min(Math.max((duration - timeElapsed), 0), duration);
                // Element CurrentInsulin calculated from Bolus Total Entry amount & Bolus Elapesd, minimum amount 0, max amount entry amount
                el.currentInsulin = Math.min(Math.max(el.entryAmount - bolusElapsed, 0), el.entryAmount);

                //////TOTALS////
                // Setting Total IOB Time to highest Time Remaining of an Entry
                if (totalIOBTime < el.timeRemaining) totalIOBTime = el.timeRemaining
                // Adding current entry currentInsulin to Total IOB Amount
                totalIOBAmount += el.currentInsulin;

                return el;
    //         //Filter out entries that have zeroed out Locally and on Server
            }).filter((el, index) => {
                console.log(el);
                if (el.timeRemaining === 0) this.props.dispatch(deleteIobEntryApi(this.props.iobId, el._id, index));
                return !(el.timeRemaining === 0);
            });
    //         console.log(updatedInsulinStack);
            // Check after Filter for Empty array, update totals to 0 if it is
            if (updatedInsulinStack.length === 0) {
                console.log('Updated Stack is Empty');
                this.props.dispatch(updateIob(0,0));
            } 
            // Updates IOB with New Amounts
            else { 
                // Updates IOB Stack & IOB Totals in Redux State
                this.props.dispatch(updateIobEntries(updatedInsulinStack))
                this.props.dispatch(updateIob(Math.round(totalIOBAmount * 100) / 100, Math.round((totalIOBTime/3600000)* 100) / 100))
                // totalIOBAmount = Math.min(Math.max(totalIOBAmount - bolusElapsed, 0), duration);
            }
        }

        // console.log(result);
        // const initialTime = (new Date()).getTime();
        // let insulinStack;

        // if (result[0].currentInsulinStack.length === 0) insulinStack = [];
        // else insulinStack = [...result[0].currentInsulinStack];
    }

    render(){
        return (
            <Fragment>
                <InsulinOnBoard iobInfoShow={this.state.iobInfoShow} onClick={() => this.toggleIobInfo()} iobAmount={this.props.iobAmount} iobTimeLeft= {this.props.iobTimeLeft} iobTimeFormat={time => this.iobTimeFormat(time)} />
                {this.state.iobInfoShow && 
                    <IobInfo/>
                }
            </Fragment>
        )} 
}

const mapStateToProps = (state) => {
    return {
        iobAmount: state.iob.iobAmount,
        iobTimeLeft: state.iob.iobTimeLeft,
        iobStack: state.iob.iobStack,
        duration: state.settings.duration.amount,
        email: state.user.email,
        name: state.user.name,
        userId: state.user.userId,
        settingsId: state.user.settingsId,
        iobId: state.user.iobId
    }
};

export default connect(mapStateToProps)(IobCalculator);
