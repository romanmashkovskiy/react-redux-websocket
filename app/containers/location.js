import React, {Component} from 'react';


class Location extends Component {

    render () {
        return (
            <form className="ui form">
                <div className="field">
                    <label>Location</label>
                    <input type="text" name="location" placeholder="Location"/>
                </div>
                <button className="ui button">Connect</button>
            </form>
        );
    }
}

export default Location;