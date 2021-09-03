import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'space-between',
    textDecoration: 'none',
    padding: 5,
    fontSize: 25,
    fontWeight: 350,
    color: '#313738',
  },
  activeLink: {
    color: '#75a0f0',
    fontSize: 24,
    fontWeight: 600,
  },
}

  
export default function AuthNav() {
  return (
    <div>
      <NavLink
        to='/singup'
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Register
      </NavLink>
      |
      <NavLink
        to='/login'
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Log in
      </NavLink>
    </div>
  )
}