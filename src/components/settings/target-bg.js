import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSetting } from '../../actions';

function TargetBg (props) {
    return (
        <div>
            <div class="settings-div" id="settings-target-bg">
                <form action="" id="target-bg-form" class="settings-forms">
                    <fieldset>
                    <legend>Target BG</legend>

                    <label htmlFor="target-bg">Amount</label>
                    <input type="number" id="target-bg" defaultValue={props.targetBgAmount}/>

                    <button type="submit" class="waves-effect waves-light btn">Update</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(TargetBg);