import React from 'react';

function SettingForm (props) {
    return (
            <div className="form-div">
                <form 
                    className="settings-forms" 
                    onSubmit={e => props.onSubmit(e)}>
                    <fieldset>

                        <label htmlFor={props.htmlId}>Amount</label>
                        <input autoFocus type="number" name={props.inputName} id={props.htmlId} step={props.step} defaultValue={props.currentAmount} 
                        onChange={e => props.onChange(e.target.value)} />
                        <span className="metric">{props.metric}</span>
                        <button type="submit">Update</button>
                    </fieldset>
                </form>
            </div>
    )
}


export default SettingForm;