import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showSetting } from '../../actions';
import { updateSetting } from '../../actions';

import CarbRatio from './carb-ratio';
import CorrectionFactor from './correction-factor';
import Duration from './duration';
import Increment from './increment';
import TargetBg from './target-bg';

import './settings.css';

//container for all settings related actions - showSetting & updateSetting
//currently also contains static 'HTML' of setting containers

class Settings extends React.Component {

    render() {
        return (
            <div className="settings">

                <h1>Settings</h1>
                <Link to='/dashboard'><button className="home-button">Home</button></Link>

                <div className="settings-div">
                    <h4>Carb Ratio: <span>{this.props.carbRatioAmount}</span></h4>
                    <button
                        name="carbRatio"
                        type="button"
                        id="carb-ratio-trigger"
                        className="setting-button"
                        onClick={(event) => this.props.showSetting(event.target.name)}>Edit</button>
                    {this.props.carbRatioShow && 
                        <CarbRatio currentAmount={this.props.carbRatioAmount}
                        onSubmit={this.updateSetting} />}
                </div>

                <div className="settings-div">
                    <h4>Correction Factor: <span>{this.props.correctionAmount}</span></h4>
                    <button
                        name="correction"
                        type="button"
                        id="correction-factor-trigger"
                        className="setting-button"
                        onClick={(event) => this.props.showSetting(event.target.name)}>Edit</button>
                    {this.props.correctionShow && <CorrectionFactor currentAmount={this.props.correctionAmount}/>}
                </div>

                <div className="settings-div">
                    <h4>Insulin Duration: <span>{this.props.durationAmount}</span></h4>
                    <button
                        name="duration"
                        type="button"
                        id="duration-trigger"
                        className="setting-button"
                        onClick={(event) => this.props.showSetting(event.target.name)}>Edit</button>
                    {this.props.durationShow && <Duration currentAmount={this.props.durationAmount}/>}
                </div>

                <div className="settings-div">
                    <h4>Insulin Increment: <span>{this.props.incrementAmount}</span></h4>
                    <button
                        name="increment"
                        type="button"
                        id="increment-trigger"
                        className="setting-button"
                        onClick={(event) => this.props.showSetting(event.target.name)}>Edit</button>
                    {this.props.incrementShow && <Increment currentAmount={this.props.incrementAmount}/>}
                </div>

                <div className="settings-div">
                    <h4>Target BG: <span>{this.props.targetBgAmount}</span></h4>
                    <button
                        name="targetBg"
                        type="button"
                        id="target-bg-trigger"
                        className="setting-button"
                        onClick={(event) => this.props.showSetting(event.target.name)}>Edit</button>

                    {this.props.targetBgShow && <TargetBg currentAmount={this.props.targetBgAmount}/>}
                </div>

            </div>
        )
    }
}
//this.props.dispatch(updateSetting(amount));

const mapDispatchToProps = (dispatch) => ({
    showSetting: (settingType) => dispatch(showSetting(settingType)),
    updateSetting: (setting) => dispatch(updateSetting(setting))
});

const mapStateToProps = (state) => {
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);


// constructor(props) {
//     super(props);

//     this.showSetting = this.showSetting.bind(this);
//     this.settingSubmit = this.settingSubmit.bind(this);
// }

// showSetting(event) {
//     console.log('Show setting ran', event.target.name);
//     if (event.target.name === 'increment') this.setState({incrementShow: true});
// }

// settingSubmit (event) {
//     event.preventDefault();
//     console.log('Update setting ran', event.target.value);

//     if (event.target.name === 'increment') {
//         this.setState({
//             incrementAmount: event.target.increment,
//             incrementShow: false
//         });
//         event.target.increment = '';
//         //Dispatch Action
//     }
// }

// onSubmit={this.updateSetting}