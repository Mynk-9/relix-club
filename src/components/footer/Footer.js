import React from 'react';
import Styles from './Footer.module.scss';

import Logo from './../../assets/images/logo.svg';
import FBLogo from './../../assets/images/fb-logo.png';
import InstagramLogo from './../../assets/images/insta-logo.png';
import LinkedInLogo from './../../assets/images/linkedin-logo.png';
import TwitterLogo from './../../assets/images/twitter-logo.png';
import TelegramLogo from './../../assets/images/telegram-logo.png';
import YouTubeLogo from './../../assets/images/yt-logo.png';

const Footer = props => {
    const thisYear = (new Date()).getFullYear();

    return (
        <footer className={Styles.footer}>
            <div className={Styles.flexWrapper}>
                <div className={Styles.logo}>
                    <img src={Logo} alt={'logo'} />
                    <span>{'relix'}</span>
                    <span className={`yellow-font-color`}>.</span>
                    <span>{'club'}</span>
                </div>
                <div className={Styles.links}>
                    <div className={Styles.websiteLinks}>
                        <button className={'yellow-font-color'}>{'Home'}</button>
                        <button className={'yellow-font-color'}>{'Contact Us'}</button>
                    </div>
                    <div className={Styles.socialLinks}>
                        <img src={FBLogo} alt={'FB Logo'} />
                        <img src={InstagramLogo} alt={'Instagram Logo'} />
                        <img src={LinkedInLogo} alt={'Instagram Logo'} />
                        <img src={TwitterLogo} alt={'Twitter Logo'} />
                        <img src={TelegramLogo} alt={'Telegram Logo'} />
                        <img src={YouTubeLogo} alt={'YouTube Logo'} />
                    </div>
                </div>
            </div>
            <div className={Styles.notices}>
                <span>{'Privacy Policy'}</span>
                <span>{'Site Map'}</span>
                <span>{`© ${thisYear} relix.club`}</span>
            </div>
        </footer>
    );
};

export default Footer;