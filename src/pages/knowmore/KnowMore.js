import React from 'react';
import Fade from 'react-reveal';
import Styles from './KnowMore.module.scss';

import CoinSmall from './../../assets/images/coinsmall.png';
import PlayIcon from './../../assets/images/playbutton.png';
import LetterIcon from './../../assets/images/letter.png';
import FansCommunityIcon from './../../assets/images/fanscommunity-L.png';
import NFTIcon from './../../assets/images/gallery.png';
import GoldenKeyIcon from './../../assets/images/goldenkey.png';
import GamesIcon from './../../assets/images/gamecontroller.png';
import ServicesIcon from './../../assets/images/services.png';
import TwoBoys from './../../assets/images/twoboys.png';
import Footer from '../../components/footer/Footer';

const KnowMore = props => {

    // const fhdScaleMin = pxVal => {
    //     let scaleX = pxVal / 1920 * 100;
    //     let scaleY = pxVal / 1080 * 100;
    //     return `min(${scaleX}vw, ${scaleY}vh)`;
    // };

    return (
        <>
            <div className={Styles.section}>
                <div className={Styles.content}>
                    <div className={Styles.heading1}>{'Benefits of owning a Creator’s Coin'}</div>
                    <div className={Styles.description}>
                        {'Owning a coin allows fans to participate in creator’s economy. We plan to accrue more and more value to creator coins. Some of the benefits are listed below, while we continue to work on more...'}
                    </div>
                </div>
                <div className={Styles.content}>
                    <Fade bottom>
                        <div className={Styles.row}>
                            <div className={Styles.info}>
                                <div className={Styles.title}>
                                    {'Coin Value'}
                                </div>
                                <div className={Styles.description}>
                                    {'The value of the coin increases with each purchase, thereby more users buying leads to increased coin value. As creators and fans engage further, the use cases for coins also expand, the economy starts surging and keeps growing.'}
                                </div>
                            </div>
                            <div className={Styles.icon}>
                                <img src={CoinSmall} alt={''} />
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={Styles.row}>
                            <div className={Styles.info}>
                                <div className={Styles.title}>
                                    {'Exclusive Content'}
                                </div>
                                <div className={Styles.description}>
                                    {'By accumulating and holding onto coins, you get a chance to have prior access to  unreleased content of the creator or even have personal content designed for you by the creator.'}
                                </div>
                            </div>
                            <div className={Styles.icon}>
                                <img src={PlayIcon} alt={''} />
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={Styles.row}>
                            <div className={Styles.info}>
                                <div className={Styles.title}>
                                    {'Greetings'}
                                </div>
                                <div className={Styles.description}>
                                    {'Token holders get the chance to receive personalized message, special birthday wishes, and personal zoom meetings from their favorite creator.'}
                                </div>
                            </div>
                            <div className={Styles.icon}>
                                <img src={LetterIcon} alt={''} />
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={Styles.row}>
                            <div className={Styles.info}>
                                <div className={Styles.title}>
                                    {'Meet and Greet'}
                                </div>
                                <div className={Styles.description}>
                                    {'Yes, you heard us right. You get to meet and greet with your Shahrukh or Deepika as a part of the perks for holding onto major coin shares.'}
                                </div>
                            </div>
                            <div className={Styles.icon}>
                                <img
                                    src={FansCommunityIcon}
                                    alt={''}
                                    className={Styles.exceptionImages}
                                />
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={Styles.row}>
                            <div className={Styles.info}>
                                <div className={Styles.title}>
                                    {'Get to work together'}
                                </div>
                                <div className={Styles.description}>
                                    {'You get a chance to learn from your favorite creator and collaborates with them. Wish to compose a track with  A.R. Rehman, that becomes possible now...'}
                                </div>
                            </div>
                            <div className={Styles.icon}>
                                <img
                                    src={TwoBoys}
                                    alt={''}
                                    className={Styles.exceptionImages}
                                />
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={Styles.row}>
                            <div className={Styles.info}>
                                <div className={Styles.title}>
                                    {'NFTs of their work'}
                                </div>
                                <div className={Styles.description}>
                                    {'Not only will Fan have access to myriad new experiences, but they also get to acquire limited NFTs (Non-Fungible Tokens), which can be traded on a  secondary marketplace along with coins and other digital assets, etc. '}
                                </div>
                            </div>
                            <div className={Styles.icon}>
                                <img src={NFTIcon} alt={''} />
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={Styles.row}>
                            <div className={Styles.info}>
                                <div className={Styles.title}>
                                    {'Early Access'}
                                </div>
                                <div className={Styles.description}>
                                    {'Get early access to things that are yet to come public. Imagine getting to read Harry Potter or Game of Thrones before the book hits the shelf or a chance to buy live show tickets of your favorite artist before it is open to the public. These and many more such privileges await for such coin holders'}
                                </div>
                            </div>
                            <div className={Styles.icon}>
                                <img src={GoldenKeyIcon} alt={''} />
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={Styles.row}>
                            <div className={Styles.info}>
                                <div className={Styles.title}>
                                    {'Games'}
                                </div>
                                <div className={Styles.description}>
                                    {'Coin holders get the chance to vote on key life decisions of the creator, Play trivia, Super Fan competitions, and many more...'}
                                </div>
                            </div>
                            <div className={Styles.icon}>
                                <img src={GamesIcon} alt={''} />
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className={Styles.row}>
                            <div className={Styles.info}>
                                <div className={Styles.title}>
                                    {'Services'}
                                </div>
                                <div className={Styles.description}>
                                    {'Both creators and fans serve each other and do tasks for each other and get paid in social tokens.'}
                                </div>
                            </div>
                            <div className={Styles.icon}>
                                <img src={ServicesIcon} alt={''} />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default KnowMore;