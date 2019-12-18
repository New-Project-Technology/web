import React, {Component} from 'react';

class Log extends Component {

    render() {
        return (
            <li className="collection-item list">
                <label>Name: </label><p>{this.props.name}</p>
                <label>Timestamp: </label><p>{this.props.timestamp}</p>
                <label>Success: </label><p>{this.props.success}</p>
            </li>
        );
    }
}

export default Log;
