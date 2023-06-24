import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import * as classes from './FAQ.module.scss';

const Faq = () => {
    return (
        <section className={`${classes.FAQ}`}>
            <div className={`container ${classes.Container}`}>
                <div className={`${classes.Content}`}>
                    <h3 className={`${classes.Title}`}>Frequetntly Asekd Questions</h3>

                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0" className={`${classes.QnA}`}>
                            <Accordion.Header className={`${classes.Question}`}>
                                How does the project discovery process work?
                            </Accordion.Header>
                            <Accordion.Body className={`${classes.Answer}`}>
                                For me it is of major importance to only do projects which I know I can tackle. This not
                                only helps me but also limits your money and time
                                investments. To have a good feeling about whether this is the case, I’ll send you a proven
                                quetionaire about what your project looks like,
                                what data sources you have and how your data look like. In most cases I’ll offer you a
                                remote call to discuss the project in more depth.
                                If the circumstances allow, I’ll also have a look at the data and analytics environment
                                before charging you any money.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1" className={`${classes.QnA}`}>
                            <Accordion.Header className={`${classes.Question}`}>
                                Does unlimited requests really mean unlimited?
                            </Accordion.Header>
                            <Accordion.Body className={`${classes.Answer}`}>
                                For me it is of major importance to only do projects which I know I can tackle. This not
                                only helps me but also limits your money and time
                                investments. To have a good feeling about whether this is the case, I’ll send you a proven
                                quetionaire about what your project looks like,
                                what data sources you have and how your data look like. In most cases I’ll offer you a
                                remote call to discuss the project in more depth.
                                If the circumstances allow, I’ll also have a look at the data and analytics environment
                                before charging you any money.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" className={`${classes.QnA}`}>
                            <Accordion.Header className={`${classes.Question}`}>
                                How does the Data Analytics packages work?
                            </Accordion.Header>
                            <Accordion.Body className={`${classes.Answer}`}>
                                For me it is of major importance to only do projects which I know I can tackle. This not
                                only helps me but also limits your money and time
                                investments. To have a good feeling about whether this is the case, I’ll send you a proven
                                quetionaire about what your project looks like,
                                what data sources you have and how your data look like. In most cases I’ll offer you a
                                remote call to discuss the project in more depth.
                                If the circumstances allow, I’ll also have a look at the data and analytics environment
                                before charging you any money.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3" className={`${classes.QnA}`}>
                            <Accordion.Header className={`${classes.Question}`}>
                                Do packages automatically renew?
                            </Accordion.Header>
                            <Accordion.Body className={`${classes.Answer}`}>
                                For me it is of major importance to only do projects which I know I can tackle. This not
                                only helps me but also limits your money and time
                                investments. To have a good feeling about whether this is the case, I’ll send you a proven
                                quetionaire about what your project looks like,
                                what data sources you have and how your data look like. In most cases I’ll offer you a
                                remote call to discuss the project in more depth.
                                If the circumstances allow, I’ll also have a look at the data and analytics environment
                                before charging you any money.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4" className={`${classes.QnA}`}>
                            <Accordion.Header className={`${classes.Question}`}>
                                How does the process start after I contact you?
                            </Accordion.Header>
                            <Accordion.Body className={`${classes.Answer}`}>
                                For me it is of major importance to only do projects which I know I can tackle. This not
                                only helps me but also limits your money and time
                                investments. To have a good feeling about whether this is the case, I’ll send you a proven
                                quetionaire about what your project looks like,
                                what data sources you have and how your data look like. In most cases I’ll offer you a
                                remote call to discuss the project in more depth.
                                If the circumstances allow, I’ll also have a look at the data and analytics environment
                                before charging you any money.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5" className={`${classes.QnA}`}>
                            <Accordion.Header className={`${classes.Question}`}>
                                What if I can’t decide on which package I need?
                            </Accordion.Header>
                            <Accordion.Body className={`${classes.Answer}`}>
                                For me it is of major importance to only do projects which I know I can tackle. This not
                                only helps me but also limits your money and time
                                investments. To have a good feeling about whether this is the case, I’ll send you a proven
                                quetionaire about what your project looks like,
                                what data sources you have and how your data look like. In most cases I’ll offer you a
                                remote call to discuss the project in more depth.
                                If the circumstances allow, I’ll also have a look at the data and analytics environment
                                before charging you any money.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="6" className={`${classes.QnA}`}>
                            <Accordion.Header className={`${classes.Question}`}>
                                What if  I’m not satisfied with your work?
                            </Accordion.Header>
                            <Accordion.Body className={`${classes.Answer}`}>
                                For me it is of major importance to only do projects which I know I can tackle. This not
                                only helps me but also limits your money and time
                                investments. To have a good feeling about whether this is the case, I’ll send you a proven
                                quetionaire about what your project looks like,
                                what data sources you have and how your data look like. In most cases I’ll offer you a
                                remote call to discuss the project in more depth.
                                If the circumstances allow, I’ll also have a look at the data and analytics environment
                                before charging you any money.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="7" className={`${classes.QnA}`}>
                            <Accordion.Header className={`${classes.Question}`}>
                                Do you offer discounts?
                            </Accordion.Header>
                            <Accordion.Body className={`${classes.Answer}`}>
                                For me it is of major importance to only do projects which I know I can tackle. This not
                                only helps me but also limits your money and time
                                investments. To have a good feeling about whether this is the case, I’ll send you a proven
                                quetionaire about what your project looks like,
                                what data sources you have and how your data look like. In most cases I’ll offer you a
                                remote call to discuss the project in more depth.
                                If the circumstances allow, I’ll also have a look at the data and analytics environment
                                before charging you any money.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Faq;