import React, {Component} from 'react';

import './Error.css';

class Error extends Component {

    render() {
        return (
            <div className="Error">
                {this.props.message}
            </div>
        )
    }
}

export default Error;
