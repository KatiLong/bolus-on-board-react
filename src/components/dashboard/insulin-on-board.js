import React, {Component} from 'react';
import { connect } from 'react-redux';
import { iobOnLogin, updateIob, addIobEntry, updateIobEntry, deleteIobEntry } from '../../actions';

import './dashboard.css';

// //Just updating insulinStack and Total IOB amounts (insulin & time)
// function insulinOnBoardCalculator (iobObject) { //should update iob via formula & PUT call
//     console.log(iobObject);
//     //CURRENT issues:
//     //Either need to make function for ONE array element at a Time OR
//     //Find a way to clear all but one Set-timeout at a time

//     let currentInsulinStack = [...iobObject.insulinStack];
//     let updatedInsulinStack, bolusRate, stackLength;
//     let duration = iobObject.duration;
//     let iobId =  $('#current-user-iob').val();
//     let settingId = $('#current-user-settings').val();

//     let totalIOBAmount = iobObject.iobAmount;
//     let totalIOBTime = iobObject.iobTime;

//     //Update Entries if there are any
//     if (currentInsulinStack.length > 0) {

//         //Updates Each Entry on insulin stack
//         updatedInsulinStack = currentInsulinStack.map((el, ind) => {
//             console.log(el);
//             //For each element...Subtract 5 minutes, min = 0 and max = set duration
//             el.timeRemaining = Math.min(Math.max((el.timeRemaining - 300000), 0), duration);

//             //When all entries have 0 time remaining, stop recursively calling
//             if (el.timeRemaining === 0) {
//                 //update everything to 0

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
//             if (el.timeRemaining === 0) deleteStackEntry(iobId, el._id);
//             return !(el.timeRemaining === 0);
//         });
//         console.log(updatedInsulinStack);
//     } else {
//         updatedInsulinStack = [];
//     }
//     //Updating 5 minute time passage

//     totalIOBTime = Math.min(Math.max((totalIOBTime - 300000), 0), duration);
//     console.log('total Time' + totalIOBTime);
//     //Set displayed IOB Totals
//     $('#i-o-b').text(`${Math.round(totalIOBAmount * 100) / 100}`);
//     $('#iob-time').text(`${Math.round((totalIOBTime/3600000) * 100) / 100}`);

//     if (updatedInsulinStack.length === 0 || !updatedInsulinStack) {
//         //Update each entry on insulin Stack
//         updatedInsulinStack.map((el) => {
//             updateStackEntry(el._id, el);
//         })
//     }
//     //Update IOB Totals
//     updateIob(iobId, {
//         insulinOnBoard: {
//             amount: totalIOBAmount,
//             timeLeft: totalIOBTime
//         }
//     });
//     //recursively call insulinOnBoard in 5 minutes
//     setTimeout(() => {
//         console.log('Timeout over', totalIOBTime, totalIOBAmount);

//         insulinOnBoardCalculator({
//             insulinStack: updatedInsulinStack,
//             duration: iobObject.duration,
//             iobAmount: totalIOBAmount,
//             iobTime: totalIOBTime
//         })
//     }, 5000);//300000
// }

class InsulinOnBoard extends Component {

    componentDidMount() {
        
    }

    iobLoginCalculator (result) {

        console.log(result);
        //All the variables needed for calculation and payload
        const loginTime = (new Date()).getTime();
        let currentInsulinStack = [...this.props.iobStack];
        let bolusRate;
        let updatedInsulinStack, deleteStackEntry;
        let duration = (this.props.duration)*3600000;
        let totalIOBAmount = this.props.iobAmount;
        let totalIOBTime = this.props.iobTimeLeft;
        // let iobId =  $('#current-user-iob').val();
        // let username = $('#current-username').val();

        //If no entries, update TotalIob Displays and return
        if (currentInsulinStack.length === 0) {
            console.log(totalIOBTime);
            updateIob({
                iobAmount: 0,
                iobTimeLeft: 0
            })
        } else { //Calculates an updated IOB based on how much time has passed
            updatedInsulinStack = currentInsulinStack.map((el, ind) => {
                let timeElapsed = loginTime - el.timeStart;

                //If it's been longer than the User's set duration, zero out the element
                if (timeElapsed >= duration) {
                    console.log('Element Zeroed Out', timeElapsed);

                    totalIOBAmount = Math.min(Math.max((totalIOBAmount - el.currentInsulin), 0), duration);
                    totalIOBTime = Math.min(Math.max((totalIOBTime - el.timeRemaining), 0), duration);
                    el.timeRemaining = 0;
                    el.currentInsulin = 0;

                    return el;
                }
                //Updating totals for Element and Global Totals
                bolusRate = ((el.entryAmount)/(duration-900000))*timeElapsed

                el.timeRemaining = Math.min(Math.max((el.timeRemaining - timeElapsed), 0), duration);
                el.currentInsulin = Math.min(Math.max(el.currentInsulin - bolusRate, 0), duration);

                totalIOBAmount = Math.min(Math.max(totalIOBAmount - bolusRate, 0), duration);

                //Setting Total IOB Time to highest Time Remaining of an Entry
                if (totalIOBTime < el.timeRemaining) totalIOBTime = el.timeRemaining

                //Update the Entry on the server
                // updatedStackEntry(el._id, el);
                //Updating local Entry
                return el;

            }).filter((el)=> {
                console.log(el);
                // if (el.timeRemaining === 0) deleteStackEntry(iobId, el._id);
                return !(el.timeRemaining === 0);
            }); //Filter out entries that have zeroed out

            //    Math.min(Math.max((totalIOBTime - timeElapsed), 0), duration);

            console.log(updatedInsulinStack);
            // updateIob(iobId, {
            //     insulinOnBoard: {
            //         amount: totalIOBAmount,
            //         timeLeft: totalIOBTime
            //     }
            // });

            // $('#i-o-b').text(`${Math.round(totalIOBAmount * 100) / 100}`);
            // $('#iob-time').text(`${Math.round((totalIOBTime/3600000) * 100) / 100}`);
        }
        console.log(updatedInsulinStack);
        //At end calls insulinOnBoardCalculator loop
        //GET user Settings and Insulin on Board info

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
            <section id="iob-display">
                <h4>Insulin On Board:</h4>
                <span>Units: <span id="i-o-b">{this.props.iobAmount}</span></span>
                <span> | </span>
                <span>Time Remaining: <span id="iob-time">{this.props.iobTimeLeft}</span></span>
            </section>
        )}
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
        duration: state.settings.duration.amount
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InsulinOnBoard);