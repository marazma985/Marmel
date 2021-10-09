import * as axios from "axios";

export const MyAxios = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{"API-KEY":'07c315dc-c503-4487-834e-08b5a5a30b20'}
})

export const getUsers = (pageSize,newPageTotal) =>{
    return MyAxios.get(`users?count=${pageSize}&page=${newPageTotal}`).then(response=>{return response.data})
}
export const getUsersSerch = (pageSize,newPageTotal) =>{
    return MyAxios.get(`users?count=${pageSize}&page=${newPageTotal}`)
}
export const getProfile = (userId) =>{
    return MyAxios.get(`profile/${userId}`).then(response=>{return response.data})
}
export const getStatus = (userId) =>{
    return MyAxios.get(`profile/status/${userId}`).then(response=>{return response.data});
}
export const getAuthMe = () =>{
    return MyAxios.get('auth/me').then(response=>{return response.data})
}
export const getCaptchaUrl = () =>{
    return MyAxios.get('security/get-captcha-url').then(response=>{return response.data})
}

export const getDialogs = () =>{
    return MyAxios.get(`dialogs`).then(response=>{  return response.data})
}
export const getMessages = (userId) =>{
    return MyAxios.get(`dialogs/${userId}/messages?count=20`).then(response=>{return response.data})
}
// -------------------------------------------------
export const updateStatus = (status) =>{
    return MyAxios.put(`profile/status`,{status}).then(response=>{return response.data});
}
export const setPrifileInfo = (obj) =>{
    return MyAxios.put(`profile`,obj).then(response=>{return response.data});
}
export const startDialog = (userId) =>{
    return MyAxios.put(`dialogs/${userId}`).then(response=>{  return response.data})
}
// -------------------------------------------------
export const unfollowUser = (id) =>{
    return MyAxios.delete(`follow/${id}`).then(response=>{return response.data})
}
export const logout = () =>{
    return MyAxios.delete(`/auth/login`).then(response=>{return response.data})
}
export const deleteMessage = (messageId) =>{
    return MyAxios.delete(`dialogs/messages/${messageId}`).then(response=>{return response.data})
}
// -------------------------------------------------
export const followUser = (id) =>{
    return MyAxios.post(`follow/${id}`).then(response=>{return response.data})
}
export const login = (email,password,rememberMe,captcha) =>{
    return MyAxios.post(`/auth/login`,{email,password,rememberMe,captcha}).then(response=>{return response.data})
}
export const sendMessage = (userId,message) =>{
    return MyAxios.post(`dialogs/${userId}/messages`,{body:message}).then(response=>{return response.data})
}





//---------------------------------------------------
export const setPhoto = (file) =>{
    let formData = new FormData;
    formData.append('image',file)
    return MyAxios.post(`profile/photo`,formData,{
        headers:{
            'Content-type': 'multipart/form-data'
        }
    }).then(response=>{return response.data})
}

