const initialState = {
    login: '',
    password: ''
};

export default function credentials(state = initialState, action) {
    switch (action.type) {
        case 'SIGNIN':
            console.log(action.payload);
            return action.payload;
            break;
        case 'SIGNUP':
            console.log(action.payload);
            return action.payload;
            break;
        default:
            return state;
    }
}