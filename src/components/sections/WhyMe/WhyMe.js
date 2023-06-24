import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import pic from '../../../assets/images/why-me.png';
import bornGlobalChampion from '../../../assets/images/born-global-champion.svg';
import kmuDesJahres from '../../../assets/images/kmu-des-jahres.svg';
import azureFundamentals from '../../../assets/images/azure-fundamentals.svg';
import * as classes from './WhyMe.module.scss';

const WhyMe = () => {
    return (
        <section className={`${classes.WhyMe}`}>
            <div className={`container`}>
                <div className={`${classes.Content}`}>
                    <div className={`${classes.Row}`}>
                        <div className={`${classes.ImgContainer}`}>
                            <div className={`${classes.Image}`}>
                                <StaticImage src="../../../assets/images/why-me.png" className={`${classes.ImgWrapper}`}
                                              imgStyle={{ objectFit: 'cover' }} alt={`pic`} />
                            </div>
                        </div>
                        <div className={`${classes.DescContainer}`}>
                            <h2 className={`${classes.Title}`}>Warum ich?</h2>
                            <p className={`${classes.Text}`}>
                                Ich bin Andreas Nigg, und lebe seit 2020 den Traum der Selbstständigkeit.
                                Als ehemaliger CTO von Senseforce GmbH - der führenden IoT Plattform für
                                mittelständische Maschinenbauer - durfte ich zahlreiche Höhen (und Tiefen ;-) )
                                erleben - am Wichtigsten jedoch - viele interessante und spannenden IT und IoT
                                Projekte kennenlernen.
                            </p>
                            <p className={`${classes.Text}`}>
                                Ich habe zeitnah erkannt, dass diese Erfahrungen nicht nur für mich, sondern
                                für viele Unternehmen sehr relevant sind - eben bei der Senkung von IT Kosten,
                                Effizienzsteigerung und generell der modernen und zukunftssicheren Umsetzung
                                von IT und Software.
                            </p>
                            <p className={`${classes.Text} mb-0`}>
                                Namhafte Unternehmen mit denen ich zusammenarbeiten darf und durfte sind:
                                Künz, Senseforce, Engie, Conductix Wampfler, EMCO, SOLA, Ivoclar Vivadent und
                                viele mehr.
                            </p>
                            <div className={`${classes.Achievements}`}>
                                <img src={bornGlobalChampion} alt={`Born Global Champion`} />
                                <img src={kmuDesJahres} alt={`KMU des Jahres`} />
                                <img src={azureFundamentals} alt={`Azure Fundamentals`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyMe;