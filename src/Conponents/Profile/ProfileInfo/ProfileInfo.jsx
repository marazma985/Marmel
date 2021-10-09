
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import s from './ProfileInfo.module.css';
import ProfileInfoEditForm from './ProfileInfoEditForm';
import ProfileInfoForm from './ProfileInfoForm';
import photoop from './photoop1.png'

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [editDataMode, setEditDataMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(()=>{
    setStatus(props.status);
  },[props.status]);

  const updateEditMode = (e) => {
    setEditMode(!editMode);
    editMode && props.updateStatusTC(e.currentTarget.value)

  }
  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  }
  const selectMainPhoto = (e)=>{
    if(e.target.files.length){
      props.setPhotoTC(e.target.files[0])
    }
  }
  const chengeEditDataMode=()=>{
    setEditDataMode(!editDataMode);
  }
  const saveProfileData = (formData)=>{
    formData['fullName']= props.profileInfo.fullName;
    console.log(formData);
    setEditDataMode(!editDataMode);
    props.setProfileInfoTC(formData, props.myId);
  }
  const startDialog=()=>{
    props.startDialogTC(props.profileInfo.userId);
  }
  let modal = document.getElementById("my_modal");
  let span = document.getElementById("closeModalWindow");

  const modalWindow=()=>{
      modal.style.display = "block";
  }
  window.onclick = function (event) {
    if (event.target == modal || event.target == span) {
      modal.style.display = "none";
    }
  }

  

  return (
    <div>
      
      <div className={s.avaInfo}>
        <div className={s.avatar}>
          <div className={props.isMyPage() && s.hov} onClick={props.isMyPage() && modalWindow}>
            <img className={s.ava} src={props.profileInfo.photos.large ? props.profileInfo.photos.large : "https://pm1.narvii.com/7924/1da85cd6f60fceda99aa450734fb8a3596731e4er1-690-690v2_hq.jpg"} alt="" />
          <img className={s.photoop} src={photoop} alt="" />
          </div>
          {
            props.isMyPage()
              ? <div id="my_modal" className={s.modal}>
                <div className={s.modal_content}>
                  <span id="closeModalWindow" className={s.closeModalWindow}>×</span>
                  <input accept='image/*' type="file" onChange={selectMainPhoto} />
                </div>
              </div>
              : <button className={s.startDialogButton} onClick={startDialog}>Start dialog</button>
          }
        </div>
        
        <div className={s.info}>
          <h1>{props.profileInfo.fullName}</h1>
          <div className={s.status}>
            {
              editMode
                ? <input spellcheck="false" onChange={onChangeStatus} onBlur={updateEditMode} autoFocus={true} value={status} />
                : <div><p onClick={props.isMyPage() && updateEditMode}>Status: {props.status}</p><hr/></div>
            }
            
          </div>
          
          
          
          {!editDataMode ? 
            <div className={props.isMyPage() && s.formData} onClick={props.isMyPage() && chengeEditDataMode}>
              <ProfileInfoForm onSubmit={saveProfileData} {...props.profileInfo} />
            </div> :
            <div className={s.formEdit}>
              <ProfileInfoEditForm initialValues={props.profileInfo} onSubmit={saveProfileData} {...props.profileInfo}/>
            </div>
          }
          
          
          


        </div>
      </div>
      
      
      
      
      
    </div>

  );
}



export default ProfileInfo;