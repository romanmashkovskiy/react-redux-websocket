import React, {Component} from 'react';
import { sendMessage} from "../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


class Message extends Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage (message) {
        if (message.length !==0) {
            this.props.sendMessage(message);
            this.refs.message.value = "";
        }
    }

    render () {
        if (this.props.status === "connected") {
            return (
                <div className="ui form">
                    <div className="field">
                        <label>Message</label>
                        <input type="text" ref="message" placeholder="Message"/>
                    </div>
                    <button className="ui button"
                            onClick={() => {
                                this.sendMessage (this.refs.message.value);
                            }}
                    >Send</button>
                </div>
            );
         } else {
            return (
                <div className="ui form">
                    <div className="disabled field">
                        <label>Message</label>
                        <input type="text" placeholder="Message"/>
                    </div>
                    <button className="ui disabled button">Send</button>
                </div>
            );
        }
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