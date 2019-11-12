import React, {Component} from 'react';

import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Home-text">
                    <a>Welcome, {this.props.userId}!</a>
                    <img src="logo.png" width="400px" alt="logo"></img>
                </div>
            </div>
        );
    }
}

export default Home;
