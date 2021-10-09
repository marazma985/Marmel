import { getProfile, getStatus,setPhoto,setPrifileInfo,updateStatus } from "../Dal/Api";


let startData = {
    profileInfo: {
        photos: {
            small: null,
            large: null
        },
        userId: null,
        aboutMe:null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        
    },
    myPhotos: {
        small: null,
        large: null
    },
    status:'bag',

}

const profileReduser = (state = startData, action) => {
    switch (action.type) {
        case 'addPost': {
            let newPost = { name: 'Meredit', message: action.postText, likeCount: '5' };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case 'setProfile': {
            return { ...state, profileInfo: action.profileInfo };
        }
        case 'setMyProfile': {
            return { ...state, myPhotos: action.profileInfo.photos };
        }
        case 'setStatus': {
            return { ...state, status: action.status };
        }
        case 'setPhotoData': {
            let photos = action.dataPhoto.photos;
            let a = { ...state, profileInfo:{...state.profileInfo , photos}};
            debugger;
            return a;
        }
        case 'deletePost':{
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        default:
            return state;
    }

}
export const addPost = () => ({ type: 'addPost' });
export const setProfile = (profileInfo) => ({ type: 'setProfile', profileInfo });
export const setMyProfile = (profileInfo) => ({ type: 'setMyProfile', profileInfo });
export const setPhotoData = (dataPhoto) => ({ type: 'setPhotoData', dataPhoto });
export const setStatus = (status) => ({ type: 'setStatus', status });
export const deletePost = (postId) => ({ type: 'deletePost', postId });

export const getProfileTC = (userId) => {
    return  (dispatch) => {
        getProfile(userId).then(data => {
            dispatch(setProfile(data));
        });
        getStatus(userId).then(data => {
            dispatch(setStatus(data));
        });
    }

}
export const getMyProfileTC = (userId) => {
    return  (dispatch) => {
        getProfile(userId).then(data => {
            dispatch(setMyProfile(data));
        });
    }

}

export const updateStatusTC = (status) => {
    return (dispatch) => {
        updateStatus(status).then(data => {
            data.resultCode === 0 ? dispatch(setStatus(status)):dispatch(setStatus('Debil'));
        });
    }
}
export const setPhotoTC = (file) => {
    return async (dispatch) => {
        let data = await setPhoto(file);
        data.resultCode === 0 && dispatch(setPhotoData(data.data));

    }
}
export const setProfileInfoTC = (ProfileInfo, userId) => {
    return async (dispatch) => {
        let data = await setPrifileInfo(ProfileInfo);
        data.resultCode === 0 ? getProfile(userId).then(data => {
            dispatch(setProfile(data));
        }):dispatch();
    }
}

export default profileReduser;