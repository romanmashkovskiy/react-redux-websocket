import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { connectServer } from "../actions";


class Location extends Component {

    render () {
        return (
            <form className="ui form">
                <div className="field">
                    <label>Location</label>
                    <input type="text" ref="location" name="location" defaultValue={this.props.location} placeholder="Location"/>
                </div>
                <button className="ui button" onClick={() => this.props.connectServer(this.refs.location.value)}>Connect</button>
            </form>
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