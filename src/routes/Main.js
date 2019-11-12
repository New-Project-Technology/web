import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './Main.css';

import Home from '../components/Home';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Register from '../components/Register';

class Main extends Component {

    state = {
        userId: 'Heesu',
        isLogined: false
    }

    render() {
        return (
            <Router>
                <div className="Main">
                    <Header/>
                    <div className="Main-body">
                        <Switch>
                            <Route exact path="/" render={(props) => <Home {...props} userId={this.state.userId} />}/>
                            <Route path="/Dashboard" component={Dashboard}/>
                            <Route path="/Register" component={Register}/>
                       </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Main;
