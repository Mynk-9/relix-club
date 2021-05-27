import React from 'react';

import logo from './../../assets/images/logo.svg';
import Styles from './Navbar.module.scss';

const Navbar = props => {

    return (
        <nav className={Styles.nav}>
            <div className={Styles.logo}>
                <img src={logo} />
                <span>relix</span>
                <span className={`yellow-font-color`}>.</span>
                <span>club</span>
            </div>
            <div className={Styles.links}>
                <span>Home</span>
                <span>Contents</span>
            </div>
        </nav>
    );
};

export default Navbar;