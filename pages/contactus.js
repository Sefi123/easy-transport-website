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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>
                    <div className="h5">Address</div>
                  </div>
                  <p className="d-flex justify-content-center">Comsats Institute of Information Technology Lahore</p>
                  <div className="d-flex justify-content-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-envelope-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                      </svg>
                    </div>
                    <div className="h5">General Support</div>
                  </div>
                  <p className="d-flex justify-content-center">easytransport@company.com</p>
                  <div className="d-flex justify-content-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-telephone-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                      </svg>
                    </div>
                    <div className="h5">Let's Talk</div>
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
