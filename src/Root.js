import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './Root.css';

import Login from './routes/Login/Login';
import Error from './routes/Error/Error';
import Register from './routes/Register/Register';
import Home from "./routes/Home/Home";
import Dashboard from "./routes/Dashboard/Dashboard";

class Root extends Component {

    render() {
        return (
            <Router>
                <div className="Root">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/Login" component={Login}/>
                        <Route path="/Error" component={Error}/>
                        <Route path="/Register" component={Register}/>
                        <Route path="/Dashboard" component={Dashboard}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Root;
