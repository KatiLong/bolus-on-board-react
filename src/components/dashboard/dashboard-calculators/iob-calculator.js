import React from 'react';

//Just updating insulinStack and Total IOB amounts (insulin & time)
export function iobCalculator (props) { //should update iob via formula & PUT call
//     console.log(iobObject);
    console.log(props);
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
}