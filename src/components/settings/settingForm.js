import React from 'react';

function SettingForm (props) {
    return (
        <div>
            <div className="settings-div">
                <form 
                    className="settings-forms" 
                    onSubmit={e => props.onSubmit(e)}>
                    <fieldset>

                        <label htmlFor={props.htmlId}>Amount</label>
                        <input type="number" name={props.inputName} id={props.htmlId} defaultValue={props.currentAmount} />

                        <button type="submit">Update</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}


export default SettingForm;


//Getting input value for Form submit?

// Setting Form props
// onSubmit
// onChange
// legendName
// htmlId
// inputName
// currentAmount
