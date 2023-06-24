import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as classes from './ContactMe1.module.scss';

const ContactMe1 = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Submitted!");
    };

    return (
        <section className={`${classes.ContactMe}`} id="contact-me-1">
            <div className={`container ${classes.Container}`}>
                <div className={`${classes.Content}`}>
                    <div className={`row align-items-center`}>
                        <div className={`col-lg-6`}>
                            <div className={`${classes.Text} text-white`}>
                                <h2 className={`${classes.Title}`}>Contact Me</h2>
                                <p className={`${classes.Sub}`}>
                                    Select the package you are interested in.
                                    I’ll send you the details and my discovery
                                    process.
                                    <strong>No worries, you are still not obliged to pay
                                        anything!</strong>
                                </p>
                            </div>
                        </div>
                        <div className={`col-lg-6`}>
                            <div className={`${classes.FormContainer}`}>
                                <Form onSubmit={submitHandler}>
                                    <Form.Group className={`${classes.InputRow}`}>
                                        <Form.Label className={`${classes.Label}`}>Email address*</Form.Label>
                                        <Form.Control required type="email" placeholder="jhon.smith@email.com" className={`${classes.Input}`} />
                                    </Form.Group>

                                    <Form.Group className={`${classes.InputRow}`}>
                                        <Form.Label className={`${classes.Label}`}>Select Package</Form.Label>
                                        <Form.Select className={`${classes.Input} ${classes.SelectBox}`}>
                                            <option value="">Open this select menu</option>
                                            <option value="">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className={`${classes.InputRow} mb-0`}>
                                        <Form.Label className={`${classes.Label}`}>Short project description</Form.Label>
                                        <Form.Control as="textarea"
                                                      placeholder=".... shortly describe your project idea - I’ll contact you soon."
                                                      className={`${classes.Input} ${classes.TextArea}`} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className={`${classes.SubmitBtn}`}>
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe1;