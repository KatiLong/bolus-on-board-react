import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showSetting } from '../../actions';
import { hideSetting } from '../../actions';
import { updateSetting } from '../../actions';
import { settingOnChange } from '../../actions';

import SettingForm from './settingForm';
// import CarbRatio from './carb-ratio';
// import CorrectionFactor from './correction-factor';
// import Duration from './duration';
// import Increment from './increment';
// import TargetBg from './target-bg';

import './settings.css';

//container for all settings related actions - showSetting & updateSetting
//currently also contains static 'HTML' of setting containers

class Settings extends React.Component {

    handleSubmit(settingType, event) {
        event.preventDefault();

        console.log(settingType, 'Form Submitted');
        //dispatch
        // updateSetting(settingType); 
        //Add success conditional
        this.props.hideSetting(settingType); 
    }
    
    render() {
        return (
            <div className="settings">

                <h1>Settings</h1>
                <Link to='/dashboard'><button className="home-button">Home</button></Link>
                <br/>
                <div className="settings-div">
                    <div className="settings-content">
                        <h4>Carb Ratio: <span>{this.props.carbRatio.amount}</span></h4>
                        {!this.props.carbRatio.show && 
                            <button
                            name="carbRatio"
                            type="button"
                            id="trigger"
                            className="setting-button"
                            onClick={(event) => this.props.showSetting(event.target.name)}>Edit</button>
                        }
                        {this.props.carbRatio.show && 
                            <SettingForm 
                                onSubmit={e => this.handleSubmit("carbRatio", e)}
                                onChange={val => this.props.settingOnChange("carbRatio", val)} 
                                htmlId="carb-ratio"
                                inputName="carbRatio"
                                currentAmount={this.props.carbRatio.amount}
                            />
                        }
                    </div>
                </div>

                <div className="settings-div">
                    <h4>Correction Factor: <span>{this.props.correction.amount}</span></h4>
                    {!this.props.correction.show && 
                        <button
                            name="correction"
                            type="button"
                            id="correction-factor-trigger"
                            className="setting-button"
                            onClick={(event) => this.props.showSetting(event.target.name)}>Edit</button>
                    }
                    {this.props.correction.show && 
                        <SettingForm 
                            onSubmit={e => this.handleSubmit("correction", e)}
                            onChange={val => this.props.settingOnChange("correction", val)} 
                            htmlId="correction-amount"
                            inputName="correctionAmount"
                            currentAmount={this.props.correction.amount}
                        />
                    }
                </div>

                <div className="settings-div">
                    <h4>Insulin Duration: <span>{this.props.duration.amount}</span></h4>
                    {!this.props.duration.show && 
                        <button
                            name="duration"
                            type="button"
                            id="duration-trigger"
                            className="setting-button"
                            onClick={(event) => this.props.showSetting(event.target.name)}>Edit</button>
                    }
                    {this.props.duration.show && 
                        <SettingForm 
                            onSubmit={e => this.handleSubmit("duration", e)}
                            onChange={val => this.props.settingOnChange("duration", val)} 
                            htmlId="duration"
                            inputName="duration"
                            currentAmount={this.props.duration.amount}
                         />
                    }
                </div>

                <div className="settings-div">
                    <h4>Insulin Increment: <span>{this.props.increment.amount}</span></h4>
                    {!this.props.increment.show && 
                        <button
                            name="increment"
                            type="button"
                            id="increment-trigger"
                            className="setting-button"
                            onClick={(event) => this.props.showSetting(event.target.name)}>Edit</button>
                    }
                    {this.props.increment.show && 
                        <SettingForm 
                            onSubmit={e => this.handleSubmit("increment", e)}
                            onChange={val => this.props.settingOnChange("increment", val)} 
                            htmlId="increment"
                            inputName="increment"
                            currentAmount={this.props.increment.amount}
                        />
                    }
                </div>

                <div className="settings-div">
                    <h4>Target BG: <span>{this.props.targetBg.amount}</span></h4>
                    {!this.props.targetBg.show && 
                        <button
                            name="targetBg"
                            type="button"
                            id="target-bg-trigger"
                            className="setting-button"
                            onClick={(event) => this.props.showSetting(event.target.name)}>Edit</button>
                    }
                    {this.props.targetBg.show && 
                        <SettingForm 
                            onSubmit={e => this.handleSubmit("targetBg", e)}
                            onChange={val => this.props.settingOnChange("targetBg", val)} 
                            htmlId="target-bg"
                            inputName="targetBg"
                            currentAmount={this.props.targetBg.amount}
                        />}
                </div>

            </div>
        )
    }
}
//this.props.dispatch(updateSetting(amount));

const mapDispatchToProps = (dispatch) => ({
    showSetting: (settingType) => dispatch(showSetting(settingType)),
    updateSetting: (settingType) => dispatch(updateSetting(settingType)),
    settingOnChange: (settingType, amount) => dispatch(settingOnChange(settingType, amount)),
    hideSetting: (settingType) => dispatch(hideSetting(settingType))
});

const mapStateToProps = (state) => {
    return {
        increment: state.settings.increment,
        duration: state.settings.duration,
        carbRatio: state.settings.carbRatio,
        correction: state.settings.correction,
        targetBg: state.settings.targetBg
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

// carbRatioShow: state.settings.carbRatioShow,
// incrementShow: state.settings.incrementShow,
// durationShow: state.settings.durationShow,
// correctionShow: state.settings.correctionShow,
// targetBgShow: state.settings.targetBgShow