import * as React from "react";
import Button from 'react-bootstrap/Button';
import MainLayout from "../layouts/mainLayout";
import starWhite from '../assets/icons/star-white.svg';
import singleQuote from '../assets/icons/single-quote.svg';
import * as classes from './index.module.scss';

const IndexPage = () => {
    return (
        <MainLayout>
            <title>Home Page</title>

            <section className={`${classes.Banner} text-white`}>
                <div className={`${classes.BannerOverlay}`}/>
                <div className="container">
                    <div className={`${classes.Content}`}>
                        <h1 className={`${classes.Title} mb-0`}>
                            Increase Profit And Customer
                            Satisfaction by Using Your Data
                            As They Are Intended To Be Used.
                        </h1>
                        <Button variant="primary" className="text-white my-5">See My Product Line!</Button>

                        <div className={`${classes.Testimonial} p-4 mt-2 text-white`}>
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
        </MainLayout>
    )
}

export default IndexPage
