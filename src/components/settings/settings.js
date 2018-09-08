import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSetting } from '../../actions';
import { showSetting } from '../../actions';

import CarbRatio from './carb-ratio';
import CorrectionFactor from './correction-factor';
import Duration from './duration';
import Increment from './increment';
import TargetBg from './target-bg';

import './settings.css';

class Settings extends React.Component {

    render() {
        return (
            <div className="settings">

                <h1>Settings</h1>
                <Link to='/dashboard'><button className="home-button">Home</button></Link>
                <div className="settings-div">
                    <h4>Insulin Increment: <span>{this.props.incrementAmount}</span></h4>
                    <button
                        type="button"
                        id="increment-trigger"
                        name="increment"
                        className="setting-button"
                        onClick={(event) => this.props.showSetting(event.target.name)}>Edit</button>
                    {this.props.incrementShow && <Increment />}
                </div>
                <button
                    type="button"
                    id="duration-trigger"
                    className="setting-button"
                    onClick={this.showSetting}>Duration</button>
                <button
                    type="button"
                    id="carb-ratio-trigger"
                    className="setting-button"
                    onClick={this.showSetting}>Carb Ratio</button>
                <button
                    type="button"
                    id="correction-factor-trigger"
                    className="setting-button"
                    onClick={this.showSetting}>Correction Factor</button>
                <button
                    type="button"
                    id="target-bg-trigger"
                    className="setting-button"
                    onClick={this.showSetting}>Target BG</button>

            </div>
        )
    }
}
//this.props.dispatch(updateSetting(amount));

const mapDispatchToProps = (dispatch) => ({
    showSetting: (settingType) => dispatch(showSetting(settingType))
})

const mapStateToProps = (state) => {
    console.log(state);
    return {
        incrementAmount: state.settings.incrementAmount,
        incrementShow: state.settings.incrementShow
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);


//    this.state = {
//        incrementAmount: 5,
//        incrementShow: false,
//        durationAmount: 4,
//        durationShow: false,
//        carbRatioAmount: 9,
//        carbRatioshow: false,
//        correctionAmount: 32,
//        correctionAmountShow: false,
//        targetBgAmount: 110,
//        targetBgShow: false
//    };

//create the reducer
//const settingsSubmit = (event) => {
//    event.preventDefault();
//
//    switch(event.target.name) {
//        case 'increment' :
//            event.target.increment = '';
//        default :
//            return state
//    }
//
//};

//     componentDidMount() {
//     this.props.dispatch((showSetting()))
// }


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