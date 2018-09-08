import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSetting } from '../../actions';

function Increment (props) {
    return (
        <div>
            <div className="settings-div" id="settings-increment">
                <form action="" id="increment-form" className="settings-forms" onSubmit={props.updateSetting}>
                    <fieldset>
                        <legend>Insulin Increment</legend>

                        <label htmlFor="increment">Amount</label>
                        <input type="number" id="increment" step="0.5" defaultValue={props.incrementAmount}/>

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

export default connect(mapStateToProps, mapDispatchToProps)(Increment);