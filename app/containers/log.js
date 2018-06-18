import React, {Component} from 'react';


class Location extends Component {

    render () {
        return (
            <div className="ui form">
                <div className="field">
                    <label>Log</label>
                    <textarea></textarea>
                </div>
                <button className="ui button">Clear log</button>
            </div>
        );
    }
}

export default Location;