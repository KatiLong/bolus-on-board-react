import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSetting } from '../../actions';

function CarbRatio (props) {
    return (
        <div>
            <div className="settings-div" id="settings-carb-ratio">
                <form id="carb-ratio-form" className="settings-forms" 
                onSubmit={(e) => {
                    e.preventDefault();
                    }}>
                    <fieldset>
                        <legend>Carb Ratio</legend>

                        <label htmlFor="carb-ratio">Amount</label>
                        <input type="number" id="carb-ratio" defaultValue={props.currentAmount}/>

                        <button type="submit">Update</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    updateSetting: (settingType) => dispatch(updateSetting(settingType))
});

export default connect(null, mapDispatchToProps)(CarbRatio);


