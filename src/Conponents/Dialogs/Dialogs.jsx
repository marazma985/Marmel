import React from 'react';
import s from './Dialogs.module.css';
import DialogsFrendContainer from './DialogsFrend/DialogsFrendContainer';
import MessegesContainer from './Messeges/MessegesContainer.jsx';

const Dialogs = (props) => {
  return (
    <div className={s.main} >
      
      
      
      <div className={s.grid}>
        <h1 className={s.fon}>__Dialogs__</h1>
        <div className={s.frendList}>
          <DialogsFrendContainer/>
        </div>
        <div className={s.m}>
          <MessegesContainer />
        </div>
      </div>
      
    </div>

    
  );
}

export default Dialogs;