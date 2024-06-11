"use client"

import React, { useEffect } from 'react';

import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';

export default function ContactUI() {
    useEffect(() => {

    }, []);
    const [state, handleSubmit] = useForm("xeqywlzk");
    if (state.succeeded) {
        return (
            <>
                <div className='container row shadow w-50 h-30 m-5 mx-auto text-center'>
                    <p className='lead p-4 fw-medium'>Thanks! Your message has been sent. We'll get back to you soon!</p>
                    <Image
                        priority
                        unoptimized
                        className="img-fluid"
                        src="/imgs/logo.png"
                        alt="DataBreed Africa Logo"
                        width={100}
                        height={100}
                    />
                </div>
            </>
        )
    }
    return (
        <>
            <section id="contacts">
                <div className="container row shadow w-75 m-5 mx-auto">
                    <div className="email col-md-7 p-4">
                        <h1 className="display-5 fw-bold fs-3 mb-4">Get In Touch</h1>
                        <p className="lead fs-6">We are always on the lookout to work with new clients. Please get in touch
                            in one of the following ways.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div data-mdb-input-init className="form-outline mb-4">
                                <label className="form-label" htmlFor="name">Your name</label>
                                <input type="text" id="name" name='name' className="form-control" />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                            </div>
                            <div data-mdb-input-init className="form-outline mb-4">
                                <label className="form-label" htmlFor="email">Your email address</label>
                                <input type="email" name='email' id="email" className="form-control" />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div data-mdb-input-init className="form-outline mb-4">
                                <label className="form-label" htmlFor="message">Message</label>
                                <textarea className="form-control" name='message' id="message" rows="4"></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <button type="submit" disabled={state.submitting} className="btn btn-primary btn-block mb-4">Send message</button>
                        </form>
                    </div>
                    <div className="info col-md-5 p-4">
                        <h2 className="fw-bold fs-4 mb-4">Contact information</h2>
                        <div>
                            <p className="fs-5"><i className="bi bi-geo-alt-fill fs-4"></i>&nbsp;<span className="fw-bold">Address</span></p>
                            <p className="ms-2">China Centre, Ngong Rd. Nairobi, Kenya</p>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                                <p className="fs-5"><i className="bi bi-telephone-forward-fill fs-4"></i> &nbsp;<span className="fw-bold">Phone</span></p>
                                <p className="ms-2">+254792596600</p>
                            </div>
                            <div className="col-6">
                                <p className="fs-5"><i className="bi bi-envelope-fill fs-4"></i>&nbsp;<span className="fw-bold">Email</span></p>
                                <p className="ms-2">info@databreedafrica.com</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <p className="fs-5"><i className="bi bi-alarm-fill fs-4"></i>&nbsp;<span className="fw-bold">Opening Hours</span></p>
                                <p className="ms-4"><em>Mon - Fri</em> &nbsp;&nbsp;9am - 5pm </p>
                                <p className="ms-4"><em>Sat - Sun</em> &nbsp;&nbsp;9am - 2pm </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}