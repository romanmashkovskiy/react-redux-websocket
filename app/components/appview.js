import React from 'react';
import Location from '../containers/location';
import Message from '../containers/message';
import SentList from '../containers/sent-messages';
import ReceivedList from '../containers/received-messages';
import StatusConnection from '../containers/status-connection';

const App = () => (
    <div>
        <h1 className="ui center aligned header">
            WebSocket test
        </h1>

        <div className="ui grid">
            <div className="column six wide">
                <StatusConnection />
                <Location />
                <br/>
                <Message />
            </div>
            <div className="column five wide">
                <SentList />
            </div>
            <div className="column five wide">
                <ReceivedList />
            </div>
        </div>
    </div>

);

export default App;