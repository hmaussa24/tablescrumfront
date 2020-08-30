import Axios from '../../services/http';
import baseUrl from '../../services/baseUrl';
import { profile } from '../actions';

const initialState = {
  };



export default function todos(state = [], action) {
    switch (action.type) {
        case 'LOGIN':
            
            // state.user.token = action.token;
            // state.user.login = true;
            const user = {
                token : action.token,
                login : true
            }
            return Object.assign({}, state, {
                state : state.concat(user),
              });
            // console.log(state)
            // return state;
        case 'LOGOUT':
            // //console.log(loginAuthReg(action.token))
            // state.user.login = action.token
            // state.user.token = '';
            localStorage.removeItem('persist:root');
            return state = [];
        case 'PROFILE':
            // //console.log(loginAuthReg(action.token))
            // const profile = loginAuthReg(action.token);
            // state = [{ user: { profile: profile} }]
            return state;
        default:
            return state;
    }
}


// const loginAuthReg = async (token) => {
//     localStorage.setItem('jwt_token', token);
//     Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     let profile = await Axios.get(baseUrl + 'profile');
//     console.log(profile.data)
//     return profile.data;
// }

// const loginOut = async (token) => {
//     //localStorage.setItem('jwt_token', token);
//     Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     let profile = await Axios.post(baseUrl + 'logout');
//     return profile.data;
// }