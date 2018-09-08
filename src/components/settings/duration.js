import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSetting } from '../../actions';

function Duration () {
    return (
        <div>
            <div className="settings-div" id="insulin-duration">
                <form action="" id="duration-form" class="settings-forms">
                    <fieldset>
                        <legend>Insulin Duration</legend>

                        <label htmlFor="duration">Amount</label>
                        <input type="number" id="duration" value="4" step="0.25"/>
                        <p>Hours</p>

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

export default connect(mapStateToProps, mapDispatchToProps)(Duration);


