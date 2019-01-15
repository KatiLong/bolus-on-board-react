import React from 'react';
import { Link } from 'react-router-dom';
import './logs.css'; 

function Logs () {
    return (
        <div>
            <h1>Logs</h1>
            <Link to='/dashboard'><button className="home-button">Home</button></Link>
        </div>
    )
}

export default Logs;

