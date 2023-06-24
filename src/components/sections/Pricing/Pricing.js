import React from 'react';
import * as classes from './Pricing.module.scss';
import Button from "react-bootstrap/Button";

const Pricing = () => {
    return (
        <section className={`${classes.Pricing}`} id="pricing">
            <div className={`container`}>
                <div className={`${classes.Content}`}>
                    <div className={`${classes.TitleWrapper} text-center`}>
                        <h2 className={`${classes.Title} fw-semibold`}>Predictable Pricing With Reliable Output</h2>
                        <p className={`${classes.Sub}`}>Are you afraid of data integration or data pipeline setup
                            fees? I’ve got you covered - fixed fees,
                            fixed outcomes. Do you need data analytics services?
                            Request as much as you want - for a fixed
                            weekly rate. If you are not satisfied with my work - cancel anytime.</p>
                    </div>

                    <div className={`row`}>
                        <div className={`col-lg-4`}>
                            <div className={`${classes.Plan}`}>
                                <h4 className={`${classes.Name} fw-semibold`}>Data Integration</h4>
                                <p className={`${classes.Desc}`}>Connecting two systems with each other
                                    or an additional data source with your data
                                    warehouse</p>
                                <p className={`${classes.Price} fw-semibold`}>
                                    3.850
                                    <span className={`${classes.Currency}`}>€</span>
                                </p>
                                <p className={`${classes.Desc}`}>
                                    billed once, at the beginning of the project
                                </p>

                                <Button variant={`primary`} className={`${classes.SelectBtn}`}>
                                    Select This Package
                                </Button>

                                <div className={`${classes.CheckList}`}>
                                    <div className={`${classes.Item}`}>Connect Two Systems</div>
                                    <div className={`${classes.Item}`}>Both system exchange data</div>
                                    <div className={`${classes.Item}`}>Performance test</div>
                                    <div className={`${classes.Item}`}>Security report</div>
                                </div>
                            </div>
                        </div>

                        <div className={`col-lg-4`}>
                            <div className={`${classes.Plan}`}>
                                <h4 className={`${classes.Name} fw-semibold`}>
                                    Data Analytics <span className={`text-primary`}>Pro</span>
                                </h4>
                                <p className={`${classes.Desc}`}>Any data analytics work, unlimited
                                    (yes unlimited!) requests, one at a time.
                                    Cancel if you are not satisfied! *)</p>
                                <p className={`${classes.Price} fw-semibold`}>
                                    850
                                    <span className={`${classes.Currency}`}>€</span>
                                </p>
                                <p className={`${classes.Desc}`}>
                                    per week, billed monthly, cancel anytime
                                </p>

                                <Button variant={`primary`} className={`${classes.SelectBtn}`}>
                                    Select This Package
                                </Button>

                                <div className={`${classes.CheckList}`}>
                                    <div className={`${classes.Item}`}>Machine Learning</div>
                                    <div className={`${classes.Item}`}>Product analytics</div>
                                    <div className={`${classes.Item}`}>Marketing analytics</div>
                                    <div className={`${classes.Item}`}>Product analytics</div>
                                    <div className={`${classes.Item}`}>Dashboarding/Reporting</div>
                                    <div className={`${classes.Item}`}>Recommendations</div>
                                    <div className={`${classes.Item}`}>Typical turnaround: 1 week **)</div>
                                </div>
                            </div>
                        </div>

                        <div className={`col-lg-4`}>
                            <div className={`${classes.Plan} mb-0`}>
                                <h4 className={`${classes.Name} fw-semibold`}>
                                    Data Analytics <span className={`${classes.Blue}`}>DevOps</span>
                                </h4>
                                <p className={`${classes.Desc}`}>You not only need unlimited data analytics
                                    requests, but also someone to maintain your
                                    data infrastructure? See yourself served!</p>
                                <p className={`${classes.Price} fw-semibold`}>
                                    1.750
                                    <span className={`${classes.Currency}`}>€</span>
                                </p>
                                <p className={`${classes.Desc}`}>
                                    per week, billed monthly, cancel anytime
                                </p>

                                <Button variant={`primary`} className={`${classes.SelectBtn}`}>
                                    Select This Package
                                </Button>

                                <div className={`${classes.CheckList}`}>
                                    <div className={`${classes.Item}`}>Everything in Data analytics Pro</div>
                                    <div className={`${classes.Item}`}>Data pipeline server maintenance</div>
                                    <div className={`${classes.Item}`}>Security updates</div>
                                    <div className={`${classes.Item}`}>Data integration maintenance</div>
                                    <div className={`${classes.Item}`}>Data Model monitoring</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;