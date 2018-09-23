import React from 'react';

export const iobLoginCalculator = (props) => {

    console.log(props);
    //All the variables needed for calculation and payload
    const loginTime = (new Date()).getTime();
    let currentInsulinStack = [...props.iobStack];
    let bolusRate;
    let updatedInsulinStack, deleteStackEntry;
    let duration = (props.duration)*3600000;
    let totalIOBAmount = props.iobAmount;
    let totalIOBTime = props.iobTimeLeft;
    // let iobId =  $('#current-user-iob').val();
    // let username = $('#current-username').val();

    console.log(loginTime);

    //If no entries, update TotalIob Displays and return
    // if (currentInsulinStack.length === 0) {
    //     console.log(totalIOBTime);
    //     updateIob({
    //         iobAmount: 0,
    //         iobTimeLeft: 0
    //     })
    // } else { //Calculates an updated IOB based on how much time has passed
    //     updatedInsulinStack = currentInsulinStack.map((el, ind) => {
    //         let timeElapsed = loginTime - el.timeStart;

    //         //If it's been longer than the User's set duration, zero out the element
    //         if (timeElapsed >= duration) {
    //             console.log('Element Zeroed Out', timeElapsed);

    //             totalIOBAmount = Math.min(Math.max((totalIOBAmount - el.currentInsulin), 0), duration);
    //             totalIOBTime = Math.min(Math.max((totalIOBTime - el.timeRemaining), 0), duration);
    //             el.timeRemaining = 0;
    //             el.currentInsulin = 0;

    //             return el;
    //         }
    //         //Updating totals for Element and Global Totals
    //         bolusRate = ((el.entryAmount)/(duration-900000))*timeElapsed

    //         el.timeRemaining = Math.min(Math.max((el.timeRemaining - timeElapsed), 0), duration);
    //         el.currentInsulin = Math.min(Math.max(el.currentInsulin - bolusRate, 0), duration);

    //         totalIOBAmount = Math.min(Math.max(totalIOBAmount - bolusRate, 0), duration);

    //         //Setting Total IOB Time to highest Time Remaining of an Entry
    //         if (totalIOBTime < el.timeRemaining) totalIOBTime = el.timeRemaining

    //         //Update the Entry on the server
    //         // updatedStackEntry(el._id, el);
    //         //Updating local Entry
    //         return el;

    //     }).filter((el)=> {
    //         console.log(el);
    //         // if (el.timeRemaining === 0) deleteStackEntry(iobId, el._id);
    //         return !(el.timeRemaining === 0);
    //     }); //Filter out entries that have zeroed out

    //     //    Math.min(Math.max((totalIOBTime - timeElapsed), 0), duration);

    //     console.log(updatedInsulinStack);
    //     // updateIob(iobId, {
    //     //     insulinOnBoard: {
    //     //         amount: totalIOBAmount,
    //     //         timeLeft: totalIOBTime
    //     //     }
    //     // });

    //     // $('#i-o-b').text(`${Math.round(totalIOBAmount * 100) / 100}`);
    //     // $('#iob-time').text(`${Math.round((totalIOBTime/3600000) * 100) / 100}`);
    // }
    // console.log(updatedInsulinStack);
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