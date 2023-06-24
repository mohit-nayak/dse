import React from 'react';
import {Link} from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Button from 'react-bootstrap/Button';
import starWhite from '../../../assets/icons/star-white.svg';
import singleQuote from '../../../assets/icons/single-quote.svg';
import solaLogo from '../../../assets/images/logo/sola.svg';
import emcoLogo from '../../../assets/images/logo/emco.svg';
import kunzLogo from '../../../assets/images/logo/kunz.svg';
import haberkornLogo from '../../../assets/images/logo/haberkorn.svg';
import ivoclarLogo from '../../../assets/images/logo/ivoclar-vivadent.svg';
import senseforceLogo from '../../../assets/images/logo/senseforce.svg';
import conductixLogo from '../../../assets/images/logo/conductix-wampfler.svg';
import * as classes from './HeroBanner.module.scss';

const HeroBanner = () => {
    return (
        <>
            <section className={`${classes.Banner} text-white`} id="home-banner">
                <StaticImage src="../../../assets/images/banner-bg.png" alt="Banner bg" className={`${classes.BannerBg}`} />
                <div className={`${classes.BannerOverlay}`}/>
                <div className="container">
                    <div className={`${classes.Content}`}>
                        <h1 className={`${classes.Title}`}>
                            Increase Profit And Customer
                            Satisfaction by Using Your Data
                            As They Are Intended To Be Used.
                        </h1>
                        <Link to={`/#pricing`}>
                            <Button variant="primary" className="text-white">See My Product Line!</Button>
                        </Link>

                        <div className={`${classes.Testimonial} p-4 text-white`}>
                            <div className="position-relative">
                                <div className={`d-flex justify-content-between`}>
                                    <div>
                                        <img src={starWhite} alt={`star`} className={`${classes.StarIcon}`} />
                                        <img src={starWhite} alt={`star`} className={`${classes.StarIcon}`} />
                                        <img src={starWhite} alt={`star`} className={`${classes.StarIcon}`} />
                                        <img src={starWhite} alt={`star`} className={`${classes.StarIcon}`} />
                                        <img src={starWhite} alt={`star`} className={`${classes.StarIcon}`} />
                                    </div>
                                    <div className={`me-n2`}>
                                        <img src={singleQuote} alt={`single quote`} className={`${classes.QuoteIcon}`} />
                                        <img src={singleQuote} alt={`single quote`} className={`${classes.QuoteIcon}`} />
                                    </div>
                                </div>
                                <p className={`${classes.Feedback} fw-semibold mt-4 mb-3`}>I was happy to have Andreas as my technological
                                    advisor.</p>
                                <small>Paul Hofmann - BASF, VP R&D @SAP, CTO @Space-Time Insight
                                    and CTO @Saffron Technology</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${classes.CompaniesSupported}`}>
                <div className="container">
                    <div className={`${classes.Content}`}>
                        <h4 className={`${classes.Title} text-center`}>Companies I Already Supported</h4>
                        <div className={`d-flex flex-wrap align-items-center justify-content-between`}>
                            <img src={solaLogo} alt={`Sola`} className={`${classes.Logo}`} />
                            <img src={emcoLogo} alt={`Emco`} className={`${classes.Logo}`} />
                            <img src={kunzLogo} alt={`Kunz`} className={`${classes.Logo}`} />
                            <img src={haberkornLogo} alt={`Haberkorn`} className={`${classes.Logo}`} />
                            <img src={ivoclarLogo} alt={`Ivoclar Vivadent`} className={`${classes.Logo}`} />
                            <img src={senseforceLogo} alt={`Senseforce`} className={`${classes.Logo}`} />
                            <img src={conductixLogo} alt={`Conductix Wampfler`} className={`${classes.Logo}`} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroBanner;