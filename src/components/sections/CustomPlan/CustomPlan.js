import React from 'react';
import {Link} from 'gatsby';
import * as classes from './CustomPlan.module.scss';
import Button from "react-bootstrap/Button";

const CustomPlan = () => {
    return (
        <section className={`${classes.CustomPlan}`}>
            <div className={`container ${classes.Container}`}>
                <div className={`${classes.Content}`}>
                    <div className={`${classes.Tile} text-white d-flex flex-wrap align-items-center justify-content-between`}>
                        <div className={`${classes.Wrapper}`}>
                            <p className={`${classes.NeedMore} text-primary`}>Need Something More?</p>
                            <h2 className={`${classes.Title} fw-semibold`}>Custom Plan</h2>
                            <p className={`${classes.Sub}`}>Mulitple requests at the same time? Complex data integrations?
                                Things which don’t fit the above? <strong>No problem </strong>, <a href="#">let’s talk.</a>
                            </p>
                        </div>
                        <div>
                            <Link to={`/#contact-me-1`}>
                                <Button className={`${classes.CTA}`}>
                                    Talk With Me
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className={`${classes.Desc}`}>
                        <p>To ensure that both you and I are satisfied in the process, each project involves a carefully
                            executed, free project discovery phase, where
                            your demands are discussed. If I find myself not capable of delivering the results you need, I
                            guarantee you to not waste your time and
                            money. I’m so committed to this process, to offer you a 7 day money back and cancellation
                            guarantee - If I do not satisfy what you expect
                            to see within 7 business days - you can cancel the contract and are not paying any money!</p>

                        <p>*) unlimited requests, one at a time: You’ll get access to your personal Kanban-Board where you
                            can enter any amount of request you
                            want. Really. Any amount, no limit. I’ll guide you through the necessary descriptions so that I
                            know what to work on. I work on one request
                            at a time and for most tasks I will provide you the results within a week. If you are not
                            satisfied with my deliveries - cancel anytime.
                            Already started weeks are not to be paid! (Data Integrations and Infrastructure setup are not
                            part of this package. Please use one of the other
                            two instead)</p>

                        <p>**) Turnaround times may vary, depending on the complexity of your task. If it takes longer, I’ll
                            inform you beforehand - allowing
                            you to cancel if it takes too long. For larger projects, we’ll divide it into sub-tasks
                            together.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomPlan;