import React from 'react';
import { connect } from 'react-redux';

class BolusStatus extends React.Component {
    render() {
        return (
                <div id="bolus-status">
                    <h4>Bolus Post was {this.state.bolusStatus}.</h4>
                </div>
        )
    }
}

const mapStateToProps = (state) => ({ bolusStatus: state.user.bolusStatus})

export default connect(mapStateToProps)(BolusStatus);