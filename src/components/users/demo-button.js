import React, {Fragment} from 'react';

function DemoButton(props) {

    return (
        <Fragment>
            <div className="demo-account">
                <h6>Demo Account</h6>
                <button className="demo-button submit-button" onClick={e => props.demoLogin(e)}>Try Demo</button> 
            </div>
        </Fragment>
    )
}

export default DemoButton;

// <div className="demo-info">
// <p>Username: carmen@gmail.com</p>
// <br/>
// <p>Password: where2018</p>
// </div>