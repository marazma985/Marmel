import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Frend.module.css';

const Frend = (props) => {
  return (
    <div className={s.blockFrend+' flex'}>
      {
}
      <NavLink activeClassName={s.active} className={s.a} to={'/dialogs/' + props.id}>
          <img className={s.ava} src={props.ava}  />
          <div>{props.name}</div>
      </NavLink>
    </div>
  );
}

export default Frend;