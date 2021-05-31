import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import Styles from './MainPage.module.scss';
import Fade from 'react-reveal';

import CommonButton from '../../components/commonbutton/CommonButton';
import GlassCard from '../../components/glasscard/GlassCard';
import Footer from '../../components/footer/Footer';

import CoinBanner from './../../assets/images/combined-coinbanner.png';
// import YellowRing from './../../assets/images/group-back-ring.svg';
import HeroCard1 from './../../assets/images/hero-card-1.png';
import HeroCard2 from './../../assets/images/hero-card-2.png';
import HeroCard3 from './../../assets/images/hero-card-3.png';
import ScrollDownVec from './../../assets/images/scroll-down-vec.svg';
import Coin from './../../assets/images/coin.png';
import CoinStack from './../../assets/images/coinstack-L.png'
import Rewards from './../../assets/images/rewards.png';
import Chats from './../../assets/images/chats.png';
import Metrics from './../../assets/images/metrics.png';
import TwoMen from './../../assets/images/twomen.png';
import TwoMenCropped from './../../assets/images/twomencropped.png';
import SmallCard1 from './../../assets/images/smallcard1.png';
import SmallCard2 from './../../assets/images/smallcard2.png';
import SmallCard3 from './../../assets/images/smallcard3.png';
import SmallCard4 from './../../assets/images/smallcard4.png';
import SmallCard5 from './../../assets/images/smallcard5.png';
import SmallCard6 from './../../assets/images/smallcard6.png';
import Creator from './../../assets/images/creator.png';
import FansHand from './../../assets/images/fanshand.png';
import FansCommunity from './../../assets/images/fanscommunity.png';
import RocketMan from './../../assets/images/rocketman.png';
import RocketManLarge from './../../assets/images/rocketman-L.png';
import YellowElipse from './../../assets/images/elipse.png';
import Juggler from './../../assets/images/juggler.png';
import PinkPhone from './../../assets/images/pinkphone.png'

