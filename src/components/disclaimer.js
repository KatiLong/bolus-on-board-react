import React from 'react';
import {Link} from 'react-router-dom';

//When Medical Disclaimer Accepted
//handleSubmit(event) {
//    event.preventDefault();
//    console.log('Medical Disclaimer Accepted');
//
//        //take the input from the user
//        const name = $("#signup-name").val();
//        const username = $("#signup-username").val();
//        const password = $("#signup-password").val();


//        //Set displayed Insulin on Board to zero
//        $("#i-o-b").text("0");
//        $("#iob-time").text("0:00");
//        $("#current-user").text(`${name}`);
//
//        //validate the input
//        if (name == "") {
//            alert('Please add a name');
//        } else if (username == "") {
//            alert('Please add an user name');
//        } else if (password == "") {
//            alert('Please add a password');
//        }
//        //if the input is valid
//        else {
//            //create the payload object (what data we send to the api call)
//            const newUserObject = {
//                name: name,
//                username: username,
//                password: password
//            };
//
//            //API call to create User
//            $.ajax({
//                type: 'POST',
//                url: '/users/create',
//                dataType: 'json',
//                data: JSON.stringify(newUserObject),
//                contentType: 'application/json'
//            })
//            //if call is succefull
//                .done(function (result) {
//                console.log(result);
//
//                $('#current-username-id').val(`${result.userID}`);
//                $('#current-username').val(`${result.loggedInUsername}`);
//                $('#current-user-settings').val(`${result._id}`);
//
//                $('#medical-disclaimer').hide();
//                $('#signup-page').hide();
//                $('form').hide();
//                $('#user-dashboard').show();
//                $('#iob-display').show();
//
//                //Create IOB storage
//                $.ajax({
//                    type: 'POST',
//                    url: `/iob/create`,
//                    dataType: 'json',
//                    data: JSON.stringify(newUserObject),
//                    contentType: 'application/json'
//                })
//                //if call is succefull
//                    .done(function (result) {
//                    const duration = $('#duration').val();
//                    console.log(result);
//                    $('#current-user-iob').val(result._id);
//                    //call Iob on Login
//                    setTimeout(() => {
//                        insulinOnBoardCalculator({
//                            insulinStack: [...result.currentInsulinStack],
//                            duration,
//                            iobAmount: result.insulinOnBoard.amount,
//                            iobTime: result.insulinOnBoard.timeLeft
//                        });
//                    }, 5000);//300000
//                })
//                //if the call is failing
//                    .fail(function (jqXHR, error, errorThrown) {
//                    console.log(jqXHR, error, errorThrown);
//                })
//
//            })
//            //if the call is failing
//                .fail(function (jqXHR, error, errorThrown) {
//                console.log(jqXHR);
//                console.log(error);
//                if (errorThrown === 'Conflict') alert('User with that username already exists');
//                console.log(errorThrown);
//            })
//
//        }


//}

function Disclaimer (props) {
    return (
        <div>
            <section id="medical-disclaimer">
                <div id="disclaimer-background">
                    <div id="disclaimer-wrapper">
                    <p>
                        Bolus on Board - B.O.B. - was built as tool for myself in managing my T1 Diabetes. The larger hope is that others will find it useful as well. Managing T1D can be a daunting task, and I firmly believe in having more accessible tools to empower us in managing it.
                    </p>
                    <p>
                        Before you get started, it's important that you understand and agree to the following.
                    </p>
                    <p>MEDICAL DISCLAIMER</p>
                    <p>THIS APPLICATION IS NOT INTENDED FOR THE PURPOSE OF PROVIDING MEDICAL ADVICE</p>
                    <p>
                        All information, content, and material of this application is for informational purposes only and are not intended to serve as a substitute for the consultation, diagnosis, and/or medical treatment of a qualified physician or healthcare provider.
                    </p>
                    <p>
                        Should any User have any health care related questions, promptly call or consult your physician or healthcare provider. No information contained in this application should be used by any reader to disregard medical and/or health related advice or provide a basis to delay consultation with a physician or a qualified healthcare provider.
                    </p>
                    <p>MEDICAL EMERGENCY</p>
                    <p>
                        If you have a medical emergency, call 911 immediately.
                    </p>
                    <span id="disclaimer-buttons">
                        <Link to='/dashboard'><button type="button" class="submit-button" id="disclaimer-accept">I AGREE</button></Link>
                        <Link to='/register'><button type="button" id="cancel-disclaimer">Cancel</button></Link>
                    </span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Disclaimer;
