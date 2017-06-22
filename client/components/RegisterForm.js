import React from 'react';
import config from '../../config';
import { browserHistory } from 'react-router';

export default class RegisterForm extends React.Component {

    handleSubmit(event) {
        event.preventDefault();

        const xhr = new XMLHttpRequest();

        xhr.open('POST', `${config.host}/api/signup`, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 200) {
                this.props.onSubmit(JSON.parse(xhr.responseText));
            }
        };

        xhr.send(`login=${this.loginInput.value}&password=${this.passwordInput.value}`);

    }

    componentWillReceiveProps(newprops) {
        if (newprops.testStore.credentials.token != '') {
            browserHistory['replace']('/login');
        }
    }

    render() {
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