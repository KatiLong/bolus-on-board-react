import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
//import { loginUser } from '../../actions';

//onSubmit={this.props.handleSubmit(values =>
//          this.onSubmit(values)
//          )}

class Login extends React.Component {
    state = {
        toDashboard: false,
    }
    onSubmit(values) {
        console.log(values);

        this.setState(() => ({
            toDashboard: true
        }))
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
                    >
                        <fieldset>
                            <legend>Login Form</legend>
                            <label htmlFor="login-username">Username</label>
                            <input name="loginUsername" type="text" id="login-username" className="username" placeholder="carmenSD@hotmail.com" value="carmen@gmail.com" component="input" />
                            <br/>
                            <label htmlFor="login-password">Password</label>
                            <input name="loginPassword" type="text" id="login-password" className="password" placeholder="WhereNdwurld24" value="where2018" component="input"/>
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
//props.history.push('/register')
//export default Login;
export default Login;
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
