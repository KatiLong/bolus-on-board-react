import React from 'react';
import {Link} from 'react-router-dom';

function Disclaimer (props) {
    return (
        <div>
            <section id="medical-disclaimer">
                <div id="disclaimer-background">
                    <div id="disclaimer-wrapper">
                    <p>
                        Bolus on Board - B.O.B. - was built as tool for myself in managing my T1 Diabetes. The larger hope is that others will find it useful as well. Managing T1D can be a daunting task, and I firmly believe in having more accessible tools to empower us in managing it.
                    </p>
                    <p>
                        Before you get started, it's important that you understand and agree to the following.
                    </p>
                    <p>MEDICAL DISCLAIMER</p>
                    <p>THIS APPLICATION IS NOT INTENDED FOR THE PURPOSE OF PROVIDING MEDICAL ADVICE</p>
                    <p>
                        All information, content, and material of this application is for informational purposes only and are not intended to serve as a substitute for the consultation, diagnosis, and/or medical treatment of a qualified physician or healthcare provider.
                    </p>
                    <p>
                        Should any User have any health care related questions, promptly call or consult your physician or healthcare provider. No information contained in this application should be used by any reader to disregard medical and/or health related advice or provide a basis to delay consultation with a physician or a qualified healthcare provider.
                    </p>
                    <p>MEDICAL EMERGENCY</p>
                    <p>
                        If you have a medical emergency, call 911 immediately.
                    </p>
                    <span id="disclaimer-buttons">
                        <Link to='/dashboard'><button type="button" class="submit-button" id="disclaimer-accept">I AGREE</button></Link>
                        <Link to='/register'><button type="button" id="cancel-disclaimer">Cancel</button></Link>
                    </span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Disclaimer;
