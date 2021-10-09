import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile.jsx';
import {getProfileTC,updateStatusTC,setPhotoTC,setProfileInfoTC} from '../../Redux/profile-reduser';
import {startDialogTC} from '../../Redux/dialogs-reduser';
import {getAuthMeTC} from '../../Redux/auth-Reduser';
import { withRouter } from 'react-router-dom';
import { getProfileInfoS, getProfileStatusSuper } from '../../Redux/selectors/profile-selectors.js';

class ProfileAPI extends React.Component{
  refresh(){
    let userId = this.props.match.params.userId;
    !userId ? userId=this.props.myId:userId=userId;
    this.props.getProfileTC(userId);
    
    
  }
  componentDidMount(){
    this.refresh();
  }
  componentDidUpdate(prevProps){
    this.props.match.params.userId != prevProps.profileInfo.userId && this.refresh();
  }
  isMyPage(){
    return this.match.params.userId==this.myId || !this.match.params.userId
  }
  render(){
    return (
      <Profile {...this.props} isMyPage={this.isMyPage}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
      profileInfo: getProfileInfoS(state),
      status: getProfileStatusSuper(state),
      myId: state.auth.id,
      
  }
}

let obj = {
  getProfileTC,
  updateStatusTC,
  getAuthMeTC,
  setPhotoTC,
  setProfileInfoTC,
  startDialogTC
}

const ProfileContainer = connect(mapStateToProps,obj )(withRouter(ProfileAPI));
export default ProfileContainer;
