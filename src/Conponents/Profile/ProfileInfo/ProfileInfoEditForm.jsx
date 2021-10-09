import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../../redux-form/Input';
import s from './ProfileInfo.module.css';

const ProfileInfoEditFormRedux = (props) => {
  return <form onSubmit={props.handleSubmit}>
    
    <p><b>aboutMe:</b> <Field component={Input}  type='text' validate={[]} name='aboutMe' placeholder={props.aboutMe} /></p>
    <p><b>lookingForAJob:</b> <Field  component='input' type='checkbox' validate={[]} name='lookingForAJob'/></p>
    {<p><b>lookingForAJobDescription:</b>
      <Field className={s.description} component={Input} type='textarea' validate={[]} name='lookingForAJobDescription' placeholder={props.lookingForAJobDescription} />
    </p>}
    <p>Contacts:</p>
    <div className={s.contact}>
      {Object.keys(props.contacts).map(key => <p key={key}><b>{key}</b> : 
        <Field component={Input} type='text' validate={[]} name={'contacts.'+key} placeholder={props.contacts[key]} />
      </p>)}
    </div>
    <button>save</button>
  </form>
}
const ProfileInfoEditForm = reduxForm({ form: 'profile' })(ProfileInfoEditFormRedux);

export default ProfileInfoEditForm