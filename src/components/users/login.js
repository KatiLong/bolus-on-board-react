import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import DemoButton from './demo-button';

class Login extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            toDashboard: false
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();

        this.props.dispatch(loginUser({
            username: this.state.username,
            password: this.state.password
        }, this.props.history, this.props));

    }
    handleChange(event) {
        console.log(event.target.name);
        if (event.target.name === 'loginUsername') this.setState({username: event.target.value});
        if (event.target.name === 'loginPassword') this.setState({password: event.target.value});
    }
    demoLogin(event) {
        event.preventDefault();
        console.log('Demo Button pressed');

        this.props.dispatch(loginUser({
            username: 'carmen@gmail.com',
            password: 'where2018'
        }, this.props.history, this.props));
    }
    render() {

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
                            <input name="loginUsername" type="text" id="login-username" className="username"
                                value={this.state.username} 
                                onChange={this.handleChange}/>
                            <br/>
                            <label htmlFor="login-password">Password</label>
                            <input name="loginPassword" type="text" id="login-password" className="password"
                                value={this.state.password}
                                onChange={this.handleChange}/>
                            <br/>
                            <button type="submit" className="submit-button" id="login-button">Sign In</button>

                            <br/>
                            <Link to='/register'><p>Need to <span id="change-form-signup">Signup?</span></p></Link>
                        </fieldset>
                    </form>
                    <DemoButton demoLogin={this.demoLogin} />
                </section>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        iobAmount: state.iob.iobAmount,
        iobTimeLeft: state.iob.iobTimeLeft,
        iobStack: state.iob.iobStack,
        duration: state.settings.duration.amount,
        authenticated: state.user.authenticated
    }
};

export default connect(mapStateToProps)(Login);

// Test Account
// Name: Phynre Fisher
// Username: HispanoSuiza@gmail.com
// Password: detective