import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from './redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>, document.getElementById('root'));
