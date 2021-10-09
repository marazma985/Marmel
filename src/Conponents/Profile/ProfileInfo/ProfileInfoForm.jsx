import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfoForm = (props) => {
    
        let contacts = () => {
            if(props.contacts!=undefined){
            let a = Object.keys(props.contacts).map(key =>
                props.contacts[key] && <p key={key}><b>{key}</b>: {props.contacts[key]}</p>
            )
            
            let e = 0
            for (let i in a){
                a[i] == "" && ++e;
                a[i] == null &&++e; 
            }
            if (e == 8) return false;
            return a

        }
    }
    return <form className={s.forma} onSubmit={props.handleSubmit} >
        {props.aboutMe && <p><b>aboutMe:</b> {props.aboutMe}</p>}
        <p><b>lookingForAJob:</b> {props.lookingForAJob ? 'yes':'no'}</p>
        {props.lookingForAJob && <p><b>lookingForAJobDescription:</b> {props.lookingForAJobDescription}</p>}
        {contacts()&&<div className={s.cont}>
            <p><b>Contacts:</b></p>
            <div className={s.contact}>
                {contacts()}
            </div>
        </div>}
        
    </form>
}

export default ProfileInfoForm