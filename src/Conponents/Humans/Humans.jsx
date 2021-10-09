import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Input from '../redux-form/Input';
import s from './Humans.module.css';




let Humans = (props) => {
  let pageAll = 10;
  let page = [];
  for (let i = 1; i <= pageAll; i++) { //вместо 10 надо поставить Math.ceil(pageCount/pageSize)
    page.push(i);
  }
  let pagePorsion = [];

  let [porsion, setPorsion] = useState(1);
  let posionStart = (porsion-1)*20+1;
  let porsionEnd = porsion*20;
  let nextPage=()=>{
    props.setNewPage("next");
  }
  let backPage=()=>{
    props.setNewPage("back");
  }
  let serchNameUser =(formData)=>{
    props.serchNameUserTC(formData.name);
  }
  

  for(let i = posionStart;i<=porsionEnd;i++){
    pagePorsion.push(i);
  }
  return (
    <div className={s.grid}>
      {/*porsion>1 && <button onClick={porsionDown}>BACK</button>}
      {pagePorsion.map(p => <button onClick={(e) => { props.setNewPageTotal(p) }} > {p} </button>)}
  {porsion<pageAll&& <button onClick={porsionUp}>NEXT</button>*/}
      {//props.backPageLenght>0&& 
      }
      <div className={'flex '+ s.do}>
        <button className={'but'} onClick={backPage}>BackPage</button>
        <SerchNameUserFormRedux onSubmit={serchNameUser} />
        <button className={'but'} onClick={nextPage}>NextPage</button>
        
      </div>


      
      <div className={s.list}>
        {props.users.map(u => ( u.photos.small!=1?
          <div className={s.userBlock }>
            <NavLink className={'flex '+s.nav} to={'/Profile/'+u.id}>
            <div>
              <div>
                <img className={s.ava} src={
                  u.photos.small ? u.photos.small : u.photos.large ? u.photos.large :
                    "https://i.pinimg.com/originals/18/48/c3/1848c3f11dd2ae9a8dd70eba0b7af3c6.jpg"} alt="" />
              </div>

            </div>
            <div className={s.text} >
              <div>
              <a className={s.a}>{u.name}</a>
                
              </div>
              <div className={s.status}>
                {!!u.status && u.status.length<35 && u.status}
              </div>
              <div className={s.id}>
                id: {u.id}
              </div>
              <div>
                {
                  u.followed
                    ? <button className={'but2'} disabled={props.disableId.some(id=>id==u.id)} onClick={(event) => {
                      event.preventDefault();
                      props.unfollowTC(u.id);
                     }} >unfollow</button>

                    : <button className={'but2'} disabled={props.disableId.some(id=>id==u.id)} onClick={(event) => { 
                      event.preventDefault();
                      props.followTC(u.id);
                     }} >follow</button>
                }
              </div>
            </div>
            </NavLink>
          </div>: <div>Пользователь не найден</div>
        

      ))
      }
      </div>
      
    </div >
  );
}
const serchNameUserForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
        <div className={s.for}>
            <Field type='text' component={Input} name='name' placeholder='write name serch user' />
            <button className={'but'} >serch</button>
        </div>
        
    </form>
  )
}
const SerchNameUserFormRedux = reduxForm({form:'serchNameUserForm'})(serchNameUserForm);


export default Humans;