import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardTitle, CardBody } from "reactstrap";
import styles from "../styles/Drivers.module.css";
import { loginRequest } from "../redux/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import driver1 from "../assets/images/drivers/d2.jpg";
import driver2 from "../assets/images/drivers/d3.jpg";
import driver3 from "../assets/images/drivers/d4.jpg";
import driver4 from "../assets/images/drivers/d1.jpg";
const Drivers = () => {
  return (
    <section className="ftco-section">
      <div className="container-fluid">
        <CardTitle tag="h6" className="p-2 mb-4 container text-center">
          <div className="row justify-content-center">
            <div className="col-md-3 form-group mb-3">
              <label className="label text-danger mb-1">Select City</label>
              <select
                id="selectCity"
                className={`searchCard form-control  `}
                onChange={(e) => handleData("city", e.target.value)}
              >
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Multan">Multan</option>
                <option value="Gujranwala">Gujranwala</option>
                <option value="Quetta">Quetta</option>
                <option value="Sarghoda">Sarghoda</option>
              </select>
            </div>
            <div className="col-md-3 form-group mb-3">
              <label className="label text-danger mb-1">
                Select Driver Type
              </label>
              <select
                id="driverType"
                className={`searchCard form-control `}
                onChange={(e) => handleData("driverType", e.target.value)}
              >
                <option value="Car">Car</option>
                <option value="Bus">Bus</option>
                <option value="Van">Van</option>
                <option value="Small Truck">Small Truck</option>
                <option value="Heavy Truck">Heavy Truck</option>
              </select>
            </div>
            <div className="col-md-3 form-group searchButton">
              <button type="submit" className="signin-btn">
                Search
              </button>
            </div>
          </div>
        </CardTitle>

        <div className="row">
          <Link href={"/driver-details"} passHref>
            <div className="col-md-6 col-lg-3">
              <div className={styles.card}>
                <Image
                  src={driver1}
                  alt="hero banner"
                  className={styles.driverimg}
                  width={500}
                  height={500}
                  layout="responsive"
                />

                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        City
                      </a>
                    </p>
                    <p className="small text-danger">Lahore</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Driver Type
                      </a>
                    </p>
                    <p className="small text-danger">Car</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Driving Experience
                      </a>
                    </p>
                    <p className="small text-danger">10 Years</p>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <h6 className="mb-0">Arslan Ahmad</h6>
                    <h6 className="text-dark mb-0">PKR 1500</h6>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="col-md-6 col-lg-3">
            <div className={styles.card}>
              <Image
                src={driver2}
                alt="hero banner"
                className={styles.driverimg}
                width={500}
                height={500}
                layout="responsive"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      City
                    </a>
                  </p>
                  <p className="small text-danger">Lahore</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Driver Type
                    </a>
                  </p>
                  <p className="small text-danger">Car</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Driving Experience
                    </a>
                  </p>
                  <p className="small text-danger">08 Years</p>
                </div>
                <div className="d-flex justify-content-between mb-1">
                  <h6 className="mb-0">Safeer Ahmad</h6>
                  <h6 className="text-dark mb-0">PKR 1000</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className={styles.card}>
              <Image
                src={driver3}
                alt="hero banner"
                className={styles.driverimg}
                width={500}
                height={500}
                layout="responsive"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      City
                    </a>
                  </p>
                  <p className="small text-danger">Karachi</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Driver Type
                    </a>
                  </p>
                  <p className="small text-danger">Car</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Driving Experience
                    </a>
                  </p>
                  <p className="small text-danger">12 Years</p>
                </div>
                <div className="d-flex justify-content-between mb-1">
                  <h6 className="mb-0">Shahzaib</h6>
                  <h6 className="text-dark mb-0">PKR 2000</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className={styles.card}>
              <Image
                src={driver4}
                alt="hero banner"
                className={styles.driverimg}
                width={500}
                height={500}
                layout="responsive"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      City
                    </a>
                  </p>
                  <p className="small text-danger">Islamabad</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Driver Type
                    </a>
                  </p>
                  <p className="small text-danger">Car</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="small">
                    <a href="#!" className="text-muted">
                      Driving Experience
                    </a>
                  </p>
                  <p className="small text-danger">05 Years</p>
                </div>
                <div className="d-flex justify-content-between mb-1">
                  <h6 className="mb-0">Talha Ahmad</h6>
                  <h6 className="text-dark mb-0">PKR 2500</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Drivers;
