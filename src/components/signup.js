import React from 'react';
import { Link } from 'react-router-dom';

function Signup () {
    return (
        <div>
            <section id="signup-page">
                <form action="#root" id="signup-form">
                    <fieldset>
                        <legend>Signup Form</legend>
                        <label for="signup-name">Name</label>
                        <input type="text" id="signup-name" class="name" placeholder="Carmen SanDiego" value="Carmen SD" required/>
                        <br/>
                        <label for="signup-username">Username</label>
                        <input type="text" id="signup-username" class="username" placeholder="carmenSD@hotmail.com" value="carmen@gmail.com" required/>
                        <br/>
                        <label for="signup-password">Password</label>
                        <input type="text" id="signup-password" class="password" placeholder="WhereNdwurld24" value="where2018" required/>
                        <br/>
                        <button type="submit" class="submit-button">Sign In</button>
                        <br/>
                        <Link to='/'><p id="signup-p">Have an account? <span id="change-form-login">Login</span></p></Link>

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

export default Signup;
