import { SIGN_UP, SIGN_IN } from "../actions/userAction";

const initialState = {
    user: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                user: action.user,
            }

        case SIGN_IN:
            return {
                ...state,
                user: action.user,
            }

        default:
            return state;
    }
}

export default userReducer;