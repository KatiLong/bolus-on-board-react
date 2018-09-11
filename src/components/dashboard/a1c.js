import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { populateDateTime } from '../populateDateTime';
import { handleDashForm } from '../../actions';
import { connect } from 'react-redux';

class A1c extends Component {
    state = {
        a1cAmount: 0,
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
        console.log('BG form submitted');
        //dispatch action to POST to server
        // props.dispatch(handleBolus(insulinType, props.history));
        this.props.dispatch(handleDashForm({
            formType,
            a1cAmount: this.state.a1cAmount,
            currentDate: this.state.currentDate,
            currentTime: this.state.currentTime,
            DateTime: this.state.DateTime 
        }, this.props.history));

        this.setState({
            a1cAmount: 0,
            currentDate: "",
            currentTime: "",
            DateTime: ""
        });
    }
    render() {
        return (
            <Fragment>
                <form action="" id="a1c-form" onSubmit={(e) => this.onSubmit("a1c", e)} >
                    <fieldset>
                        <legend>A1c</legend>

                        <label htmlFor="a1c-entry">A1c Result</label>
                        <input type="number" className="insulin-input" id="a1c-entry" step="0.1" defaultValue={this.state.a1cAmount} required/>

                        <label htmlFor="a1c-date">Date</label>
                        <input type="date" className="date-dash" id="a1c-date" defaultValue={this.state.currentDate} required/>

                        <button type="submit" className="submit-button">Add A1c</button>
                    </fieldset>
                </form>

                <Link to='/dashboard'><button type="button" className="dash-back">Back</button></Link>
            </Fragment>
        )
    }
}

export default connect()(A1c);
