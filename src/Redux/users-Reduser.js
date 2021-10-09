import { followUser, getUsers, getUsersSerch, unfollowUser } from "../Dal/Api";

let startData = {
    users: [],
    pageCount: 0,
    pageTotal: 1,
    pageSize: 5,
    isLoaded: false,
    isDisable: false,
    disableId: [],
    massUsers:[],
    page:1,
    backPage:[],
    nextPage:1,
    serchName:"",
    serchNameProfile:[],

}

const usersReduser = (state = startData, action) => {
    switch (action.type) {
        case 'follow':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id == action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case 'unfollow':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id == action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case 'setUsers':
            return {
                ...state,
                users: action.users
            }
        case 'setPageCount':
            return {
                ...state,
                pageCount: action.pageCount
            }
        case 'isLoadedTrue':
            return {
                ...state,
                isLoaded: true
            }
        case 'isLoadedFalse':
            return {
                ...state,
                isLoaded: false
            }
        case 'disableIdUpdate':
            return {
                ...state,
                disableId: action.boolean
                    ? [...state.disableId, action.userId]
                    : state.disableId.filter(id => id != action.userId)
            }
        default:
            return state;

    }
}


export const follow = (userId) => ({ type: 'follow', userId });
export const unfollow = (userId) => ({ type: 'unfollow', userId });
export const setUsers = (users) => ({ type: 'setUsers', users });
export const setPageCount = (pageCount) => ({ type: 'setPageCount', pageCount });
export const setPageTotal = (pageTotal) => ({ type: 'setPageTotal', pageTotal });
export const isLoadedTrue = () => ({ type: 'isLoadedTrue' });
export const isLoadedFalse = () => ({ type: 'isLoadedFalse' });
export const disableIdUpdate = (boolean, userId) => ({ type: 'disableIdUpdate', boolean, userId });
export const changeSerchNameData = (data) => ({ type: 'changeSerchNameData', data });


// export const getUsersTC = (pageSize, pageTotal) => {
//     return (dispatch) => {
//         dispatch(isLoadedTrue());
//         dispatch(setPageTotal(pageTotal));
//         getUsers(pageSize, pageTotal).then(data => {
//             dispatch(setUsers(data.items));
//             dispatch(isLoadedFalse());
//             dispatch(setPageCount(Math.ceil(data.totalCount / pageSize)))
//         })
//     }
// }
export const getUsersTC = (action="start",pageSize=100) => {
    return (dispatch) => {
        
        let set=(startPage)=> {
            
            getUsers(pageSize, startPage).then(data => {
                for(let i=0;i<pageSize;i++){
                    if(data.items[i].photos.small!=null){
                        startData.massUsers.push(data.items[i]);
                        
                        if(startData.massUsers.length==5){
                            startData.nextPage=startPage;
                            break;
                        }
                        break;
                    }
                }
                if(startData.massUsers.length==5){
                    if(action=="back"){
                        dispatch(setUsers(startData.massUsers.reverse()));
                    }
                    dispatch(setUsers(startData.massUsers));
                }
                else{
                    if(action!="back"){
                        ++startPage;
                    }
                    else{
                        --startPage;  
                    }
                    set(startPage);
                }

            })
            
        }
        if(action=="next"){
            startData.massUsers=[];
            set(startData.nextPage+1,action);
            startData.backPage.push(startData.nextPage);
        }
        else if(action=="back"){
            startData.massUsers=[];
            set(startData.backPage[startData.backPage.length-1],action);
            startData.backPage.splice(startData.backPage.length-1);
        }
        else{
            startData.massUsers=[];
            set(startData.page,action);
        }  
    }
}

export const serchNameUserTC = (name) => {
    return (dispatch) => {
        let page = 1;
        let serch = (page) => {
            getUsersSerch(100, page).then(response => {
                for(let i =0;i<100;i++){
                   if(response.data.items[i].name == name){
                    startData.serchNameProfile[0]=response.data.items[i];
                        dispatch(setUsers(startData.serchNameProfile));
                        break;
                   }
                }
                if (startData.serchNameProfile[0]==null) {
                    if(page%10!=0)
                    {
                        serch(++page);
                    }
                    else if(page%20==0)
                    {
                        let obj={
                            name:"Пользователь не найден",
                            photos:{
                                small:"1",
                            }
                        }
                        dispatch(setUsers([obj]))
                    }
                    else{
                        setTimeout(serch,1000,++page);
                    }
                    
                }
            })
        }
        serch(page);
    }
}



export const unfollowTC = (userId) => {
    return (dispatch) => {
        dispatch(disableIdUpdate(true, userId));
        unfollowUser(userId).then(data => {
            if (data.resultCode == 0) dispatch(unfollow(userId));
            dispatch(disableIdUpdate(false,userId));
        })
    }
}
export const followTC = (userId) => {
    return (dispatch) => {
        dispatch(disableIdUpdate(true, userId));
        followUser(userId).then(data => {
            if (data.resultCode == 0) dispatch(follow(userId));
            dispatch(disableIdUpdate(false,userId));
        })
    }
}



export default usersReduser;