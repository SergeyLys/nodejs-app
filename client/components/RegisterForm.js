import React from 'react';

export default class RegisterForm extends React.Component {

    // state = {
    //     login: '',
    //     password: ''
    // };

    getFormData(event) {
        switch (event.target.name) {
            case 'login':
                // this.props.onSubmit(event.target.value);
                // this.setState({login: event.target.value});
                break;
            case 'password':
                // this.props.onSubmit(event.target.value);
                // this.setState({password: event.target.value});
                break;
            default:
                return null;
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        var request = new XMLHttpRequest();

        // this.props.onSubmit(this.state);

        console.log(this.loginInput.value, this.passwordInput.value);
    }

    render() {
        return(
            <form onSubmit={::this.handleSubmit}>
                <input ref={(input) => { this.loginInput = input }} onChange={::this.getFormData} name="login" type="text"/>
                <input ref={(input) => { this.passwordInput = input }} onChange={::this.getFormData} name="password" type="text"/>
                <button>Signup</button>
            </form>
        )
    }
}