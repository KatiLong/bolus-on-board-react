import React, {Component} from 'react';
import { connect } from 'react-redux';
import { iobOnLogin, updateIob, addIobEntry, updateIobEntry, deleteIobEntry } from '../../actions';
import { iobLoginCalculator } from './dashboard-calculators/login-iob-calculator';
import { iobCalculator } from './dashboard-calculators/iob-calculator';
import { newBolusEntry } from './dashboard-calculators/new-bolus-iob-calculator';

import './dashboard.css';

class InsulinOnBoard extends Component {

    componentDidMount() {
        iobLoginCalculator(this.props)
        iobCalculator(this.props)
        newBolusEntry(this.props)         
    }


    render(){
        return (
            <section id="iob-display">
                <h4>Insulin On Board:</h4>
                <span>Units: <span id="i-o-b">{this.props.iobAmount}</span></span>
                <span> | </span>
                <span>Time Remaining: <span id="iob-time">{this.props.iobTimeLeft}</span></span>
            </section>
        )}
}

const mapDispatchToProps = (dispatch) => ({
    updateIob: (iob) => dispatch(updateIob(iob)),
    iobOnLogin: (iob) => dispatch(iobOnLogin(iob)),
    addIobEntry: (bolusEntry) => dispatch(addIobEntry(bolusEntry)),
    updateIobEntry: (iobEntry) => dispatch(updateIobEntry(iobEntry)),
    deleteIobEntry: (iobEntry) => dispatch(deleteIobEntry(iobEntry))
});

const mapStateToProps = (state) => {
    return {
        iobAmount: state.iob.iobAmount,
        iobTimeLeft: state.iob.iobTimeLeft,
        iobStack: state.iob.iobStack,
        duration: state.settings.duration.amount
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InsulinOnBoard);