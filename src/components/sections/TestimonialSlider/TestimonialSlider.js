import React, {useEffect, useState} from 'react';
import avatar from '../../../assets/images/avatar.png';
import leftArrowIcon from '../../../assets/icons/arrow-left.svg';
import rightArrowIcon from '../../../assets/icons/arrow-right.svg';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import TestimonialCard from "../../common/TestimonialCard/TestimonialCard";
import * as classes from './TestimonialSlider.module.scss';

const mobileWidth = 991;

const TestimonialSlider = () => {
    const [mobileView, setMobileView] = useState(false);
    const [inst, setInst] = useState({});

    useEffect(() => {
        setMobileView(window.innerWidth <= mobileWidth);
    }, []);

    return (
        <section className={`${classes.Testimonial}`} id="testimonials">
            <div className={`${classes.BgWrapper}`}/>
            <div className={`container text-white`}>
                <div className={`${classes.Content}`}>
                    <div className={`text-center`}>
                        <h2 className={`${classes.Title}`}>What Others Say About Me</h2>
                        <p className={`${classes.Sub}`}>Don’t Trust My Word - Let Others Speak For Me</p>
                    </div>

                    <div className={`${classes.SliderWrapper}`}>
                        <div className={`${classes.SliderControlBtnWrapper} d-flex justify-content-between`}>
                            <button onClick={() => inst.slidePrev()} className={`${classes.SliderControlBtn}`}>
                                <img src={leftArrowIcon} alt={`prev`}/>
                            </button>
                            <button onClick={() => inst.slideNext()} className={`${classes.SliderControlBtn}`}>
                                <img src={rightArrowIcon} alt={`next`}/>
                            </button>
                        </div>

                        <Swiper
                            loop={true}
                            rewind={true}
                            spaceBetween={30}
                            slidesPerView={mobileView ? 1 : 2}
                            className={`${classes.Slider}`}
                            pagination={{
                                el: `.swiper-pagination`,
                                type: 'bullets',
                                clickable: true,
                                // dynamicBullets: true,
                                // dynamicMainBullets: 1,
                                bulletClass: `swiper-pagination-bullet ${classes.SliderPaginationDot}`,
                                bulletActiveClass: `swiper-pagination-bullet-active ${classes.SliderPaginationDotActive}`

                            }}
                            modules={[Pagination]}
                            onSwiper={(swiper) => setInst(swiper)}
                        >
                            <SwiperSlide>
                                <TestimonialCard photo={avatar}
                                                 starCount={5}
                                                 name={`Dr. Paul Hofmann`}
                                                 pos={`BASF, VP R&D @SAP, CTO @Space-Time Insight  CTO @Saffron Technology`}
                                                 feedback={`Andreas ist mir als herausragender Technologe 
                                                äußerst vertrauenswürdiger Partner bekannt geworden. Mit seiner effizienten
                                                und zielgerichteten Arbeitsweise sowie seiner hervorragenden
                                                Kommunikationsfähigkeit ist er maßgeblich an der Weiterentwicklung und
                                                Professionalisierung unserer IoT Plattform sowie dem Know-How Aufbau in
                                                unseren Teams beteiligt. Ich kann eine Zusammenarbeit mit Andreas
                                                wärmstens und uneingeschränkt empfehlen.`}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <TestimonialCard photo={avatar}
                                                 starCount={5}
                                                 name={`Dr. Paul Hofmann`}
                                                 pos={`BASF, VP R&D @SAP, CTO @Space-Time Insight  CTO @Saffron Technology`}
                                                 feedback={`Andreas ist mir als herausragender Technologe 
                                                äußerst vertrauenswürdiger Partner bekannt geworden. Mit seiner effizienten
                                                und zielgerichteten Arbeitsweise sowie seiner hervorragenden
                                                Kommunikationsfähigkeit ist er maßgeblich an der Weiterentwicklung und
                                                Professionalisierung unserer IoT Plattform sowie dem Know-How Aufbau in
                                                unseren Teams beteiligt. Ich kann eine Zusammenarbeit mit Andreas
                                                wärmstens und uneingeschränkt empfehlen.`}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <TestimonialCard photo={avatar}
                                                 starCount={5}
                                                 name={`Dr. Paul Hofmann`}
                                                 pos={`BASF, VP R&D @SAP, CTO @Space-Time Insight  CTO @Saffron Technology`}
                                                 feedback={`Andreas ist mir als herausragender Technologe 
                                                äußerst vertrauenswürdiger Partner bekannt geworden. Mit seiner effizienten
                                                und zielgerichteten Arbeitsweise sowie seiner hervorragenden
                                                Kommunikationsfähigkeit ist er maßgeblich an der Weiterentwicklung und
                                                Professionalisierung unserer IoT Plattform sowie dem Know-How Aufbau in
                                                unseren Teams beteiligt. Ich kann eine Zusammenarbeit mit Andreas
                                                wärmstens und uneingeschränkt empfehlen.`}/>
                            </SwiperSlide>
                        </Swiper>

                        <div className={`swiper-pagination ${classes.SliderPagination}`} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;