import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import logo from './../../assets/images/logo.svg';
import Styles from './Navbar.module.scss';

import MenuIcon from './../../assets/images/Menu-right.png';

const Navbar = props => {
    const [navOpen, setNavOpen] = useState(false);
    let history = useHistory();

    return (
        <nav className={Styles.nav}>
            <div className={Styles.mobileWrapper}>
                <div
                    className={Styles.logo}
                    role={"button"}
                    onClick={() => history.push('/')}
                >
                    <img src={logo} alt={'logo'} />
                    <span>{'relix'}</span>
                    <span className={`yellow-font-color`}>.</span>
                    <span>{'club'}</span>
                </div>
                <div className={Styles.navToggle}>
                    <button onClick={() => setNavOpen(!navOpen)} >
                        <img src={MenuIcon} alt={'menu'} />
                    </button>
                </div>
            </div>
            <div className={Styles.links} data-visible={navOpen}>
                <span><Link to={'/'} onClick={() => setNavOpen(!navOpen)}>{'Home'}</Link></span>
                <span>
                    <a
                        href={'mailto:contact@relix.club'}
                        onClick={(e) => setNavOpen(!navOpen)}
                    >
                        {'Contact Us'}
                    </a>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;