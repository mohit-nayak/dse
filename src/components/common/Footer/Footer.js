import React from 'react';
import logo from '../../../assets/images/logo.svg';
import locationIcon from '../../../assets/icons/location.svg';
import phoneIcon from '../../../assets/icons/phone.svg';
import facebookIcon from '../../../assets/icons/facebook.svg';
import linkedInIcon from '../../../assets/icons/linked-in.svg';
import instagramIcon from '../../../assets/icons/instagram.svg';
import * as classes from './Footer.module.scss';

const Footer = () => {
    return (
        <section className={`${classes.Footer}`}>
            <div className={`${classes.Content} text-white`}>
                <div className={`${classes.Main}`}>
                    <div className={`container`}>
                        <div className={`row`}>
                            <div className={`col-lg-4`}>
                                <div>
                                    <img src={logo} alt={`Logo`} className={`${classes.Logo}`} />
                                    <p className={`${classes.Sub}`}>Inter haec Orfitus praefecti potestate regebat
                                        urbem aeternam ultra modum delatae dignit
                                        atis sese efferens insolent</p>
                                </div>
                            </div>
                            <div className={`col-lg-8`}>
                                <div className={`row`}>
                                    <div className={`col-md-6 col-lg-4`}>
                                        <div className={`${classes.LinksWrapper}`}>
                                            <p className={`${classes.Title}`}>
                                                <img src={locationIcon} alt={`location`} className={`${classes.Icon}`} /> Location
                                            </p>
                                            <p className={`${classes.Item}`}>
                                                Andreas Nigg <br/>
                                                Litscherweg 10/21 6800 <br/>
                                                Feldkirch Austria
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`col-md-6 col-lg-4`}>
                                        <div className={`${classes.LinksWrapper}`}>
                                            <p className={`${classes.Title}`}>
                                                <img src={phoneIcon} alt={`phone`} className={`${classes.Icon}`} /> Phone
                                            </p>
                                            <p className={`${classes.Item}`}>
                                                <a href="tel:+1-123-456-7890">
                                                    +1-123-456-7890
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`col-md-6 col-lg-4`}>
                                        <div className={`${classes.LinksWrapper}`}>
                                            <p className={`${classes.Title}`}>
                                                <img src={phoneIcon} alt={`phone`} className={`${classes.Icon}`} /> Email
                                            </p>
                                            <p className={`${classes.Item} ${classes.Email}`}>
                                                <a href="mailto:andreas.nigg@devopsandmore.com">andreas.nigg@devopsandmore.com</a>
                                            </p>
                                            <div className={`${classes.Item}`}>
                                                <div className={`${classes.SocialLinksWrapper}`}>
                                                    <a href="https://www.facebook.com/" target="_blank" className={`${classes.SocialLink}`}>
                                                        <img src={facebookIcon} alt={`Facebook`} />
                                                    </a>
                                                    <a href="https://linkedin.com/" target="_blank" className={`${classes.SocialLink}`}>
                                                        <img src={linkedInIcon} alt={`Linked In`} />
                                                    </a>
                                                    <a href="https://www.instagram.com/" target="_blank" className={`${classes.SocialLink}`}>
                                                        <img src={instagramIcon} alt={`Instagram`} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${classes.CopyrightWrapper}`}>
                    <div className={`container`}>
                        <p>© 2022 Data Science engineer - All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;