import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { iobLoginCalculator } from '../dashboard/dashboard-calculators/login-iob-calculator';
import { iobOnLogin, updateIob, addIobEntry, updateIobEntry, deleteIobEntry } from '../../actions';

//import { loginUser } from '../../actions';

//onSubmit={this.props.handleSubmit(values =>
//          this.onSubmit(values)
//          )}

class Login extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            username: 'HispanoSuiza@gmail.com',
            password: 'detective',
            toDashboard: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        // console.log(values);
        event.preventDefault();
        // updateReduxState for User - server call for all info?
        iobLoginCalculator(this.props);
        this.setState({
            toDashboard: true
        })
        this.props.iobOnLogin()

    }
    handleChange(event) {
        console.log(event.target.name);
        if (event.target.name === 'username') this.setState({username: event.target.value});
        if (event.target.name === 'password') this.setState({password: event.target.value});
    }
    render() {

        if (this.state.toDashboard === true) {
            return <Redirect to='/dashboard' />
        }

        return (
            <div>
                <section id="login-page" className="metal linear">
                    <form
                        action="#root"
                        id="login-form"
                        onSubmit={this.onSubmit}
                    >
                        <fieldset>
                            <legend>Login Form</legend>
                            <label htmlFor="login-username">Username</label>
                            <input name="loginUsername" type="text" id="login-username" className="username" placeholder="carmenSD@hotmail.com" value={this.state.username} 
                                onChange={this.handleChange}/>
                            <br/>
                            <label htmlFor="login-password">Password</label>
                            <input name="loginPassword" type="text" id="login-password" className="password" placeholder="WhereNdwurld24" value={this.state.password}
                                onChange={this.handleChange}/>
                            <br/>
                            <button type="submit" className="submit-button" id="login-button">Sign In</button>

                            <br/>
                            <Link to='/register'><p>Need to <span id="change-form-signup">Signup?</span></p></Link>
                        </fieldset>
                    </form>
                    <div className="demo-account">
                        <h6>Demo Account</h6>
                        <div className="demo-info">
                            <p>Username: carmen@gmail.com</p>
                            <br/>
                            <p>Password: where2018</p>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
//
//class Register extends React.Component {
//    state = {
//        toDashboard: false,
//    }
//handleSubmit = (user) => {
//    saveUser(user)
//        .then(() => this.setState(() => ({
//        toDashboard: true
//    })))
//}
//render() {
//    if (this.state.toDashboard === true) {
//        return <Redirect to='/dashboard' />
//    }
//
//        return (
//            <div>
//            <h1>Register</h1>
//            <Form onSubmit={this.handleSubmit} />
//            </div>
//        )
//    }
//}
//<Link to='/dashboard'><button type="submit" className="submit-button" id="login-button">Sign In</button></Link>
