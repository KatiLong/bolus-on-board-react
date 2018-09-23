import React, {Component} from 'react';
import { connect } from 'react-redux';
import InsulinOnBoard from './insulin-on-board';
import { iobOnLogin, updateIob, addIobEntry, updateIobEntry, deleteIobEntry } from '../../actions';
// import { iobCalculator } from './dashboard-calculators/iob-calculator';
// import { newBolusEntry } from './dashboard-calculators/new-bolus-iob-calculator';

import './dashboard.css';

class IobCalculator extends Component {

    // componentDidUpdate() {
    //     // Test code for recursive setTimeout Loop
    //     let chainId = Math.random();
    //     console.log('Component Did Update, Set Interval test, chainId: ', chainId);
    //     // Call Calculator First Time
    //     this.calculator();
    //     this.interval = setInterval(() => {
    //         console.log('Set Interval test, chainId: ', chainId)
    //         // Call Calculator Second Time
    //         this.calculator();
    //     }, 5000);
          
    // }
    componentWillUnmount() {
        console.log('Set Interval end');
        clearInterval(this.interval);
    }

    calculator () {
        const mountTime = (new Date()).getTime();
        let currentInsulinStack = (!this.props.insulinStack) ? [] : [...this.props.insulinStack];
        
        let updatedInsulinStack, deleteStackEntry, bolusRate, stackLength;
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