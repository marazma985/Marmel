import React from 'react';
import { connect } from 'react-redux';
import DialogsFrend from './DialogsFrend';
import {getDialogsTC} from '../../../Redux/dialogs-reduser'

class DialogsFrendAPI extends React.Component{
  componentDidMount(){
    this.props.getDialogsTC();
  }
  render(){
    return(
      <DialogsFrend {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs
  }

};
let mapDispatchToProps = {
  getDialogsTC,
}




const DialogsFrendContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsFrendAPI)

export default DialogsFrendContainer;