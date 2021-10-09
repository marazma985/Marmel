import React from 'react';
import { connect } from 'react-redux';
import Posts from './Posts.jsx'

let mapStateToProps=(state)=>{
    return{
        posts:state.profilePage.posts,
    }
    
};
let mapDispatchToProps=(dispatch)=>{
    return{
        addPostContainer: (action) => { dispatch(action); },
    }
    
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;