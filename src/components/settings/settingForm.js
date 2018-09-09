import React from 'react';

function settingForm (props) {
    return (
        <div>
            <div className="settings-div">
                <form 
                    className="settings-forms" 
                    onSubmit={e => props.onSubmit(e)}>
                    <fieldset>
                        <legend>{props.legendName}</legend>

                        <label htmlFor={props.htmlId}>Amount</label>
                        <input type="number" name={props.inputName} id={props.htmlId} defaultValue={props.currentAmount} />

                        <button type="submit">Update</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}


export default settingForm;


// Setting Form props
// onSubmit
// legendName
// htmlId
// inputName
// currentAmount
