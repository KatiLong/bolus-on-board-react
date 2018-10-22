import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { showSetting, hideSetting, updateSetting, settingOnChange  } from '../../actions';
import './settings.css';
import SettingForm from './settingForm';

//container for all settings related actions - showSetting & updateSetting
//currently also contains static 'HTML' of setting containers


class Settings extends React.Component {

    state = {
        settings: ['carbRatio', 'correction', 'duration', 'incrementInsulin', 'targetBg', 'lowBg']
    }

    handleSubmit(settingType, event) {
        event.preventDefault();
        let currentValue = this.props[settingType].amount;
        console.log('Form Submitted', currentValue, this.props.settingsId);
        // Update settting from Props
        this.props.updateSetting(settingType, currentValue, this.props.settingsId); 
        // Below is happening from updateSetting action
        // this.props.hideSetting(settingType); 
    }
    
    render() {
        if (!this.props.authenticated) {
            return <Redirect to='/' />
        }
        return (
            <div id="settings">

                <h1>Settings</h1>
                <Link to='/dashboard'><button className="home-button">Home</button></Link>
                <br/>
                <p>These settings are plugged into the Bolus Calculator and Insulin On Board calculations. </p>
                <br/>
                
                
                
                    <div className="settings-div col-1 top">
                        <h4 className="settings-info" id="carb-ratio-info-trigger">Carb Ratio: <span>{this.props.carbRatio.amount}</span>
                            <span className="settings-info-box" id="carb-ratio-info">Carb Ratio is how many carbohydrates to 1 unit of insulin needed.</span>
                        </h4>
                        {!this.props.carbRatio.show && 
                            <button
                            name="carbRatio"
                            type="button"
                            id="carb-ratio-trigger"
                            className="setting-button"
                            onClick={(event) => this.props.showSetting(event.target.name)}>Edit
                            
                            </button>
                        }
                        {this.props.carbRatio.show && 
                            <SettingForm 
                                onSubmit={e => this.handleSubmit("carbRatio", e)}
                                onChange={val => this.props.settingOnChange("carbRatio", val)} 
                                htmlId="carb-ratio"
                                inputName="carbRatio"
                                currentAmount={this.props.carbRatio.amount}
                                metric="carbs"
                                step="1"
                                >
                                <h5>Hello World</h5>
                                </SettingForm>
                        }
                    </div>

                    <div className="settings-div col-2 top">
                        <h4 id="correction-info-trigger">Correction Factor: <span>{this.props.correction.amount}</span></h4>
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
                                metric="/ Unit of Insulin"
                                step="1"
                            />
                        }
                    </div>
                
                    <div className="settings-div col-1 middle">
                        <h4 id="duration-info-trigger">Insulin Duration: <span>{this.props.duration.amount}</span></h4>
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
                                metric="hours"
                                step=".25"
                            />
                        }
                    </div>

                    <div className="settings-div col-2 middle">
                        <h4 id="increment-info-trigger">Insulin Increment: <span>{this.props.incrementInsulin.amount}</span></h4>
                        {!this.props.incrementInsulin.show && 
                            <button
                                name="incrementInsulin"
                                type="button"
                                id="increment-trigger"
                                className="setting-button"
                                onClick={(event) => this.props.showSetting(event.target.name)}>Edit</button>
                        }
                        {this.props.incrementInsulin.show && 
                            <SettingForm 
                                onSubmit={e => this.handleSubmit("incrementInsulin", e)}
                                onChange={val => this.props.settingOnChange("incrementInsulin", val)} 
                                htmlId="increment-insulin"
                                inputName="incrementInsulin"
                                currentAmount={this.props.incrementInsulin.amount}
                                metric="units"
                                step=".5"
                            />
                        }
                    </div>
                
                    <div className="settings-div col-1 bottom">
                        <h4  id="target-bg-info-trigger">Target BG: <span>{this.props.targetBg.amount}</span></h4>
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
                                metric="mg/dL"
                                step="1"
                            />}
                    </div>

                    <div className="settings-div col-2 bottom">
                        <h4 id="low-bg-info-trigger">Low BG: <span>{this.props.lowBg.amount}</span></h4>
                        {!this.props.lowBg.show && 
                            <button
                                name="lowBg"
                                type="button"
                                id="low-bg-trigger"
                                className="setting-button"
                                onClick={(event) => this.props.showSetting(event.target.name)}>Edit</button>
                        }
                        {this.props.lowBg.show && 
                            <SettingForm 
                                onSubmit={e => this.handleSubmit("lowBg", e)}
                                onChange={val => this.props.settingOnChange("lowBg", val)} 
                                htmlId="low-bg"
                                inputName="lowBg"
                                currentAmount={this.props.lowBg.amount}
                                metric="mg/dL"
                                step="1"
                            />}
                    </div>
            </div>
        )
    }
}
//this.props.dispatch(updateSetting(amount));

const mapDispatchToProps = (dispatch) => ({
    showSetting: (settingType) => dispatch(showSetting(settingType)),
    updateSetting: (settingType, settingAmount, settingsId) => dispatch(updateSetting(settingType, settingAmount, settingsId)),
    settingOnChange: (settingType, amount) => dispatch(settingOnChange(settingType, amount)),
    hideSetting: (settingType) => dispatch(hideSetting(settingType))
});

const mapStateToProps = (state) => {
    return {
        incrementInsulin: state.settings.incrementInsulin,
        duration: state.settings.duration,
        carbRatio: state.settings.carbRatio,
        correction: state.settings.correction,
        targetBg: state.settings.targetBg,
        lowBg: state.settings.lowBg,
        settingsId: state.user.settingsId,
        authenticated: state.user.authenticated
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

// <p>Hover over a setting for more information.</p>