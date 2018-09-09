import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSetting } from '../../actions';
import { settingOnChange } from '../../actions';

//How do I access input value on Form Submit? for all setting components
function CarbRatio (props) {
    return (
        <div>
            <div className="settings-div" id="settings-carb-ratio">
                <form id="carb-ratio-form" className="settings-forms" 
                onSubmit={e => props.onSubmit(e)}>
                    <fieldset>
                        <legend>Carb Ratio</legend>

                        <label htmlFor="carb-ratio">Amount</label>
                        <input type="number" name="carbRatioInput" id="carb-ratio" defaultValue={props.currentAmount} 
                        onChange={e => this.props.store.dispatch(settingOnChange(e.target.value))}/>

                        <button type="submit">Update</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => ({
//     updateSetting: (settingType) => dispatch(updateSetting(settingType)),
//     settingOnChange: (userInput) => dispatch(settingOnChange(userInput))
// });

export default connect()(CarbRatio);


// this.props.settingOnChange(e.target.value)