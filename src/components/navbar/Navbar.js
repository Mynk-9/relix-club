import React, { useState } from 'react';

import logo from './../../assets/images/logo.svg';
import Styles from './Navbar.module.scss';

import MenuIcon from './../../assets/images/Menu-right.png';

const Navbar = props => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className={Styles.nav}>
            <div className={Styles.mobileWrapper}>
                <div className={Styles.logo}>
                    <img src={logo} alt={'logo'} />
                    <span>relix</span>
                    <span className={`yellow-font-color`}>.</span>
                    <span>club</span>
                </div>
                <div className={Styles.navToggle}>
                    <button onClick={() => setNavOpen(!navOpen)} >
                        <img src={MenuIcon} alt={'menu'} />
                    </button>
                </div>
            </div>
            <div className={Styles.links} data-visible={navOpen}>
                <span>Home</span>
                <span>Contents</span>
            </div>
        </nav>
    );
};

export default Navbar;