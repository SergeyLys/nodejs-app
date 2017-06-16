import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state, ownProps) => ({
    testStore: state
});

const mapDispatchToProps =  dispatch => ({
    onSubmit: (data) => {
        dispatch({type: 'SIGNIN', payload: data});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);