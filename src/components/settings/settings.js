import React from 'react';
import { Link } from 'react-router-dom';

function Settings () {
    return (
        <div>
            <h1>Settings</h1>
            <Link to='/dashboard'><button className="home-button">Home</button></Link>


        </div>
    )
}

export default Settings;

