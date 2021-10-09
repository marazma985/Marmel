import { reset } from "redux-form";
import { deleteMessage, getDialogs, getMessages, sendMessage, startDialog } from "../Dal/Api";

let startData={
        messages: [
        ],
        dialogs:[]
    
};


const dialogsReduser = (state = startData, action)=>{
    switch (action.type) {
        case 'setDialogs':
            return {
                ...state,
                dialogs:action.data
            }
        case 'setMessages':
            return {
                ...state,
                messages:action.data.items
            }
        default:
            return state;
    }
}

export const sendMessage1 = (text) => ({type: 'sendMessage', text});
export const setDialogs = (data) => ({type: 'setDialogs', data});
export const setMessages = (data) => ({type: 'setMessages', data});

export const getDialogsTC = () => {
    return (dispatch) => {
        getDialogs().then(data => {
            dispatch(setDialogs(data))
        });
    }
}
export const startDialogTC = (userId) => {
    return (dispatch) => {
        startDialog(userId).then(data => {
            dispatch(setDialogs(data.messages))
        });
    }
}
export const sendMessageTC = (userId,text) => {
    
    return (dispatch) => {
        sendMessage(userId,text).then(data => {
            startDialog(userId).then(data =>{
                getDialogs().then(data => {
                    dispatch(setDialogs(data))
                });
                getMessages(userId).then(data => {
                    dispatch(setMessages(data));
                });
                dispatch(reset("DialogMessageForm"));
            });
        });
    }
}
export const getMessagesTC = (userId) => {
    return (dispatch) => {
        getMessages(userId).then(data => {
            dispatch(setMessages(data));
        });
    }
}
export const deleteMessageTC = (messageId,userId) => {
    return (dispatch) => {
        deleteMessage(messageId).then(data => {
            getMessages(userId).then(data => {
                dispatch(setMessages(data));
            });
        });
    }
}

export default dialogsReduser;