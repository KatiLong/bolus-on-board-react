import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
//import { loginUser } from '../../actions';
import {reduxForm, Field} from 'redux-form';

function Login (props) {
    console.log(props);
    return (
        <div>
            <section id="login-page" class="metal linear">
                <form action="#root" id="login-form">
                    <fieldset>
                        <legend>Login Form</legend>
                        <label htmlFor="login-username">Username</label>
                        <input type="text" id="login-username" class="username" placeholder="carmenSD@hotmail.com" value="carmen@gmail.com" component="input" required/>
                        <br/>
                        <label htmlFor="login-password">Password</label>
                        <input type="text" id="login-password" class="password" placeholder="WhereNdwurld24" value="where2018" component="input" required/>
                        <br/>
                        <Link to='/dashboard'><button type="submit" class="submit-button" id="login-button">Sign In</button></Link>

                        <br/>
                        <Link to='/register'><p>Need to <span id="change-form-signup">Signup?</span></p></Link>
                    </fieldset>
                </form>
                <div class="demo-account">
                    <h6>Demo Account</h6>
                    <div class="demo-info">
                        <p>Username: carmen@gmail.com</p>
                        <br/>
                        <p>Password: where2018</p>
                    </div>
                </div>
            </section>

        </div>
    )
}
//props.history.push('/register')
//export default Login;
export default reduxForm({
    form: 'contact'
})(Login);
