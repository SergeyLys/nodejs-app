import React from 'react';
import config from '../../config';
import { hashHistory } from 'react-router';

export default class Home extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        if (window.localStorage.getItem('token') == null) {
            hashHistory['replace']('/login');
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