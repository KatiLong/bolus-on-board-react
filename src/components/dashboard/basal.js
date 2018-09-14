import React from 'react';
import { Link } from 'react-router-dom';
import { populateDateTime } from '../populateDateTime';
import { handleDashForm } from '../../actions';
import { connect } from 'react-redux';

import './dashboard.css';

class Basal extends React.Component {
    state = {
        basalAmount: 0,
        basalType: "Levemir",
        currentDate: "",
        currentTime: ""
    }
    componentDidMount(){
        const {date, time, dateTime} = populateDateTime();
        this.setState({
            currentDate: date,
            currentTime: time
        })
    }
    onSubmit (formType, event){
        event.preventDefault();
        //dispatch action to POST to server
        console.log('BG form submitted');
        // 'insulinType', 'insulinUnits', 'basalDate', 'basalTime', 'loggedInUsername', 'inputDateTime'
        this.props.dispatch(handleDashForm(formType, {
            insulinUnits: this.state.basalAmount,
            insulinType: this.state.basalType,
            basalDate: this.state.currentDate,
            basalTime: this.state.currentTime,
            inputDateTime: this.state.currentDate + 'T' + this.state.currentTime,
            loggedInUsername: this.props.loggedInUsername
        }, this.props.history));

    }
    render() {
        return (
            <div>
                <form action="" id="basal-form" onSubmit={(e) => this.onSubmit("basal", e)} >
                    <fieldset>
                        <legend>Basal</legend>

                        <label htmlFor="basal-insulin-type">Insulin Type</label>
                        <select id="basal-insulin-type" defaultValue={this.state.basalType} onChange={(e) => this.setState({basalType: e.target.value})} >
                            <option value="Basaglar">Basaglar</option>
                            <option value="Levemir">Levemir</option>
                            <option value="Lantus">Lantus</option>
                        </select>

                        <label htmlFor="basal-units">Units of Insulin</label>
                        <input type="number" className="insulin-input" id="basal-units" defaultValue={this.state.basalAmount}
                            onChange={(e) => this.setState({basalAmount: e.target.value})} /><span>unit(s)</span>
                        <label htmlFor="basal-date">Date</label>
                        <input type="date" className="date-dash" id="basal-date" defaultValue={this.state.currentDate} 
                            onChange={(e) => this.setState({currentDate: e.target.value})} />
                        <label htmlFor="basal-time">Time</label>
                        <input type="time" className="time-dash" id="basal-time" defaultValue={this.state.currentTime} 
                            onChange={(e) => this.setState({currentTime: e.target.value})} />

                        <button type="submit">Add Basal</button>

                    </fieldset>
                </form>


                <Link to='/dashboard'><button type="button" className="dash-back">Back</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUsername: state.user.email
    }
};

export default connect(mapStateToProps)(Basal);

