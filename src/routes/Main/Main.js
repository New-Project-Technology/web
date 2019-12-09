import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './Main.css';

import Home from '../Home/Home';
import Header from '../../components/Header/Header';
import Dashboard from '../Dashboard/Dashboard';

class Main extends Component {

    render() {
        {
            !this.props.isLogined && this.props.history.push('/login')
        }
        return (
            <Router>
                <div className="Main">
                    <Header/>
                    <div className="Main-body">
                        <Switch>
                            <Route exact path="/" render={(props) => <Home {...props} userId={this.props.userId} />}/>
                            <Route path="/Dashboard" component={Dashboard}/>
                       </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Main;
