import React from 'react';
import config from '../../config';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

export default class LoginFrom extends React.Component {
    constructor() {
        super();
    }

    state = {
        status: ''
    };

    handleSubmit(event) {
        event.preventDefault();

        const xhr = new XMLHttpRequest();

        xhr.open('POST', `${config.host}/api/signin`, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = ()=> {
            if(xhr.readyState == 4 && xhr.status == 200) {
                this.props.onSubmit(JSON.parse(xhr.responseText));
                hashHistory['replace']('/');
            } else if(xhr.readyState == 4 && xhr.status !== 200) {
                this.setState({status: JSON.parse(xhr.responseText).message});
            }
        };

        xhr.send(`login=${this.loginInput.value}&password=${this.passwordInput.value}`);

    }

    render() {
        return(
            <div>
                <form onSubmit={::this.handleSubmit}>
                    <input ref={(input) => { this.loginInput = input }} name="login" type="text"/>
                    <input ref={(input) => { this.passwordInput = input }} name="password" type="text"/>
                    <button>Signin</button>
                    {this.state.status != '' ? <p>{this.state.status}</p> : ''}
                </form>
                <Link to="/register">Signup</Link>
            </div>
        )
    }
}