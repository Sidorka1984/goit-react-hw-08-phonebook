import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav } from './Navigation.styled';
import authSelectors from '../redux/auth/auth-selectors.js';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 5,
    fontSize: 20,
    fontWeight: 350,
    color: '#313738',
  },
  activeLink: {
    color: '#75a0f0',
    fontSize: 20,
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
        <Nav>
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
        </Nav>
    )

}

export default Navigation;