import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardTitle, CardBody } from "reactstrap";
import styles from "../styles/AboutUs.module.css";
import driver1 from "../assets/images/drivers/d2.jpg";
import driver2 from "../assets/images/drivers/d3.jpg";
import driver3 from "../assets/images/drivers/d4.jpg";
import driver4 from "../assets/images/drivers/d1.jpg";

const AboutUs = () => {
  return (
    <section className="ftco-section">
      <div className="container-fluid">
        <CardTitle tag="h2" className="border-bottom p-3 mb-4 text-center text-muted ">
         
          <i className="bi bi-person-hearts me-2"></i>
           Our Team
         
        </CardTitle>

        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-3">
              <Card className={styles.card}>
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
                        Name
                      </a>
                    </p>
                    <p className="small text-danger">Arslan Ahmad</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Email
                      </a>
                    </p>
                    <p className="small text-danger">FA18-BSE-033@cuilahore.edu.pk</p>
                  </div>
                  <div className="d-flex justify-content-between mb-0">
                    <p className="small">
                      <a href="#!" className="text-muted mb-0">
                        Profession
                      </a>
                    </p>
                    <p className="small text-danger mb-0">BS Software Engineer</p>
                  </div>
                
                </div>
              </Card>
            </div>
          
            <div className="col-md-6 col-lg-3">
              <Card className={styles.card}>
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
                        Name
                      </a>
                    </p>
                    <p className="small text-danger">Shahzaib</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Email
                      </a>
                    </p>
                    <p className="small text-danger">FA18-BSE-097@cuilahore.edu.pk</p>
                  </div>
                  <div className="d-flex justify-content-between mb-0">
                    <p className="small">
                      <a href="#!" className="text-muted mb-0">
                        Profession
                      </a>
                    </p>
                    <p className="small text-danger mb-0">BS Software Engineer</p>
                  </div>
                
                </div>
              </Card>
            </div>
          
            <div className="col-md-6 col-lg-3">
              <Card className={styles.card}>
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
                        Name
                      </a>
                    </p>
                    <p className="small text-danger">Safeer Ahmad</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Email
                      </a>
                    </p>
                    <p className="small text-danger">FA18-BSE-067@cuilahore.edu.pk</p>
                  </div>
                  <div className="d-flex justify-content-between mb-0">
                    <p className="small">
                      <a href="#!" className="text-muted mb-0">
                        Profession
                      </a>
                    </p>
                    <p className="small text-danger mb-0">BS Software Engineer</p>
                  </div>
                
                </div>
              </Card>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
