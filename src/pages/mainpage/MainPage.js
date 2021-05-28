import React from 'react';
import Styles from './MainPage.module.scss';

import CommonButton from '../../components/commonbutton/CommonButton';
import GlassCard from '../../components/glasscard/GlassCard';

import CoinBanner from './../../assets/images/coinsbanner.png';
import YellowRing from './../../assets/images/group-back-ring.svg';
import HeroCard1 from './../../assets/images/hero-card-1.png';
import HeroCard2 from './../../assets/images/hero-card-2.png';
import HeroCard3 from './../../assets/images/hero-card-3.png';
import ScrollDownVec from './../../assets/images/scroll-down-vec.svg';
import Coin from './../../assets/images/coin.svg';
import Rewards from './../../assets/images/rewards.svg';
import Chats from './../../assets/images/chats.svg';
import Metrics from './../../assets/images/metrics.svg';

const MainPage = props => {

    return (
        <>
            {/* Hero Section */}
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
                    {/* <button className={Styles.joinButton}>Join our community</button> */}
                    <CommonButton text={'Join our community'} />
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

            {/* First Section */}
            <div className={`${Styles.section}`}>
                <div className={Styles.content}>
                    <div className={Styles.heading1}>
                        {'What is a creator coin?'}
                    </div>
                    <div className={Styles.description}>
                        {'Creator coin is a way to invest in the creators you love and showcase your fandom.'}
                        <br />
                        {'These coins are backed by the blockchain and are yours to keep forever.'}
                    </div>
                    <div className={Styles.horizontalScroll}>
                        <GlassCard
                            icon={Coin}
                            title={'Become a part of creators success'}
                            desc={'Be early and gain financial rewards through creator coins'}
                        />
                        <GlassCard
                            icon={Rewards}
                            title={'Earning once in a lifetime rewards'}
                            desc={'Ability to meet,  have early access, own digital collectibles and many more unique rewards'}
                        />
                        <GlassCard
                            icon={Chats}
                            title={'Influence decisions'}
                            desc={'Help your favorite celebrities in making key life decisions'}
                        />
                        <GlassCard
                            icon={Metrics}
                            title={'Access to exclusive marketplace'}
                            desc={'Buy and trade NFTs, avail creator services and collaborate with the creators'}
                        />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <CommonButton text={'Know More'} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;