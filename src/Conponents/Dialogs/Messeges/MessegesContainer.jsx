import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withLoginRedirect } from '../../../Hoc/withLoginRedirect.jsx';
import Messeges from './Messeges'
import {sendMessageTC,getMessagesTC,deleteMessageTC} from '../../../Redux/dialogs-reduser'
import { withRouter } from 'react-router';

class MessegesAPI extends React.Component{
  
  componentDidMount(){
    let userId = this.props.match.params.userId;
    this.props.getMessagesTC(userId);
  }
  componentDidUpdate(prevState){
    
    if(prevState.match.params.userId!=this.props.match.params.userId ){
      
    let userId = this.props.match.params.userId;
    this.props.getMessagesTC(userId);
    }
    
  }

  render(){
    return(
      <Messeges {...this.props} />
    )
  }
}
let mapStateToProps=(state)=>{
  return{
    dialogsPage:state.dialogsPage,
  }
  
};
let obj={
    sendMessageTC,
    getMessagesTC,
    deleteMessageTC
}
const MessegesContainer = compose(
  withLoginRedirect,
  connect(mapStateToProps,obj)
)(withRouter(MessegesAPI)); 

export default MessegesContainer;