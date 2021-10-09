import { stopSubmit } from 'redux-form';
import {getAuthMe, getCaptchaUrl, login, logout} from '../Dal/Api'

let startData = {
    id: null,
    login: null,
    email: null,
    captcha: null,
}

const authReduser = (state = startData, action) => {
    switch (action.type) {
        case 'setAuthData':
        case 'setCaptchaUrl':
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;

    }
}




export const setAuthData = (id,login,email) => ({ type: 'setAuthData', data:{id,login,email} });
export const setCaptchaUrl = (url) => ({ type: 'setCaptchaUrl', data: {captcha:url} });

export const getAuthMeTC = (info) => {
    return (dispatch) =>{
        getAuthMe().then(data => {
            
            data.resultCode === 0 
            ? dispatch(setAuthData(data.data.id,data.data.login,data.data.email))
            : dispatch(setAuthData(info,info,info))
          })
    }
};
export const loginTC = (email,password,rememberMe,captcha) => {
    return (dispatch) =>{
        login(email,password,rememberMe,captcha).then(data => {
            data.resultCode === 0 
            ? dispatch(getAuthMeTC())
            : data.resultCode === 10 &&  getCaptchaUrl().then(data=>{
                dispatch(setCaptchaUrl(data.url));
            });
            dispatch(stopSubmit('login',{'_error':data.messages}));
          })
    }
};
export const logoutTC = () => {
    return (dispatch) =>{
        logout().then(data => {
            data.resultCode === 0 ? dispatch(getAuthMeTC(false)) : alert(data.messages);
          })
    }
};

export default authReduser;