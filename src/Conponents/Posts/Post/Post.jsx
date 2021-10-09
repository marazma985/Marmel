import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (


    <div className={s.post}>

      <div className='flex'>
        <img src="https://kartinkin.com/uploads/posts/2021-03/1617037152_22-p-sova-oboi-28.jpg" alt="" />
        <div className='block'>
          <div>{props.name} </div>
          <div>{props.mesaege}</div>
        </div>
      </div>
      <div>
        <span>like </span>
        <span>{props.likeCount}</span>
      </div>

    </div>



  );
}

export default Post;