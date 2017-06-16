import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';

// import Main from '../containers/Main';
import Home from './Home';
import First from './First';
import LoginFormContainer from '../containers/LoginFormContainer';
import RegisterFormContainer from '../containers/RegisterFormContainer';

import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const history = syncHistoryWithStore(hashHistory, store);



export default class App extends React.Component {
    constructor() {
        super();
    }

    requireAuth(nextState, replaceState) {
        replaceState({ nextPathname: nextState.location.pathname }, '/login')
    }

    render() {
        return(
            <Provider store={store}>
                <Router history={history}>
                    <Route path='/' component={First}>
                        <Route path='/home' component={Home} onEnter={::this.requireAuth} />
                        <Route path='/login' component={LoginFormContainer} />
                        <Route path='/register' component={RegisterFormContainer} />
                    </Route>
                </Router>
            </Provider>
        )
    }
}

