import React from 'react';

export default function IobInfo () {
    return (
        <div id="iob-info">
            <ul>
                <li><p>Insulin on Board, or IOB, represents the amount of short acting insulin (i.e. insulin taken when a user eats carbohydrates) that is still active in a User's body.</p></li>
                <li><p>To start the IOB Calculator, add a Bolus with the BOLUS button below.</p></li>
                <li><p>The Blood Sugar button allows a user to track a Blood Glucose reading.</p></li>
                <li><p>The Basal button allows a user to track a Basal shot, which is specifically a Long-Acting Insulin (generally lasting for 24 hours) and taken once or twice daily.</p></li>
                <li><p>The A1c button allows a user to track an A1c reading, a bloodwork test generally reccomended every three months.</p></li>
                <li><p>Settings allow the User to update factors specific to them in making calculations, and these are use in the IOB Calculator as well as the Bolus Calculator.</p></li>
            </ul>
        </div>
    )
}