import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as classes from './ContactMe2.module.scss';

const ContactMe2 = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Submitted!");
    };

    return (
        <section className={`${classes.ContactMe}`}>
            <div className={`container ${classes.Container}`}>
                <div className={`${classes.Content}`}>
                    <div className={`${classes.FormContainer}`}>
                        <Form onSubmit={submitHandler}>
                            <Form.Group className={`${classes.InputRow}`}>
                                <Form.Label className={`${classes.Label}`}>Email address*</Form.Label>
                                <Form.Control required type="email" placeholder="jhon.smith@email.com" className={`${classes.Input}`} />
                            </Form.Group>

                            {/*<Form.Group className={`${classes.InputRow}`}>
                                <Form.Label className={`${classes.Label}`}>Select Package</Form.Label>
                                <Form.Select className={`${classes.Input} ${classes.SelectBox}`} required>
                                    <option value="">Open this select menu</option>
                                    <option value="">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>*/}

                            <Form.Group className={`${classes.InputRow} mb-0`}>
                                <Form.Label className={`${classes.Label}`}>Message</Form.Label>
                                <Form.Control as="textarea"
                                              placeholder="Your message here..."
                                              className={`${classes.Input} ${classes.TextArea}`} />
                            </Form.Group>
                            <Button variant="primary" type="submit" className={`${classes.SubmitBtn}`}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe2;