import React, {Component, Fragment} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions'; //In Disclaimer instead?? Dispatched when user agrees to Disclaimer
import Disclaimer from './disclaimer.js';
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
        this.state = {
            name: 'Phynre Fisher',
            username: 'HispanoSuiza@gmail.com',
            password: 'detective',
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

    //Update State with form values
    onAgree(event) {
        // event.preventDefault();

        console.log('handleSubmit ran')

        // this.props.dispatch(registerUser({
        //     name: this.state.name,
        //     username: this.state.username,
        //     password: this.state.password
        // }))
 
        this.setState({
            toDashboard: true
        })
    }
    onCancel(event) {
        this.setState({
            disclaimer: false
        })
    }
    disclaimerReroute (event) {
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

export default connect()(Register);

{/* <Link to='/register/disclaimer'></Link> */}