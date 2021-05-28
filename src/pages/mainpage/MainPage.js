import React from 'react';
import Styles from './MainPage.module.scss';

import CoinBanner from './../../assets/images/coinsbanner.png';
import YellowRing from './../../assets/images/group-back-ring.svg';
import HeroCard1 from './../../assets/images/hero-card-1.png';
import HeroCard2 from './../../assets/images/hero-card-2.png';
import HeroCard3 from './../../assets/images/hero-card-3.png';
import ScrollDownVec from './../../assets/images/scroll-down-vec.svg';

const MainPage = props => {

    return (
        <>
            <div className={`${Styles.section} ${Styles.heroSection}`}>
                <div className={Styles.content}>
                    <div className={Styles.heading}>
                        <div>Invest in things</div>
                        <div>you believe in</div>
                    </div>
                    <div className={Styles.brief}>
                        <div>Building an ecosystem for influencers, super stars, sports</div>
                        <div>teams and their fans to thrive together through</div>
                        <div>creator coin</div>
                    </div>
                    <button className={Styles.joinButton}>Join our community</button>
                </div>
                <img className={Styles.yellowRing} src={YellowRing} alt={''} />
                <img className={Styles.coinBanner} src={CoinBanner} alt={'Coin Banner'} />

                <img className={Styles.heroCard} data-number={1} src={HeroCard1} alt={''} />
                <img className={Styles.heroCard} data-number={2} src={HeroCard2} alt={''} />
                <img className={Styles.heroCard} data-number={3} src={HeroCard3} alt={''} />

                <div className={Styles.scrollDown}>
                    <div>Scroll Down</div>
                    <img src={ScrollDownVec} alt={''} />
                </div>
            </div>
        </>
    );
};

export default MainPage;