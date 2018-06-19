import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { connectServer, disconnectServer } from "../actions";


class Location extends Component {

    render () {
        if (this.props.status === "disconnected") {
            return (
                <div className="ui form">
                    <div className="field">
                        <label>Location</label>
                        <input type="text" ref="location" defaultValue={this.props.location} placeholder="Location"/>
                    </div>
                    <button className="ui button" onClick={() => this.props.connectServer(this.refs.location.value)}>Connect</button>
                </div>

            );
        } else {
            return (
                <div className="ui form">
                    <div className="field">
                        <label>Location</label>
                        <input type="text" ref="location" defaultValue={this.props.location} placeholder="Location"/>
                    </div>
                    <button className="ui button" onClick={() => this.props.disconnectServer()}>Disconnect</button>
                </div>
            );
        }
    }
}

function mapStateToProps (state) {
    return {
        status: state.status,
        location: state.location
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
            connectServer: connectServer,
            disconnectServer: disconnectServer
        },
        dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Location);