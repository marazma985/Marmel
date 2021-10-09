import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { maxLengthCreator, required } from '../../Validate/Validator.js';
import Input from '../redux-form/Input.jsx';
import Post from './Post/Post.jsx'
import s from './Posts.module.css';

let posts = [];
const maxLength10 = maxLengthCreator(10);

const Posts = props => {
    
    

    let addPost = (dataForm) => {
        let postText = dataForm.postText;
        let action = { type: 'addPost',postText };
        props.addPostContainer(action);
    }
    return (
        
        <div className={s.posts}>
            <h1>My posts</h1>

            <ProfilePostFormRedux onSubmit={addPost}/>
            {posts = props.posts.map(p => <Post  mesaege={p.message} name={p.name} likeCount={p.likeCount} />)}
        </div>



    );
}

const ProfilePostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {<Field validate={[required,maxLength10]} component={Input} name={'postText'} placeholder={'send post'} />}
            <button >add post</button>
        </form>
    )
}
const ProfilePostFormRedux = reduxForm({form:'ProfilePostForm'})(ProfilePostForm);

export default Posts;