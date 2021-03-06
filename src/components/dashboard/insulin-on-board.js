import React from 'react';
import './dashboard.css';

function InsulinOnBoard  (props) {
    console.log(props);
    return (
        <section id="iob-display">
            <h4>INSULIN ON BOARD</h4>
            <span id="iob-left-span">Units: <span id="i-o-b">{props.iobAmount}</span></span>
            <span id="iob-line"> | </span>
            <span>Time Remaining: <span id="iob-time">{props.iobTimeFormat(props.iobTimeLeft)}</span></span>
            <span className="info-button" id="iob-info-trigger" onClick={e => props.onClick()}>i</span>
        </section>
    )
}

export default InsulinOnBoard;