import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from './logo.png'

const Header = (props) => {
  return (
    <header className={s.header + ' flex fSpaceBetween'}>
      <div >
        <img src={logo} alt="" />
      </div>
      <div >
        {props.id
          ? <div className="flex">
            <img className={s.ava} src={props.photo} alt="" />
            <div className={s.text}>
              <p className={s.login}>{props.login}</p>
              <button className={s.button} onClick={props.logout}>LogOut</button>
            </div>
            
          </div> 
          : <h1 className={s.log}><NavLink  to='/login'>Login</NavLink></h1>}

      </div>
    </header>
  );
}

export default Header;