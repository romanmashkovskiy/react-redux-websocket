import React, {Component} from 'react';
import { connect } from 'react-redux';

class  ReceivedList extends Component {
    render() {
        return (
            <div>
                <h2 className="ui header">Received</h2>
                <div className="ui celled ordered list">
                    {
                        this.props.receivedMessages.map(function(message, index) {
                            return <div class="item" key={index}>{message}</div>
                        })

                    }

                </div>

            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        receivedMessages: state.receivedMessages
    };
}

export default connect(mapStateToProps)(ReceivedList);