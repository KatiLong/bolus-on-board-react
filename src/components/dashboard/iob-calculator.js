import React, {Component} from 'react';
import { connect } from 'react-redux';
import InsulinOnBoard from './insulin-on-board';
import { iobOnLogin, updateIob, addIobEntry, updateIobEntry, deleteIobEntry } from '../../actions';
// import { iobCalculator } from './dashboard-calculators/iob-calculator';
// import { newBolusEntry } from './dashboard-calculators/new-bolus-iob-calculator';

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
        let currentInsulinStack = (!this.props.insulinStack) ? [] : [...this.props.insulinStack];
        
        let updatedInsulinStack, deleteStackEntry, bolusRate, stackLength, timeElapsed;
        let duration = (this.props.duration)*3600000;
        let iobId =  this.props.iobId;
        let settingsId = this.props.settingsId;
        let totalIOBAmount = this.props.iobAmount;
        let totalIOBTime = this.props.iobTimeLeft;

        console.log(duration, iobId, settingsId);

        if (currentInsulinStack.length === 0) {
            console.log('Stack is Empty');
            this.props.dispatch(updateIob(totalIOBAmount, totalIOBTime));
        } else {
            //All Calculation Code
            //Updates Each Entry on insulin stack
            // updatedInsulinStack = currentInsulinStack.map((el, ind) => {
            //     console.log(el);
            //     timeElapsed = loginTime - el.timeStart;

            //     //If it's been longer than the User's set duration, zero out the element
            //     if (timeElapsed >= duration) {
            //         console.log('Element Zeroed Out', timeElapsed);

            //         totalIOBAmount = Math.min(Math.max((totalIOBAmount - el.currentInsulin), 0), duration);
            //         totalIOBTime = Math.min(Math.max((totalIOBTime - el.timeRemaining), 0), duration);
            //         el.timeRemaining = 0;
            //         el.currentInsulin = 0;

            //         return el;
            //     }
            //     //For each element...Subtract 5 minutes, min = 0 and max = set duration
            //     el.timeRemaining = Math.min(Math.max((el.timeRemaining - 300000), 0), duration);

            //     //When all entries have 0 time remaining, update everything to 0
            //     if (el.timeRemaining === 0) {
                    
            //         el.currentInsulin = 0;
            //         console.log('Time @ 0');
            //     }
            //     //First 15 minutes - time changes, insulin amount does not
            //     else if (el.timeRemaining >= (duration-900000)) {
            //         //Minus 5 minutes
            //         console.log('First 15 minutes', el.timeRemaining);
            //     }
            //     //first half of entry duration
            //     else if (el.timeRemaining >= (duration/2)) {
            //         bolusRate = ((el.entryAmount/2)/((duration-900000)/2))*300000; //5 minute increments
            //         el.currentInsulin = Math.max((el.currentInsulin - bolusRate), 0);
            //         totalIOBAmount -= bolusRate;
            //         console.log('First Half rate');
            //     }
            //     //second half of entry duration
            //     else if (el.timeRemaining < (duration/2)) {
            //         bolusRate = ((el.entryAmount/2)/((duration/2)))*300000; //5 minute increments
            //         //            el.currentInsulin = Math.max((el.currentInsulin - bolusRate), 0);
            //         el.currentInsulin -= bolusRate;
            //         totalIOBAmount -= bolusRate;
            //         console.log('Second Half rate', bolusRate);
            //     }
            //     //Catch errors
            //     else {
            //         console.log('Something went wrong in IOB');
            //         return false;
            //     }

            //     return el;
            // //Filter out entries that have zeroed out Locally and on Server
            // }).filter((el)=> {
            //     console.log(el);
            //     if (el.timeRemaining === 0) deleteStackEntry(iobId, el._id);
            //     return !(el.timeRemaining === 0);
            // });
            // console.log(updatedInsulinStack);
        }

        console.log('Calculator mountTime: ', mountTime);
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