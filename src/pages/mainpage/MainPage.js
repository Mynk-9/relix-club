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
import Coin from './../../assets/images/coin.png';
import Rewards from './../../assets/images/rewards.png';
import Chats from './../../assets/images/chats.png';
import Metrics from './../../assets/images/metrics.png';
import TwoMen from './../../assets/images/twomen.png';
import SmallCard1 from './../../assets/images/smallcard1.png';
import SmallCard2 from './../../assets/images/smallcard2.png';
import SmallCard3 from './../../assets/images/smallcard3.png';
import SmallCard4 from './../../assets/images/smallcard4.png';
import SmallCard5 from './../../assets/images/smallcard5.png';
import SmallCard6 from './../../assets/images/smallcard6.png';

const MainPage = props => {

    const fhdScaleMin = pxVal => {
        let scaleX = pxVal / 1920 * 100;
        let scaleY = pxVal / 1080 * 100;
        return `min(${scaleX}vw, ${scaleY}vh)`;
    };

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

            {/* Second Section */}
            <div className={`${Styles.section}`}>
                <div className={Styles.content}>
                    <div className={Styles.heading1}>
                        {'A virtual economy where both creators and fans grow'}
                        <br />
                        {'together and engage through creator coins'}
                    </div>
                    <div
                        className={Styles.section2content}
                    >
                        <div>
                            <div className={`${Styles.title} yellow-font-color`}>Creators</div>
                            <div className={Styles.description}>
                                {'Innovative way for creators to:'}
                                <ul>
                                    <li>Launch unique and branded coins</li>
                                    <li>Increase Engagement with the community</li>
                                    <li>A new source of income</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <img src={TwoMen} alt={''} />
                        </div>
                        <div>
                            <div className={`${Styles.title} yellow-font-color`}>Fans</div>
                            <div className={Styles.description}>
                                {'Ability to invest in creators they believe in:'}
                                <ul>
                                    <li>Emotional Value</li>
                                    <li>Economic upside</li>
                                    <li>Exciting and unique rewards</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Section */}
            <div className={`${Styles.section}`}>
                <div className={Styles.content}>
                    <div className={Styles.heading1}>
                        {'Creator Coin: A way to'}
                        <br />
                        {'turbocharge creator’s ecosystem'}
                    </div>
                    <div className={Styles.section3content}>
                        {/* background */}
                        <img src={YellowRing} alt={''} className={Styles.yellowRing} />
                        <img src={Coin} alt={''} className={Styles.bigCoin} />
                        {/* small cards */}
                        <img
                            src={SmallCard1}
                            alt={''}
                            className={Styles.smallCard}
                            style={{
                                top: fhdScaleMin(187), // 187px
                                left: fhdScaleMin(435), // 435px
                                height: fhdScaleMin(251), // 251px
                            }}
                        />
                        <img
                            src={SmallCard2}
                            alt={''}
                            className={Styles.smallCard}
                            style={{
                                top: fhdScaleMin(451), // 451px
                                left: fhdScaleMin(367), // 367px
                                height: fhdScaleMin(284), // 284px
                            }}
                        />
                        <img
                            src={SmallCard3}
                            alt={''}
                            className={Styles.smallCard}
                            style={{
                                top: fhdScaleMin(691),
                                left: fhdScaleMin(650),
                                height: fhdScaleMin(263),
                            }}
                        />
                        <img
                            src={SmallCard4}
                            alt={''}
                            className={Styles.smallCard}
                            style={{
                                top: fhdScaleMin(661),
                                right: fhdScaleMin(655),
                                height: fhdScaleMin(293),
                            }}
                        />
                        <img
                            src={SmallCard5}
                            alt={''}
                            className={Styles.smallCard}
                            style={{
                                top: fhdScaleMin(413),
                                right: fhdScaleMin(369),
                                height: fhdScaleMin(322),
                            }}
                        />
                        <img
                            src={SmallCard3}
                            alt={''}
                            className={Styles.smallCard}
                            style={{
                                top: fhdScaleMin(198),
                                right: fhdScaleMin(435),
                                height: fhdScaleMin(240),
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;