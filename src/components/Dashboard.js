import React from 'react';

import './Dashboard.css';

const Dashboard = () => {   
    return (
        <div className="Dashboard">
            <div className="Dashboard-column">
                <a>일일 출입자 수 graph</a>
                <a>월간 출입자 수 graph</a>
            </div>
            <div className="Dashboard-column">
                <a>일일 가입자 수 graph</a>
                <a>월간 가입자 수 graph</a>
            </div>
        </div>
    );
}

export default Dashboard;