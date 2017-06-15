const initialState = {
    login: '',
    password: ''
};

export default function credentials(state = initialState, action) {
    switch (action.type) {
        case 'SIGN':
            console.log(action.payload);
            return action.payload;
            break;
        default:
            return state;
    }
}