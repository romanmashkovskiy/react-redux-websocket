import React, {Component} from 'react';


class Message extends Component {

    render () {
        return (
            <form className="ui form">
                <div className="field">
                    <label>Message</label>
                    <input type="text" name="message" placeholder="Message"/>
                </div>
                <button className="ui button">Send</button>
            </form>
        );
    }
}

export default Message;