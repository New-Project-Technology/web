import React from 'react';

import './Dashboard.css';

import Header from '../../components/Header/Header';

const Dashboard = () => {   
    return (
        <div className="Dashboard">
            <Header/>
            <div className="Dashboard-column">
                <p>일일 출입자 수 graph</p>
                <p>월간 출입자 수 graph</p>
            </div>
            <div className="Dashboard-column">
                <p>일일 가입자 수 graph</p>
                <p>월간 가입자 수 graph</p>
            </div>
        </div>
    );
}

export default Dashboard;
