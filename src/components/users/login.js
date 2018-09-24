import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

class Login extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            username: 'HispanoSuiza@gmail.com',
            password: 'detective',
            toDashboard: false
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

const mapStateToProps = (state) => {
    return {
        iobAmount: state.iob.iobAmount,
        iobTimeLeft: state.iob.iobTimeLeft,
        iobStack: state.iob.iobStack,
        duration: state.settings.duration.amount
    }
};

export default connect(mapStateToProps)(Login);

//<Link to='/dashboard'><button type="submit" className="submit-button" id="login-button">Sign In</button></Link>
