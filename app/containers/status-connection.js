import React, {Component} from 'react';
import { connect } from 'react-redux';

class  StatusConnection extends Component {
    render() {
        return (


            <div className="ui form">
                <div className="field">
                    <label>Connection status</label>
                    <input type="text" value={this.props.status}  readOnly={this.props.status}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        status: state.status
    };
}

export default connect(mapStateToProps)(StatusConnection);