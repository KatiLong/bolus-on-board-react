import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSetting } from '../../actions';

function CarbRatio (props) {
    return (
        <div>
            <div className="settings-div" id="settings-carb-ratio">
                <form action="" id="carb-ratio-form" className="settings-forms">
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

const mapStateToProps = (state) => {
    console.log(state);
    return {
        incrementAmount: state.settings.incrementAmount,
        incrementShow: state.settings.incrementShow,
        durationAmount: state.settings.durationAmount,
        durationShow: state.settings.durationShow,
        carbRatioAmount: state.settings.carbRatioAmount,
        carbRatioShow: state.settings.carbRatioShow,
        correctionAmount: state.settings.correctionAmount,
        correctionShow: state.settings.correctionShow,
        targetBgAmount: state.settings.targetBgAmount,
        targetBgShow: state.settings.targetBgShow
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarbRatio);


