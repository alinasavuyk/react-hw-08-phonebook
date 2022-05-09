import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/react-hw-08-phonebook/register"
  
        style={styles.link}
      
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/react-hw-08-phonebook/login"
        style={styles.link}
       
      >
        Логин
      </NavLink>
    </div>
  );
}
