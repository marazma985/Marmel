import profileReduser, { deletePost, setStatus } from "./profile-reduser"

let state1 = {
    posts: [
        { name: 'Jon', message: 'Hi!', likeCount: 3, id:0 },
        { name: 'Merry', message: 'WTF!', likeCount: 12, id:1 },
    ],
    newPostValue: '',
    profileInfo: {
        aboutMe: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        photos: {
            small: '',
            large: ''
        },
        contacts:{}
    },
    status:'bag',

}
it('Set new status',()=>{
    let action = setStatus('new');
    let newState = profileReduser(state1,action);
    expect(newState.status).toBe('new');

})

it('Delete post',()=>{
    let action = deletePost(0);
    let newState = profileReduser(state1,action);
    expect(newState.posts.length).toBe(1);

})