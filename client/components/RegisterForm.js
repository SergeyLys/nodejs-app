import React from 'react';
import config from '../../config';
import SignMenu from './SignMenu';

export default class RegisterForm extends React.Component {

    handleSubmit(event) {
        event.preventDefault();

        const xhr = new XMLHttpRequest();

        xhr.open('POST', `${config.host}/api/signup`, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
            }
        };

        xhr.send(`login=${this.loginInput.value}&password=${this.passwordInput.value}`);

    }

    render() {
        console.log('register');
        return(
            <div>
                <form onSubmit={::this.handleSubmit}>
                    <input ref={(input) => { this.loginInput = input }} name="login" type="text"/>
                    <input ref={(input) => { this.passwordInput = input }} name="password" type="text"/>
                    <button>Signup</button>
                </form>
            </div>
        )
    }
}