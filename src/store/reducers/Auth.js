import { profile } from "../actions";

const initialState = [{
    user: [],
    profile: []
}];



export default function todos(state = {}, action) {
    switch (action.type) {
        case 'LOGIN':

            // state.user.token = action.token;
            // state.user.login = true;
            // const user = [
            //     token => action.token,
            //     login => true
            // ]
            // console.log(state)
            // return [...state, {user: user}]

            return {
                ...state, sesion: { token: action.token, login: true },
            }
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
            // const dataProfile = {
            //     profile : action.prof
            // }
            //console.log(state);
            // return Object.assign(state, {
            //     profile : dataProfile,
            //   });
            // return Object.assign({}, state, {
            //     state : state.concat(dataProfile),
            //   });

            return {
                ...state, user: action.prof,
            }
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