const MainPage = props => {
    const goldCoinRef = useRef(null);
    const heroSectionRef = useRef(null);
    const scrollDownRef = useRef(null);
    let history = useHistory();

    const fhdScaleMin = pxVal => {
        let scaleX = pxVal / 1920 * 100;
        let scaleY = pxVal / 1080 * 100;
        return `min(${scaleX}vw, ${scaleY}vh)`;
    };

    useEffect(() => {
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                // rect.top >= 0 ||
                // rect.left >= 0 ||
                // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) ||
                // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                rect.bottom >= 0
            );
        }
        function isFillingViewport(element) {
            const rect = element.getBoundingClientRect();
            return rect.top >= 0;
        }
        window.onscroll = () => {
            if (!heroSectionRef || !scrollDownRef) return;
            let nav = document.getElementsByTagName('nav')[0];
            let hero = heroSectionRef.current;
            let scrollDown = scrollDownRef.current;

            if (isInViewport(hero)) {
                if (nav.getAttribute('nav-opaque'))
                    nav.removeAttribute('nav-opaque');
            } else {
                if (!nav.getAttribute('nav-opaque'))
                    nav.setAttribute('nav-opaque', 'true');
            }

            if (isFillingViewport(heroSectionRef.current)) {
                if (scrollDown.getAttribute('data-visible'))
                    scrollDown.removeAttribute('data-visible');
            } else {
                scrollDown.setAttribute('data-visible', 'false');
            }
        };

        return () => {
            window.onscroll = null;
        }
    }, []);

    return (
        <>
            {/* Hero Section */}
            <div className={`${Styles.section} ${Styles.heroSection}`} ref={heroSectionRef}>
                <div className={Styles.wrapper}>
                    {/* <img className={Styles.yellowRing} src={YellowElipse} alt={''} /> */}
                    <img className={Styles.coinBanner} src={CoinBanner} alt={'Coin Banner'} />

                    <img className={Styles.heroCard} data-number={1} src={HeroCard1} alt={''} />
                    <img className={Styles.heroCard} data-number={2} src={HeroCard2} alt={''} />
                    <img className={Styles.heroCard} data-number={3} src={HeroCard3} alt={''} />
                </div>

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
                    <div className={Styles.buttonWrapper}>
                        <CommonButton
                            text={'Join our community'}
                            onClick={() => {
                                window.open('https://t.me/relixclub', '_blank');
                            }}
                        />
                    </div>
                </div>

                <div className={Styles.scrollDown} data-visible="true" ref={scrollDownRef}>
                    <div>Scroll Down</div>
                    <img src={ScrollDownVec} alt={''} />
                </div>
            </div>

            {/* First Section */}
            <div className={`${Styles.section}`}>
                <div className={Styles.content}>
                    <div className={Styles.heading1}>
                        <Fade bottom>
                            {'Introducing Creator Coin'}
                        </Fade>
                    </div>
                    <div className={Styles.description}>
                        <Fade bottom>
                            <div className={Styles.visiblePC}>
                                {'Creator coin is a way to invest in the creators you love and showcase your fandom.'}
                                <br />
                                {'These coins are backed by the blockchain and are yours to keep forever.'}
                            </div>
                            <div className={Styles.visibleMobile}>
                                {'Creator coin is a way to invest in the creators you love and showcase your fandom. These coins are backed by the blockchain and are yours to keep forever.'}
                            </div>
                        </Fade>
                    </div>
                    <Fade bottom>
                        <div className={Styles.horizontalScroll}>
                            <GlassCard
                                icon={Coin}
                                title={'Become a part of creators success'}
                                desc={'Be early and gain financial rewards through creator coins'}
                            />
                            <GlassCard
                                icon={Rewards}
                                title={'Earning once in a lifetime rewards'}
                                desc={'Chance to meet, gain early access, own digital collectibles and many more unique rewards'}
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
                    </Fade>
                    <div style={{ margin: '-1.5rem 0' }} className={Styles.visibleMobile} />
                    <div style={{ textAlign: 'center' }}>
                        <Fade bottom>
                            <CommonButton text={'Know More'} onClick={() => {
                                history.push('/knowmore');
                            }} />
                        </Fade>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className={`${Styles.section}`}>
                <div className={Styles.content}>
                    <div className={Styles.heading1}>
                        <Fade bottom>
                            {'Building an economy for creators & fans'}
                        </Fade>
                    </div>
                    <div
                        className={Styles.section2content}
                    >
                        <div className={Styles.visibleMobile}>
                            <Fade bottom>
                                <img src={TwoMenCropped} alt={''} style={{
                                    marginBottom: '2rem',
                                }} />
                            </Fade>
                        </div>
                        <div className={Styles.details}>
                            <div
                                className={`${Styles.title} yellow-font-color`}
                                style={{
                                    marginBottom: fhdScaleMin(24),
                                }}
                            >
                                {'Creators'}
                            </div>
                            <div className={Styles.description}>
                                {'Innovative way for creators to:'}
                                <Fade bottom cascade>
                                    <ul>
                                        <li>{'Launch unique and branded coins'}</li>
                                        <li>{'Increase Engagement with the community'}</li>
                                        <li>{'Additional source of revenue'}</li>
                                    </ul>
                                </Fade>
                            </div>
                        </div>
                        <div className={Styles.visiblePC}>
                            <img src={TwoMen} alt={''} />
                        </div>
                        <div className={Styles.details}>
                            <div
                                className={`${Styles.title} yellow-font-color`}
                                style={{
                                    marginBottom: fhdScaleMin(24),
                                }}
                            >
                                {'Fans'}
                            </div>
                            <div className={Styles.description}>
                                {'Invest in creators for:'}
                                <Fade bottom cascade>
                                    <ul>
                                        <li>{'Emotional Value'}</li>
                                        <li>{'Economic upside'}</li>
                                        <li>{'Exciting and unique rewards'}</li>
                                    </ul>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Section */}
            <div className={`${Styles.section} ${Styles.ellipseBgSection}`}>
                <div className={Styles.content}>
                    <div className={Styles.heading1}>
                        {'Creator Coin: A way to'}
                        <br />
                        {'turbocharge creator’s ecosystem'}
                    </div>
                    <div className={Styles.section3content}>
                        {/* background */}
                        {/* <img
                            src={YellowRing}
                            alt={''}
                            className={Styles.yellowRing}
                        /> */}
                        <img
                            ref={goldCoinRef}
                            src={Coin}
                            alt={''}
                            className={Styles.bigCoin}
                        />
                        {/* small cards PC */}
                        <div className={Styles.visiblePC}>
                            <img
                                src={SmallCard1}
                                alt={''}
                                className={Styles.smallCard}
                                style={{
                                    top: fhdScaleMin(187), // 187px
                                    left: fhdScaleMin(435), // 435px
                                    height: fhdScaleMin(251), // 251px
                                    width: fhdScaleMin(215),
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
                                    width: fhdScaleMin(215),
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
                                    width: fhdScaleMin(215),
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
                                    width: fhdScaleMin(215),
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
                                    width: fhdScaleMin(215),
                                }}
                            />
                            <img
                                src={SmallCard6}
                                alt={''}
                                className={Styles.smallCard}
                                style={{
                                    top: fhdScaleMin(198),
                                    right: fhdScaleMin(435),
                                    height: fhdScaleMin(240),
                                    width: fhdScaleMin(215),
                                }}
                            />
                        </div>

                        {/* Small cards Phone */}
                        <div
                            className={`${Styles.horizontalScroll} ${Styles.visibleMobile}`}
                            style={{
                                paddingTop: '4rem'
                            }}
                        >
                            <GlassCard
                                icon={CoinStack}
                                title={'Economy'}
                                desc={'Build an economy based on creator’s coin'}
                                style={{
                                    height: '250px',
                                    width: '215px',
                                }}
                                titleStyle={{
                                    fontSize: '1.3rem'
                                }}
                                descStyle={{
                                    fontSize: '0.8rem',
                                    fontFamily: 'Poppins-XLight',
                                    lineHeight: '1.5'
                                }}
                                iconStyle={{ transform: 'translate(-50%, -5rem)' }}
                            />
                            <GlassCard
                                icon={Juggler}
                                title={'Community'}
                                desc={'Create a robust community of super fans'}
                                style={{
                                    height: '250px',
                                    width: '215px',
                                }}
                                titleStyle={{
                                    fontSize: '1.3rem'
                                }}
                                descStyle={{
                                    fontSize: '0.8rem',
                                    fontFamily: 'Poppins-XLight',
                                    lineHeight: '1.5'
                                }}
                                iconStyle={{ transform: 'translate(-50%, -5rem)' }}
                            />
                            <GlassCard
                                icon={Metrics}
                                title={'Services'}
                                desc={'Enable collaboration between creators and fans'}
                                style={{
                                    height: '250px',
                                    width: '215px',
                                }}
                                titleStyle={{
                                    fontSize: '1.3rem'
                                }}
                                descStyle={{
                                    fontSize: '0.8rem',
                                    fontFamily: 'Poppins-XLight',
                                    lineHeight: '1.5'
                                }}
                                iconStyle={{ transform: 'translate(-50%, -5rem)' }}
                            />
                            <GlassCard
                                icon={PinkPhone}
                                title={'Launch NFTs'}
                                desc={'Help creators launch their NFTs'}
                                style={{
                                    height: '250px',
                                    width: '215px',
                                }}
                                titleStyle={{
                                    fontSize: '1.3rem'
                                }}
                                descStyle={{
                                    fontSize: '0.8rem',
                                    fontFamily: 'Poppins-XLight',
                                    lineHeight: '1.5'
                                }}
                                iconStyle={{ transform: 'translate(-50%, -5rem)' }}
                            />
                            <GlassCard
                                icon={RocketManLarge}
                                title={'Success'}
                                desc={'Enable fans to participate in creator’s success'}
                                style={{
                                    height: '250px',
                                    width: '215px',
                                }}
                                titleStyle={{
                                    fontSize: '1.3rem'
                                }}
                                descStyle={{
                                    fontSize: '0.8rem',
                                    fontFamily: 'Poppins-XLight',
                                    lineHeight: '1.5'
                                }}
                                iconStyle={{ transform: 'translate(-50%, -5rem)' }}
                            />
                            <GlassCard
                                icon={Rewards}
                                title={'Rewards'}
                                desc={'Creators can incentivize their super fans'}
                                style={{
                                    height: '250px',
                                    width: '215px',
                                }}
                                titleStyle={{
                                    fontSize: '1.3rem'
                                }}
                                descStyle={{
                                    fontSize: '0.8rem',
                                    fontFamily: 'Poppins-XLight',
                                    lineHeight: '1.5'
                                }}
                                iconStyle={{ transform: 'translate(-50%, -5rem)' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Fourth Section */}
            <div className={Styles.section}>
                <div className={Styles.content}>
                    <div className={Styles.heading1}>
                        {'Here’s how the platform works'}
                    </div>
                    <div className={Styles.section4content}>
                        {/* row 1 */}
                        <div className={Styles.row}>
                            <div className={Styles.info}>
                                <div className={`${Styles.heading1} yellow-font-color`}>
                                    {'Creator launches coin'}
                                </div>
                                <div className={Styles.description}>
                                    {'Launch their own branded coin powered by blockchain and limited in supply.'}
                                </div>
                            </div>
                            <div className={Styles.image}>
                                <img
                                    src={Creator}
                                    alt={'creator'}
                                    style={{
                                        height: fhdScaleMin(551),
                                    }}
                                />
                            </div>
                        </div>
                        {/* row 2 */}
                        <div className={Styles.row}>
                            <div className={Styles.image} style={{ display: 'revert' }}>
                                <img
                                    src={FansHand}
                                    alt={'fan'}
                                    style={{
                                        height: fhdScaleMin(600),
                                        // position: 'relative',
                                        // transform: 'translateX(calc(-1 * var(--section-padding-horizontal)))',
                                    }}
                                />
                            </div>
                            <div className={Styles.info}>
                                <div className={`${Styles.heading1} green-font-color`}>
                                    {'Fans invest in creator'}
                                </div>
                                <div className={Styles.description}>
                                    {'Fans buy their favorite creator’s coins to participate in creators success and to engage deeply with the creator.'}
                                </div>
                            </div>
                        </div>
                        {/* row 3 */}
                        <div className={Styles.row}>
                            <div className={Styles.info}>
                                <div className={`${Styles.heading1} yellow-font-color`}>
                                    {'Fans earn exclusive rewards'}<br />{'and build thriving community'}
                                </div>
                                <div className={Styles.description}>
                                    {'Creators reward fans with exciting opportunities such as meet & greet, exclusive workshops, chance to collaborate, NFT drops, etc.'}
                                </div>
                            </div>
                            <div className={Styles.image}>
                                <img
                                    src={FansCommunity}
                                    alt={'community'}
                                    style={{
                                        height: fhdScaleMin(617),
                                    }}
                                />
                            </div>
                        </div>
                        {/* row 4 */}
                        <div className={Styles.row}>
                            <div className={Styles.image}>
                                <img
                                    src={RocketMan}
                                    alt={'growth'}
                                    style={{
                                        height: fhdScaleMin(615),
                                    }}
                                />
                            </div>
                            <div className={Styles.info}>
                                <div className={`${Styles.heading1} green-font-color`}>
                                    {'Creators & fans grow together'}
                                </div>
                                <div className={Styles.description}>
                                    <p>Creator coin aligns economic incentives between creator and fans and helps strengthen the relationship between them. As more fans come, the value of the creator coin goes up, increasing the overall size of the creator’s economy and benefiting both fans and creators.</p>
                                    <p>Imagine a new world where fans get an opportunity to be close to their favorite celebrity while having financial gains.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fifth Section */}
            <div className={Styles.section} style={{ background: 'none' }}>
                <div className={Styles.content}>
                    <div className={Styles.heading1}>
                        {'To know more, join our telegram community'}
                    </div>
                    <div className={Styles.description}>
                        <CommonButton text={'Join our community'} />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default MainPage;