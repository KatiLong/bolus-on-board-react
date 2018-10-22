import React from 'react';

export default function IobInfo () {
    return (
        <div id="iob-info">
            <p>Insulin on Board, or IOB, represents the amount of short acting insulin (i.e. insulin taken when a user eats carbohydrates) that is still active in a User's body.</p>
            <p>About IOB Function: The above totals are updated every minute or whenever the component mounts. It's main purpose is to allow the User to know, at any given time, if they have insulin left in their system (body) and how much time is left from injection time. It accumulates each Bolus Entry into one total.</p>
            <p>To start the IOB Calculator, add a Bolus with the BOLUS button below.</p>
            <p>Hover over the buttons below for more info on each.</p>
        </div>
    )
}