import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';


const Nav = (props) => {
    return (
      <nav className={s.nav}>
        <div>
          <NavLink activeClassName={s.active} to={/Profile/+props.myId}>My profile</NavLink>
        </div>
        <div>
          <NavLink activeClassName={s.active} to="/Dialogs">Dialogs</NavLink>
        </div>
        <div>
          <NavLink activeClassName={s.active} to="/News">News</NavLink>
        </div>
        <div>
          <NavLink activeClassName={s.active} to="/Humans">Humans</NavLink>
        </div>
        <div>
          <NavLink activeClassName={s.active} to="/login">Login</NavLink>
        </div>
        
      </nav>
    );
}

export default Nav;