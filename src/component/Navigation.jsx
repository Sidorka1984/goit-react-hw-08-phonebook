import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors.js';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontSize: 25,
    fontWeight: 350,
    color: '#313738',
  },
  activeLink: {
    color: '#75a0f0',
    fontSize: 28,
    fontWeight: 600,
  },
  span: {
    fontSize: 25,
    color: '#fff',
  },
}

const Navigation = () => {

    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    return (
        <nav>
            <NavLink to='/' exact style={styles.link} activeStyle={styles.activeLink}>
                Home
            </NavLink>
        {isLoggedIn && (
          <NavLink
            to='/contacts'
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            <span style={styles.span}> | </span>
            PhoneBook
          </NavLink>
        )}
        </nav>
    )

}

export default Navigation;