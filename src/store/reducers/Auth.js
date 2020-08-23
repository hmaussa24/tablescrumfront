import Axios from '../../services/http';
import baseUrl from '../../services/baseUrl';
export default function todos(state = [], action) {
    switch (action.type) {
        case 'LOGIN':
            //console.log(loginAuthReg(action.token))
            //state = []
            return [...state, { user: { token: action.token, profile: loginAuthReg(action.token), login: true } }];
        case 'LOGOUT':
            //console.log(loginAuthReg(action.token))
            state = []
            return [...state, { user: { token: action.token, profile: loginOut(action.token), login: false } }];
        default:
            return state;
    }
}


const loginAuthReg = async (token) => {
    localStorage.setItem('jwt_token', token);
    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    let profile = await Axios.get(baseUrl + 'profile');
    return profile.data;
}

const loginOut = async (token) => {
    //localStorage.setItem('jwt_token', token);
    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    let profile = await Axios.post(baseUrl + 'logout');
    return profile.data;
}