import React, {Component} from 'react';

import './Home.css'

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <div className="Home-text">
                    <p>Welcome !</p>
                    <img src="logo.png" width="400px" alt="logo"/>
                </div>
            </div>
        );
    }
}

export default Home;
