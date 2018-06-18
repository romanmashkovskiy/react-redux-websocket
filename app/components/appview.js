import React from 'react';
import Location from '../containers/location';
import Message from '../containers/message';
import Log from '../containers/log';


const App = () => (
    <div>
        <h1 className="ui center aligned header">
            WebSocket test
        </h1>

        <div className="ui grid">
            <div className="column eight wide">
                <Location />
                <br/>
                <Message />
            </div>
            <div className="column eight wide">
                <Log />
            </div>
        </div>
    </div>

);

export default App;