import dialogsReduser from './dialogs-reduser';
import profileReduser from './profile-reduser';


let store = {
    state: {
        profilePage: {
            posts: [
                { name: 'Jon', message: 'Hi!', likeCount: 3 },
                { name: 'Merry', message: 'WTF!', likeCount: 12 },
                { name: 'Larry', message: 'YOYOYO!', likeCount: 1 },
                { name: 'Hildon', message: 'How are you?', likeCount: 20 },
            ],
            newPostValue: '',
        },
        dialogsPage: {
            frends: [
                { id: 1, name: 'Alex' },
                { id: 2, name: 'Male' },
                { id: 3, name: 'Forck' },
                { id: 4, name: 'Nock' },
                { id: 5, name: 'Morsi' },
                { id: 6, name: 'Gargo' },
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'fo' },
            ],
            newSmsValue:'',
        },

    },

    dispatch(action){

        this.state.dialogsPage=dialogsReduser(this.state.dialogsPage,action);
        this.state.profilePage=profileReduser(this.state.profilePage,action);
        this.renderMain();
    },
    updateF(newF) {
        this.renderMain = newF;
    },
    renderMain() {
    },
}





export default store;