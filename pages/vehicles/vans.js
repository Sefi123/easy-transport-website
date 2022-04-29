import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardTitle, CardBody } from "reactstrap";
import styles from "../../styles/Drivers.module.css";
import { loginRequest } from "../../redux/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import carimg from "../../assets/images/hiace.jpg";
const Vans = () => {
  return (
    <section className={styles.driversection}>
      <div className={styles.drivercontainer}>
        <CardTitle tag="h6" className="p-2 mb-5 container text-center">
          <div className="row justify-content-center">
            <div className="col-md-3 form-group mb-3">
              <label className="label text-danger mb-1">Select City</label>
              <select
                id="selectCity"
                className={`${styles.searchCard} form-control  `}
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
                Select Transmission Type
              </label>
              <select
                id="transmissionType"
                className={`${styles.searchCard} form-control `}
                onChange={(e) => handleData("transmissionType", e.target.value)}
              >
                <option value="Car">Auto</option>
                <option value="Bus">Manual</option>
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
          <Link href={""} passHref>
            <div className="col-md-6 col-lg-3">
              <div className={styles.card}>
                <Image
                  src={carimg}
                  alt="hero banner"
                  className={styles.driverimg}
                  width={500}
                  height={250}
                  layout="responsive"
                 
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <h6 className="mb-0">Vehicle Name</h6>
                    <p className="mb-0 text-muted">Toyota Hiace</p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h6 className="mb-0">Color</h6>
                    <p className="text-muted mb-0">White</p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h6 className="mb-0">Model Year</h6>
                    <p className="text-muted mb-0">2020</p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h6 className="mb-0">Transmission</h6>
                    <p className="text-muted mb-0">Auto</p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h6 className="mb-0">City</h6>
                    <p className="text-muted mb-0">Lahore</p>
                  </div>
                  <div className="topBorder mb-3"></div>
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0">Per Day Charges</h6>
                    <h6 className="text-muted mb-0">PKR 5000</h6>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="col-md-6 col-lg-3">
            <div className={styles.card}>
              <Image
                src={carimg}
                alt="hero banner"
                className={styles.driverimg}
                width={500}
                height={250}
                layout="responsive"
               
              />
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Vehicle Name</h6>
                  <p className="mb-0 text-muted">Toyota Hiace</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Color</h6>
                  <p className="text-muted mb-0">White</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Model Year</h6>
                  <p className="text-muted mb-0">2020</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Transmission</h6>
                  <p className="text-muted mb-0">Auto</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <h6 className="mb-0">City</h6>
                    <p className="text-muted mb-0">Lahore</p>
                  </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between">
                  <h6 className="mb-0">Per Day Charges</h6>
                  <h6 className="text-muted mb-0">PKR 5000</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className={styles.card}>
              <Image
                src={carimg}
                alt="hero banner"
                className={styles.driverimg}
                width={500}
                  height={250}
                  layout="responsive"
                
              />
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Vehicle Name</h6>
                  <p className="mb-0 text-muted">Toyota Hiace</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Color</h6>
                  <p className="text-muted mb-0">White</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Model Year</h6>
                  <p className="text-muted mb-0">2020</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Transmission</h6>
                  <p className="text-muted mb-0">Auto</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <h6 className="mb-0">City</h6>
                    <p className="text-muted mb-0">Lahore</p>
                  </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between">
                  <h6 className="mb-0">Per Day Charges</h6>
                  <h6 className="text-muted mb-0">PKR 5000</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className={styles.card}>
              <Image
                src={carimg}
                alt="hero banner"
                className={styles.driverimg}
                width={500}
                height={250}
                layout="responsive"
                
              />
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Vehicle Name</h6>
                  <p className="mb-0 text-muted">Toyota Hiace</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Color</h6>
                  <p className="text-muted mb-0">White</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Model Year</h6>
                  <p className="text-muted mb-0">2020</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Transmission</h6>
                  <p className="text-muted mb-0">Auto</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <h6 className="mb-0">City</h6>
                    <p className="text-muted mb-0">Lahore</p>
                  </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between">
                  <h6 className="mb-0">Per Day Charges</h6>
                  <h6 className="text-muted mb-0">PKR 5000</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vans;
