import React from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../components/RegisterForm';

const mapStateToProps = (state) => ({
    testStore: state
});

const mapDispatchToProps =  dispatch => ({
    onSubmit: (data) => {
        dispatch({type: 'SIGNUP', payload: data});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);