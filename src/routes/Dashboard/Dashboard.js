import React, {Component} from 'react';
import axios from 'axios';

import Log from '../../components/Log/Log';

import './Dashboard.css';

class Dashboard extends Component {

    state = {

    }

    componentDidMount() {
        this._getLogs();
    }

    _getLogs = async() => {
        const logs = await this._callServer();

        this.setState({
            logs
        })
    }

    _callServer = () => {
        return axios.get('/api/getLogs')
            .then((json) => {
                return json.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    _renderMovies = () => {
        const logs = this.state.logs.map(log => {
            return <Log
                name={log.name}
                timestamp={log.in_time}
                success={log.success}
            />
        })

        return logs;
    }

    render() {
        return (
            <div className="Dashboard">
                <ul className="collection">
                    {this.state.logs ? this._renderMovies() : undefined}
                </ul>
            </div>
        );
    }
}

export default Dashboard;
