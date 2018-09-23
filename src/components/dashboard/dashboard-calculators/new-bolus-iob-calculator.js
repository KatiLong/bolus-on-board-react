// All parts of this Function can become actions

export const newBolusEntry = (props) => {
    console.log(props);
    //event.target.input_name
    // let iobId =  $('#current-user-iob').val();
    // let username = $('#current-username').val();
    // let totalIOBAmount = iobObject.iobAmount + iobObject.newBolusAmount; //previousEntryAmounts + newEntryAmount
    // let totalIOBTime = iobObject.duration*360000; //previousEntryTimes + newEntryTime

    // //Adds new entry to the insulinStack on server
    // let insulinStackObject = {
    //     entryAmount: iobObject.newBolusAmount,
    //     currentInsulin: iobObject.newBolusAmount,
    //     timeStart: iobObject.initialTime,
    //     timeRemaining: iobObject.duration
    // }
    // console.log(insulinStackObject);


    // //Dispatch an Action with Fetch
    // $.ajax({
    //     type: 'POST',
    //     url: `/iob/insulin-stack/${iobId}`,
    //     dataType: 'json',
    //     data: JSON.stringify(insulinStackObject),
    //     contentType: 'application/json'
    // })
    // .done(function (result) {
    //     console.log(result);
    // })
    // .fail(function (jqXHR, error, errorThrown) {
    //     console.log(jqXHR, error, errorThrown);
    // });

    // updateIob(iobId, {
    //     insulinOnBoard: {
    //         amount: totalIOBAmount,
    //         timeLeft: totalIOBTime
    //     }
    // })
    
    // //Updates HTML with new totals
    // $('#i-o-b').text(`${totalIOBAmount}`);
    // $('#iob-time').text(`${totalIOBTime/3600000}`); //Convert to Hours
}
