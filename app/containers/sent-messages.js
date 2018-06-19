import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

class  SentList extends Component {
    render() {
            return (
                <div>
                    <h2 className="ui header">Sent</h2>
                    <div className="ui celled ordered list">
                        {
                            this.props.sentMessages.map(function(message, index) {
                                return <div className="item" key={index}>{message}</div>
                            })

                        }

                    </div>

                </div>
            );
    }
}

function mapStateToProps (state) {
    return {
        sentMessages: state.sentMessages
    };
}

export default connect(mapStateToProps)(SentList);
