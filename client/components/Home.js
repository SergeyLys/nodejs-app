import React from 'react';
import config from '../../config';
import { browserHistory } from 'react-router';

export default class Home extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        if (window.localStorage.getItem('token') == null) {
            browserHistory['replace']('/login');
        }
    }


    render() {
        return(
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}