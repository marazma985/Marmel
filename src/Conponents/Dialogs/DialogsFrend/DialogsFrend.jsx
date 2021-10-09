import React from 'react';
import s from './DialogsFrend.module.css';
import Frend from './Frend/Frend';

let newArray=[];

const DialogsFrend = (props) => {
  return (
    <div className={s.frendList}>
      {props.dialogs.map(f=><Frend key={f.key} id={f.id} name={f.userName} ava={f.photos.small}/>)
      }
      
      
      
    </div>
  );
}

export default DialogsFrend;