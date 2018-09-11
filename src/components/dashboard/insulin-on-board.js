import React, {Component} from 'react';
import { connect } from 'react-redux';

class InsulinOnBoard extends Component {
    render(){
        return (
            <section id="iob-display">
                <h4>Insulin On Board:</h4>
                <span>Units: <span id="i-o-b"></span></span>
                <span> | </span>
                <span>Time Remaining: <span id="iob-time"></span></span>
            </section>
        )}
}

export default connect()(InsulinOnBoard);