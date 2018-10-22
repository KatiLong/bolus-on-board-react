import React from 'react';

export default function BolusInfo () {
    return (
        <div id="bolus-info">
            <p>A Bolus injection is generally taken when a User eats food, specifically carbohydrates (i.e. You would need insulin when you eat bread, but not for chicken). The below Calculator takes into most of the factors a User needs to consider when figuring out how much insulin to take.</p>
            <p>Units of Insulin and Carb Amount are connected, so a User can enter either depending on their preference and the other field will be updated.</p>
            <p>Blood Sugar is also calculated into the Total Suggested Bolus. Try entering a number above 110, and you'll see insulin added in the total below. </p>
            <p>The User has complete control of the Suggest Bolus Amount total if they want to adjust it.</p>
            <p style={{'color': 'red'}}>To start the IOB Calculator on the previous page, input a number above zero in the Suggested Bolus Amount.</p>
        </div>
    )
}