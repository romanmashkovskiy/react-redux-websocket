import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { connectServer } from "../actions";


class Location extends Component {

    render () {
        return (
            <div>
                <div className="field">
                    <label>Location</label>
                    <input type="text" ref="location" placeholder="Location"/>
                </div>
                <div>wss://echo.websocket.org</div>
                <button className="ui button" onClick={() => this.props.connectServer(this.refs.location.value)}>Connect</button>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        location: state.location
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
            connectServer: connectServer
        },
        dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Location);