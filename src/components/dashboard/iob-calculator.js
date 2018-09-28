import React, {Component} from 'react';
import { connect } from 'react-redux';
import InsulinOnBoard from './insulin-on-board';
import { updateIobApi, updateIobEntryApi, deleteIobEntryApi, clearIobStack } from '../../actions';

import './dashboard.css';

class IobCalculator extends Component {

    componentDidMount() {
        // Test code for recursive setTimeout Loop
        let chainId = Math.random();
        console.log('Component Did Update, Set Interval test, chainId: ', chainId);
        // Call Calculator First Time
        this.calculator();
        this.interval = setInterval(() => {
            console.log('Set Interval test, chainId: ', chainId)
            // Call Calculator Second Time
            this.calculator();
        }, 5000);
          
    }
    componentWillUnmount() {
        console.log('Set Interval end');
        clearInterval(this.interval);
    }

    calculator () {
        const mountTime = (new Date()).getTime();
        // console.log('Calculator mountTime: ', mountTime);

        let currentInsulinStack = (!this.props.iobStack) ? [] : [...this.props.iobStack];
        
        let updatedInsulinStack, bolusRate, stackLength, timeElapsed;
        let duration = (this.props.duration)*3600000;
        let iobId =  this.props.iobId;
        let settingsId = this.props.settingsId;
        let totalIOBAmount = this.props.iobAmount;
        let totalIOBTime = this.props.iobTimeLeft;

        console.log(duration, iobId, settingsId);
        // Skips Map if Stack is currently Empty, makes sure IOB Amounts are Zeroed Out
        if (currentInsulinStack.length === 0) {
            console.log('Stack is Empty');
            this.props.dispatch(updateIobApi({
                insulinOnBoard: {
                    amount: 0,
                    timeLeft: 0
                }
            }, iobId));

            // Clear Entry Stack (for Testing only)
            // this.props.dispatch(clearIobStack(iobId, currentInsulinStack));
        } else {
            console.log('Stack is not empty');
            // Clear Entry Stack (for Testing only)
            // this.props.dispatch(clearIobStack(iobId, currentInsulinStack));

            // this.props.dispatch(updateIobEntryApi(iobId, currentInsulinStack));

            // this.props.dispatch(deleteIobEntryApi (iobId, elId, history)

            //Updates Each Entry on insulin stack
    //         updatedInsulinStack = currentInsulinStack.map((el, ind) => {
    //             console.log(el);
    //             // Time Elapsed is the difference from IOB Component Mounting (i.e. Login) from the Time of Bolus 
    //             timeElapsed = mountTime - el.timeStart;

    //             //If it's been longer than the User's set duration, zero out the element
    //             if (timeElapsed >= duration) {
    //                 console.log('Element Zeroed Out', timeElapsed);
    //                 //Update Total Amount, Total Time set by Element with most time remaining
    //                 totalIOBAmount = Math.min(Math.max((totalIOBAmount - el.currentInsulin), 0), duration);
                    
    //                 //Set Current Element to 0
    //                 el.timeRemaining = 0;
    //                 el.currentInsulin = 0;
    //                 return el;
    //             }
    //             ///////////From login Calculator/////////////
    // //         //Updating totals for Element and Global Totals
    // //         bolusRate = ((el.entryAmount)/(duration-900000))*timeElapsed

    // //         el.timeRemaining = Math.min(Math.max((el.timeRemaining - timeElapsed), 0), duration);
    // //         el.currentInsulin = Math.min(Math.max(el.currentInsulin - bolusRate, 0), duration);

    // //         totalIOBAmount = Math.min(Math.max(totalIOBAmount - bolusRate, 0), duration);

    // //         //Setting Total IOB Time to highest Time Remaining of an Entry
    // //         if (totalIOBTime < el.timeRemaining) totalIOBTime = el.timeRemaining


    //             //For each element...Subtract 5 minutes, min = 0 and max = set duration
    //             el.timeRemaining = Math.min(Math.max((el.timeRemaining - 300000), 0), duration);

    //             //When entry has 0 time remaining, update everything to 0
    //             if (el.timeRemaining === 0) {
                    
    //                 el.currentInsulin = 0;
    //                 console.log('Time @ 0');
    //             }
    //             //First 15 minutes - time changes, insulin amount does not
    //             else if (el.timeRemaining >= (duration-900000)) {
    //                 //Minus 5 minutes
    //                 console.log('First 15 minutes', el.timeRemaining);
    //             }
    //             //first half of entry duration
    //             else if (el.timeRemaining >= (duration/2)) {
    //                 bolusRate = ((el.entryAmount/2)/((duration-900000)/2))*300000; //5 minute increments
    //                 el.currentInsulin = Math.max((el.currentInsulin - bolusRate), 0);
    //                 totalIOBAmount -= bolusRate;
    //                 console.log('First Half rate');
    //             }
    //             //second half of entry duration
    //             else if (el.timeRemaining < (duration/2)) {
    //                 bolusRate = ((el.entryAmount/2)/((duration/2)))*300000; //5 minute increments
    //                 //            el.currentInsulin = Math.max((el.currentInsulin - bolusRate), 0);
    //                 el.currentInsulin -= bolusRate;
    //                 totalIOBAmount -= bolusRate;
    //                 console.log('Second Half rate', bolusRate);
    //             }
    //             //Catch errors
    //             else {
    //                 console.log('Something went wrong in IOB');
    //                 return false;
    //             }

    //             return el;
    //         //Filter out entries that have zeroed out Locally and on Server
    //         }).filter((el)=> {
    //             console.log(el);
    //             if (el.timeRemaining === 0) this.props.dispatch(deleteIobEntryApi(iobId, el._id));
    //             return !(el.timeRemaining === 0);
    //         });
    //         console.log(updatedInsulinStack);
    //         // Check after Filter for Empty array, update totals to 0 if it is
    //         if (updatedInsulinStack.length === 0) {
    //             console.log('Updated Stack is Empty');
                // this.props.dispatch(updateIobApi({
                //     insulinOnBoard: {
                //         amount: 0,
                //         timeLeft: 0
                //     }
                // }, iobId));
    //         } 
    //         // Updates IOB with New Amounts
    //         else { 
                    // Updates Iob Totals in Server & then Redux State
                    // this.props.dispatch(updateIobApi({
                    //     insulinOnBoard: {
                    //         amount: totalIOBAmount,
                    //         timeLeft: totalIOBTime
                    //     }
                    // }, iobId))
    //         }
        }

        // console.log(result);
        // const initialTime = (new Date()).getTime();
        // let insulinStack;

        // if (result[0].currentInsulinStack.length === 0) insulinStack = [];
        // else insulinStack = [...result[0].currentInsulinStack];

        // setTimeout(() => {
        //     insulinOnBoardCalculator({
        //         insulinStack,
        //         duration,
        //         iobAmount: result[0].insulinOnBoard.amount,
        //         iobTime: result[0].insulinOnBoard.timeLeft,
        //         initialTime
        //     });
        // }, 5000);//300000
    }

    render(){
        return (
            <InsulinOnBoard iobAmount={this.props.iobAmount} iobTimeLeft= {this.props.iobTimeLeft} />
        )}
}

// const mapDispatchToProps = (dispatch) => ({
//     updateIob: (iob) => dispatch(updateIob(iob)),
//     iobOnLogin: (iob) => dispatch(iobOnLogin(iob)),
//     addIobEntry: (bolusEntry) => dispatch(addIobEntry(bolusEntry)),
//     updateIobEntry: (iobEntry) => dispatch(updateIobEntry(iobEntry)),
//     deleteIobEntry: (iobEntry) => dispatch(deleteIobEntry(iobEntry))
// });

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