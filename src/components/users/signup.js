import React, {Component, Fragment} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions'; 
import Disclaimer from './disclaimer.js';

class Register extends Component {
    constructor(props) {
        super(props);
        // Username: carmen@gmail.com
        // Password: where2018
        this.state = {
            name: '',
            username: '',
            password: '',
            disclaimer: false,
            toDashboard: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.onAgree = this.onAgree.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.disclaimerReroute = this.disclaimerReroute.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name);
        if (event.target.name === 'name') this.setState({name: event.target.value});
        if (event.target.name === 'username') this.setState({username: event.target.value});
        if (event.target.name === 'password') this.setState({password: event.target.value});
    }

    
    onAgree(event) {

        //Create User
        //Create Settings & IOB
        // Update State with form values
        this.props.dispatch(registerUser({
            name: this.state.name, 
            username: this.state.username,
            password: this.state.password
        }, this.props.history))
    }
    onCancel(event) { //If User cancels Disclaimer, take them back to Signup
        this.setState({
            disclaimer: false
        })
    }
    disclaimerReroute (event) { //On Form submit, redirect to Medical Disclaimer
        event.preventDefault()

        this.setState({
            disclaimer: true
        })
    }

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/dashboard' />
        }
        return (
            <Fragment>
                <section id="signup-page">
                    {!this.state.disclaimer && 
                        <form action="#root" id="signup-form" onSubmit={this.disclaimerReroute}>
                            <fieldset>
                                <legend>Signup Form</legend>
                                <label htmlFor="signup-name">Name</label>
                                <input type="text" value={this.state.name} onChange={this.handleChange} id="signup-name" className="name" name="name" placeholder="Carmen SanDiego" required/>
                                <br/>
                                <label htmlFor="signup-username">Username</label>
                                <input value={this.state.username} type="text" id="signup-username" onChange={this.handleChange} className="username" name="username" placeholder="carmenSD@hotmail.com" required/>
                                <br/>
                                <label htmlFor="signup-password">Password</label>
                                <input value={this.state.password} onChange={this.handleChange} type="text" id="signup-password" className="password" name="password" placeholder="WhereNdwurld24" required/>
                                <br/>

                                <button type="submit" className="submit-button">Sign Up</button>
                                <br/>

                                <Link to='/'><p id="signup-p">Have an account? <span id="change-form-login">Login</span></p></Link>

                            </fieldset>
                        </form>
                    }
                    {this.state.disclaimer && 
                        <Disclaimer onAgree={this.onAgree} onCancel={this.onCancel}/>
                    }
                </section>
            </Fragment>
        )
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     registerUser: (user) => dispatch(registerUser(user))
// });

export default connect()(Register);