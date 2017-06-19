import React from 'react';
import { Link } from 'react-router';

export default class SignMenu extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <Link to="/">Home</Link>
                <Link to="/register">Signup</Link>
                <Link to="/login">Signin</Link>
            </div>
        )
    }
}