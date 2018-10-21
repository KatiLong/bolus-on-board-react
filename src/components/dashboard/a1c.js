import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { populateDateTime } from './populateDateTime';
import { handleDashForm } from '../../actions';
import { connect } from 'react-redux';

import './dashboard.css';

class A1c extends Component {
    state = {
        a1cAmount: 0,
        currentDate: "",
        currentTime: ""
    }
    componentDidMount(){
        const {date, time} = populateDateTime();
        this.setState({
            currentDate: date,
            currentTime: time
        })
    }
    //Add reset state to back button?
    onSubmit (formType, event){
        event.preventDefault();
        console.log('BG form submitted');
        // 'a1cNumber', 'a1cDate', 'loggedInUsername', 'inputDateTime'
        this.props.dispatch(handleDashForm(formType, {
            a1cNumber: this.state.a1cAmount,
            a1cDate: this.state.currentDate,
            inputDateTime: this.state.currentDate + 'T' + this.state.currentTime,
            loggedInUsername: this.props.loggedInUsername
        }, this.props.history));
    }
    render() {
        return (
            <Fragment>
                <form action="" id="a1c-form" onSubmit={(e) => this.onSubmit("a1c", e)} >
                    <fieldset>
                        <legend>A1c</legend>

                        <label htmlFor="a1c-entry">A1c Result</label>
                        <input type="number" className="insulin-input" id="a1c-entry" step="0.1" defaultValue={this.state.a1cAmount} 
                            onChange={(e) => this.setState({a1cAmount: e.target.value})} required/>

                        <label htmlFor="a1c-date">Date</label>
                        <input type="date" className="date-dash" id="a1c-date" defaultValue={this.state.currentDate} 
                            onChange={(e) => this.setState({currentDate: e.target.value})} required/>

                        <button type="submit" className="submit-button">Add A1c</button>
                    </fieldset>
                </form>

                <Link to='/dashboard'><button type="button" className="dash-back">Back</button></Link>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUsername: state.user.email
    }
};

export default connect(mapStateToProps)(A1c);
