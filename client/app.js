import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/credentials';

import Main from './containers/Main';
// import About from './components/About';
// import Menu from './components/Menu';
//
// import {HashRouter as Router, Route} from 'react-router-dom';
// import { synchHistoryWithStore } from 'react-router-redux';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const history = synchHistoryWithStore(hashHistory, store);

class App extends React.Component {

    handleSubmit() {
        console.log()
    }

    render() {
        fetch('http://localhost:8000/api/').then((data)=>{
            console.log(data);
        });
        return(
            <form onSubmit={::this.handleSubmit}>
                <input type="text"/>
                <button>Signu</button>
            </form>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('root')
);