import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logoutTC } from '../../Redux/auth-Reduser';
import { getMyProfileTC } from '../../Redux/profile-reduser';

class HeaderAPI extends React.Component {
  componentDidMount(){
    this.props.getMyProfileTC(this.props.data.id);
  }
  
  render() {
    return (
      <Header {...this.props.data} photo={this.props.photo} logout={this.props.logoutTC}  />
    )
  }
}

let mapStateToProps=(state)=>{
  return{
    data:state.auth,
    photo:state.profilePage.myPhotos.small
  }
}

let obj = {
  logoutTC,
  getMyProfileTC
}
const HeaderContainer = connect(mapStateToProps,obj)(HeaderAPI)
export default HeaderContainer;