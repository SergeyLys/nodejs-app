const initialState = {
    token: window.localStorage.getItem('token') || ''
};

export default function credentials(state = initialState, action) {
    switch (action.type) {
        case 'SIGNIN':
            window.localStorage.setItem('token', action.payload);
            return {...state, token: action.payload};
            break;
        case 'SIGNUP':
            return {...state, token: action.payload};
            break;
        default:
            return state;
    }
}