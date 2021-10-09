import React from 'react';
import PostsContainer from '../Posts/PostsContainer.jsx';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
  return (
    
    
    <div className={s.content}>
      
      {<ProfileInfo {...props} />
}
      {//<PostsContainer />
      }


    </div>
  );
}

export default Profile;