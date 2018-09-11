import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions'; //In Disclaimer instead?? Dispatched when user agrees to Disclaimer
// import { formChange } from '../../actions';

//class NameForm extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {value: ''};
//
//        this.handleChange = this.handleChange.bind(this);
//        this.handleSubmit = this.handleSubmit.bind(this);
//    }
//
//    handleChange(event) {
//        this.setState({value: event.target.value});
//    }
//
//    handleSubmit(event) {
//        alert('A name was submitted: ' + this.state.value);
//        event.preventDefault();
//    }
//
//    render() {
//        return (
//            <form onSubmit={this.handleSubmit}>
//            <label>
//            Name:
//            <input type="text" value={this.state.value} onChange={this.handleChange} />
//            </label>
//            <input type="submit" value="Submit" />
//            </form>
//        );
//    }
//}


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '',
                     username: '',
                     password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name);
        if (event.target.name === 'name') this.setState({name: event.target.value});
        if (event.target.name === 'username') this.setState({username: event.target.value});
        if (event.target.name === 'password') this.setState({password: event.target.value});


    }

    //Update State with form values
    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit ran')
        const name = this.state.name;
        const username = this.state.username;
        const password = this.state.password;

        this.props.dispatch(registerUser())
    //    value="Carmen SD"  value="carmen@gmail.com" value="where2018"
//    dispatch action to register user --- Should be in Disclaimer?
    }
    render() {
        return (
            <Fragment>
                <section id="signup-page">
                    <form action="#root" id="signup-form">
                        <fieldset>
                            <legend>Signup Form</legend>
                            <label htmlFor="signup-name">Name</label>
                            <input type="text" value={this.state.value} onChange={this.handleChange} id="signup-name" className="name" name="name" placeholder="Carmen SanDiego" required/>
                            <br/>
                            <label htmlFor="signup-username">Username</label>
                            <input value={this.state.value} type="text" id="signup-username" onChange={this.handleChange} className="username" name="username" placeholder="carmenSD@hotmail.com" required/>
                            <br/>
                            <label htmlFor="signup-password">Password</label>
                            <input value={this.state.value} onChange={this.handleChange} type="text" id="signup-password" className="password" name="password" placeholder="WhereNdwurld24" required/>
                            <br/>

                            <Link to='/register/disclaimer'><button type="submit" className="submit-button">Sign Up</button></Link>
                            <br/>

                            <Link to='/'><p id="signup-p">Have an account? <span id="change-form-login">Login</span></p></Link>

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
            </Fragment>
        )
    }
}

export default connect()(Register);
