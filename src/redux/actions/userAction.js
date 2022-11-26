import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';

export const postRegisterSuccess = (user) => {
    return {
        type: SIGN_UP,
        user,
    };
}

export const postLoginSuccess = (user) => {
    return {
        type: SIGN_IN,
        user,
    };
}

export const Register = (user) => {
    return async (dispatch) => {
        const response = await axios.post('http://api-resto-auth.herokuapp.com/api/v1/user', user);
        dispatch(postRegisterSuccess(response.data));
    }
}

export const Login = (user) => {
    return async (dispatch) => {
        const response = await axios.get('http://api-resto-auth.herokuapp.com/api/v1/user', user);
        dispatch(postLoginSuccess(response.data));
    }
}