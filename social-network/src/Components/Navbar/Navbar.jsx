import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={styles.nav}>
            <div className={`${styles.item} + ${styles.active}`}>
                <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={`${styles.item} + ${styles.active}`}>
                <NavLink to='/users' activeClassName={styles.active}>Users</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;