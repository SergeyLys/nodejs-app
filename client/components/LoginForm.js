import React from 'react';
import config from '../../config';
import SignMenu from './SignMenu';

export default class LoginFrom extends React.Component {
    constructor() {
        super();
    }

    handleSubmit(event) {
        event.preventDefault();

        const xhr = new XMLHttpRequest();
        var token;
        var _that = this;

        xhr.open('POST', `${config.host}/api/signin`, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                token = xhr.responseText;
                _that.props.onSubmit(token);
            } else if(xhr.readyState == 4 && xhr.status !== 200) {
                console.log(JSON.parse(xhr.responseText));
            }
        };

        xhr.send(`login=${this.loginInput.value}&password=${this.passwordInput.value}`);

        console.log('sending');

    }

    render() {
        return(
            <div>
                <form onSubmit={::this.handleSubmit}>
                    <input ref={(input) => { this.loginInput = input }} name="login" type="text"/>
                    <input ref={(input) => { this.passwordInput = input }} name="password" type="text"/>
                    <button>Signin</button>
                </form>
            </div>
        )
    }
}