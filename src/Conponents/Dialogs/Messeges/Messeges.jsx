import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../Validate/Validator';
import InputErorr from '../../redux-form/InputErorr';
import s from './Messeges.module.css';
import Message from './Message/Message.jsx'

let newArray = [];
const maxLength50 = maxLengthCreator(50);



const Messeges = (props) => {
  
  let deleteMessage = (e) => {
    let userId = props.match.params.userId;
    props.deleteMessageTC(e.target.id,userId);
  }
  let onSubmit = (formData) => {
    let text = formData.message;
    let userId = props.match.params.userId;
    props.sendMessageTC(userId,text);
     
  }
  return (
    <div className={s.messages}>
      <div className={s.messagesBlock}>
      {props.dialogsPage.messages.map(m => <Message deleteMessage={deleteMessage} {...m}  />)}
        
      </div>
      <div className={'flex '+ s.mes} >
        {props.match.params.userId && <DialogMessageFormRedux onSubmit={onSubmit}/>}
        
      </div>
      
    </div>
  )
}

const DialogMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.textSms} >
        <div>
            <Field validate={[ required,maxLength50]}  type='text' component={InputErorr} name='message' placeholder='write your message' />
            <button className={s.addSms} >add sms</button>

        </div>
        
    </form>
  )
}
const DialogMessageFormRedux = reduxForm({form:'DialogMessageForm'})(DialogMessageForm);


export default Messeges;