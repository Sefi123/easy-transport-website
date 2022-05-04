import React from "react";
import { useState,} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  errorNotification,
  warningNotification,
} from "../components/notification/notification";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Handling the Name change
  const handleName = (e) => {
    setName(e.target.value);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  // Handling the Subject change
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };

  // Handling the Message change
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section text-muted">Easy Transport</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10 justify-content-center">
            <div className="wrap d-md-flex">
              <div className="text-wrap p-5 p-lg-5 text-center d-flex align-items-center order-md-last">
                <div className="text w-100">
                  <h2>Contact Us</h2>
                  <div className="d-flex justify-content-center">
                    <div>
                    <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div className="h5 ms-1">Address</div>
                  </div>
                  <p className="d-flex justify-content-center">Comsats Institute of Information Technology Lahore</p>
                  <div className="d-flex justify-content-center">
                    <div>
                    <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div className="h5 ms-2">General Support</div>
                  </div>
                  <p className="d-flex justify-content-center">easytransport@company.com</p>
                  <div className="d-flex justify-content-center">
                    <div>
                    <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div className="h5 ms-2">Let's Talk</div>
                  </div>
                  <p className="d-flex justify-content-center">+923092016575</p>
                </div>
              </div>
              <div className="login-wrap p-4 p-lg-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Get in Touch</h3>
                  </div>
                  
                </div>
                <form action="#" className="signin-form">
                  <div className="form-group mb-3">
                    <label className="label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      onChange={handleName}
                      value={name}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      onChange={handleEmail}
                      value={email}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      onChange={handleSubject}
                      value={subject}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label">Message</label>
                    <textarea
                      type="text"
                      rows="5"
                      maxLength="500"
                      className="form-control"
                      id="form-message"
                      placeholder="Message"
                      onChange={handleMessage}
                      value={message}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="signin-btn"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
