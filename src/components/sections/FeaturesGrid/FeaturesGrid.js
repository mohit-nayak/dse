import React from 'react';
import { Link } from 'gatsby';
import callIcon from '../../../assets/icons/call.svg';
import chatIcon from '../../../assets/icons/chat.svg';
import filterIcon from '../../../assets/icons/filter.svg';
import noteIcon from '../../../assets/icons/note.svg';
import userFlagIcon from '../../../assets/icons/user-flag.svg';
import messageIcon from '../../../assets/icons/message.svg';
import * as classes from './FeaturesGrid.module.scss';
import Button from "react-bootstrap/Button";

const FeaturesGrid = () => {
    return (
        <section className={`${classes.Features}`} id="services">
            <div className="container">
                <div className={`${classes.Content}`}>
                    <div className={`${classes.TitleWrapper}`}>
                        <h3 className={`${classes.Title} text-center`}>Save Costs, <span className={`fw-semibold`}>Increase Efficiency of Your Products</span> And
                            Processes, predict And Prevent Product And Business Disruptions</h3>
                        <p className={`${classes.Sub} text-gray text-center`}>My Data Analytics and Data Science Services are tailored to create immediate results - no year-long setup phase, no expensive integration
                            projects. Experience shows, that already a very small investment can lead to huge insights.</p>
                    </div>

                    <div className={`${classes.FeatureGrid} row`}>
                        <div className={`${classes.GridItem} col-md-6 col-lg-4`}>
                            <div className={`${classes.FeatureTile} bg-white`}>
                                <div className={`${classes.Icon}`}>
                                    <img src={callIcon} alt={`call`} />
                                </div>
                                <h6 className={`${classes.Title} fw-semibold`}>Data Integration</h6>
                                <p className={`${classes.Desc}`}>You have data in system A but need it in
                                    system B? With modern messaging and
                                    integration systems, I’m certain to help you
                                    in fast and efficient manners.</p>
                            </div>
                        </div>

                        <div className={`${classes.GridItem} col-md-6 col-lg-4`}>
                            <div className={`${classes.FeatureTile} bg-white`}>
                                <div className={`${classes.Icon}`}>
                                    <img src={chatIcon} alt={`chat`} />
                                </div>
                                <h6 className={`${classes.Title} fw-semibold`}>Product Data Analytics</h6>
                                <p className={`${classes.Desc}`}>IoT enables us to see how our products perform
                                    in the field. Using proven methods, we can identify
                                    inefficiencies and problems in your product lineup.</p>
                            </div>
                        </div>

                        <div className={`${classes.GridItem} col-md-6 col-lg-4`}>
                            <div className={`${classes.FeatureTile} bg-white`}>
                                <div className={`${classes.Icon}`}>
                                    <img src={filterIcon} alt={`filter`} />
                                </div>
                                <h6 className={`${classes.Title} fw-semibold`}>Machine Learning</h6>
                                <p className={`${classes.Desc}`}>Using historical data to predict the future - not
                                    more and not less is possible with machine
                                    learning. I use scientific methods to automatically
                                    create insights and forecasts from your historical
                                    data.</p>
                            </div>
                        </div>

                        <div className={`${classes.GridItem} col-md-6 col-lg-4 mb-lg-0`}>
                            <div className={`${classes.FeatureTile} bg-white`}>
                                <div className={`${classes.Icon}`}>
                                    <img src={noteIcon} alt={`note`} />
                                </div>
                                <h6 className={`${classes.Title} fw-semibold`}>Data Integration</h6>
                                <p className={`${classes.Desc}`}>You have data in system A but need it in
                                    system B? With modern messaging and
                                    integration systems, I’m certain to help you
                                    in fast and efficient manners.</p>
                            </div>
                        </div>

                        <div className={`${classes.GridItem} col-md-6 col-lg-4 mb-md-0`}>
                            <div className={`${classes.FeatureTile} bg-white`}>
                                <div className={`${classes.Icon}`}>
                                    <img src={userFlagIcon} alt={`user with flag`} />
                                </div>
                                <h6 className={`${classes.Title} fw-semibold`}>Product Data Analytics</h6>
                                <p className={`${classes.Desc}`}>IoT enables us to see how our products perform
                                    in the field. Using proven methods, we can identify
                                    inefficiencies and problems in your product lineup.</p>
                            </div>
                        </div>

                        <div className={`${classes.GridItem} col-md-6 col-lg-4 mb-md-0`}>
                            <div className={`${classes.FeatureTile} bg-white`}>
                                <div className={`${classes.Icon}`}>
                                    <img src={messageIcon} alt={`message`} />
                                </div>
                                <h6 className={`${classes.Title} fw-semibold`}>Machine Learning</h6>
                                <p className={`${classes.Desc}`}>Using historical data to predict the future - not
                                    more and not less is possible with machine
                                    learning. I use scientific methods to automatically
                                    create insights and forecasts from your historical
                                    data.</p>
                            </div>
                        </div>
                    </div>

                    <Link to="/#pricing"><Button variant="primary" className={`${classes.SeePricingBtn} text-white`}>See My Pricing!</Button></Link>
                    <p className={`text-gray text-center mb-0`}>Besides these rather specific services, I’m happy to discover and discuss any general data
                        analytics or data science use-case.</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;