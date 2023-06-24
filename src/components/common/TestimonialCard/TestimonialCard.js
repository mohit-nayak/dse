import React from 'react';
import starLightBlue from '../../../assets/icons/star-light-blue.svg';
import singleQuote from '../../../assets/icons/single-quote-light-blue.svg';
import * as classes from './TestimonialCard.module.scss';

const TestimonialCard = ({ photo, starCount, name, pos, feedback }) => {
    return (
        <div className={`${classes.TestimonialCard}`}>
            <div className={`d-flex flex-wrap align-items-center mb-3`}>
                <img src={photo} alt={`client photo`} className={`${classes.ClientPhoto}`} />
                <div className={`${classes.StarsWrapper}`}>
                    { starCount && [...Array(starCount)].map((e, i) => (
                        <img src={starLightBlue} alt={'star'} key={i} />
                    )) }
                </div>
                <div className={`${classes.QuoteIconWrapper} ms-auto `}>
                    <img src={singleQuote} alt={`quote`} />
                    <img src={singleQuote} alt={`quote`} />
                </div>
            </div>

            <p className={`${classes.Name} fw-semibold`}>{ name }</p>
            <p className={`${classes.Pos}`}>{ pos }</p>
            <p className={`${classes.Feedback}`}>{ feedback }</p>
        </div>
    );
};

export default TestimonialCard;