import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state, ownProps) => ({
    testStore: state
});

const mapDispatchToProps =  dispatch => ({
    onSubmit: (token) => {
        dispatch({type: 'SIGNIN', payload: token});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);