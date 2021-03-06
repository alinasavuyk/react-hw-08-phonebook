import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';





const Navigation = () => {
const isLoggedIn=useSelector(authSelectors.getIsLoggedIn)


  return (
    <nav>
       <NavLink
        
        to="/react-hw-08-phonebook"
        className={({ isActive }) => (isActive ? `${s.activeLink}` : `${s.link}`)}
      >
        Головна
      
      </NavLink>
  {isLoggedIn &&(
    <NavLink
    to="/react-hw-08-phonebook/contacts"
    className={({ isActive }) => (isActive ? `${s.activeLink}` : `${s.link}`)}
    
  >
    Контакти
  </NavLink>
  )}
      
    </nav>
  );
}

export default Navigation;
