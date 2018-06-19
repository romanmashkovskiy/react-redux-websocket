import React, {Component} from 'react';
import { sendMessage} from "../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


class Message extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <div className="field">
                    <label>Message</label>
                    <input type="text" ref="message" placeholder="Message"/>
                </div>
                <button className="ui button" onClick={() => this.props.sendMessage(this.refs.message.value)}>Send</button>
            </div>
        );
    }
}


function mapStateToProps (state) {
    return {
        status: state.status
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
            sendMessage: sendMessage
        },
        dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Message);