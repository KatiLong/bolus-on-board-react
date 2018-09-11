import React from 'react';
import { Link } from 'react-router-dom';
import { populateDateTime } from '../populateDateTime';
import { handleDashForm } from '../../actions';
import { connect } from 'react-redux';

class Basal extends React.Component {
    state = {
        basalAmount: 0,
        basalType: "Basalgar",
        currentDate: "",
        currentTime: "",
        DateTime: ""
    }
    componentDidMount(){
        const {date, time, dateTime} = populateDateTime();
        this.setState({
            currentDate: date,
            currentTime: time,
            DateTime: dateTime
        })
    }
    onSubmit (formType, event){
        event.preventDefault();
        //dispatch action to POST to server
        console.log('BG form submitted');
        this.props.dispatch(handleDashForm({
            formType,
            basalAmount: this.state.basalAmount,
            basalType: this.state.basalType,
            currentDate: this.state.currentDate,
            currentTime: this.state.currentTime,
            DateTime: this.state.DateTime 
        }, this.props.history));

        this.setState({
            basalAmount: 0,
            basalType: "Basalgar",
            currentDate: "",
            currentTime: "",
            DateTime: ""
        });
    }
    render() {
        return (
            <div>
                <form action="" id="basal-form" onSubmit={(e) => this.onSubmit("basal", e)} >
                    <fieldset>
                        <legend>Basal</legend>

                        <label htmlFor="basal-insulin-type">Insulin Type</label>
                        <select id="basal-insulin-type" defaultValue="Basaglar">
                            <option value="Basaglar">Basaglar</option>
                            <option value="Levemir">Levemir</option>
                            <option value="Lantus">Lantus</option>
                        </select>

                        <label htmlFor="basal-units">Units of Insulin</label>
                        <input type="number" className="insulin-input" id="basal-units" defaultValue={this.state.basalAmount}/><span>unit(s)</span>
                        <label htmlFor="basal-date">Date</label>
                        <input type="date" className="date-dash" id="basal-date" defaultValue={this.state.currentDate} />
                        <label htmlFor="basal-time">Time</label>
                        <input type="time" className="time-dash" id="basal-time" defaultValue={this.state.currentTime} />

                        <button type="submit">Add Basal</button>

                    </fieldset>
                </form>


                <Link to='/dashboard'><button type="button" className="dash-back">Back</button></Link>
            </div>
        )
    }
}

export default connect()(Basal);

