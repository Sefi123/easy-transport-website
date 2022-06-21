import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardTitle, CardBody } from "reactstrap";
import driver1 from "../assets/images/arslan.jpg";
import driver2 from "../assets/images/shahzaib.jpg";
import driver3 from "../assets/images/drivers/d4.jpg";

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
              <Card className="aboutUSCard">
                <Image
                  src={driver1}
                  alt="hero banner"
                  className="productsIMG"
                  width={500}
                  height={600}
                  
                />

                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a className="text-muted">
                        Name
                      </a>
                    </p>
                    <p className="small text-danger">Arslan Ahmad</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a className="text-muted">
                        Email
                      </a>
                    </p>
                    <p className="small text-danger">FA18-BSE-033@cuilahore.edu.pk</p>
                  </div>
                  <div className="d-flex justify-content-between mb-0">
                    <p className="small">
                      <a  className="text-muted mb-0">
                        Profession
                      </a>
                    </p>
                    <p className="small text-danger mb-0">BS Software Engineer</p>
                  </div>
                    <div className="d-flex justify-content-between mb-0">
                    <p className="small">
                      <a  className="text-muted mb-0">
                        Role
                      </a>
                    </p>
                    <p className="small text-danger mb-0">Next Js Frontend</p>
                  </div>
                
                </div>
              </Card>
            </div>
          
            <div className="col-md-6 col-lg-3">
              <Card className="aboutUSCard">
                <Image
                  src={driver2}
                  alt="hero banner"
                  className="productsIMG"
                  width={500}
                  height={600}
                  layout="responsive"
                />

                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a  className="text-muted">
                        Name
                      </a>
                    </p>
                    <p className="small text-danger">Shahzaib</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a className="text-muted">
                        Email
                      </a>
                    </p>
                    <p className="small text-danger">FA18-BSE-097@cuilahore.edu.pk</p>
                  </div>
                  <div className="d-flex justify-content-between mb-0">
                    <p className="small">
                      <a  className="text-muted mb-0">
                        Profession
                      </a>
                    </p>
                    <p className="small text-danger mb-0">BS Software Engineer</p>
                  </div>
 <div className="d-flex justify-content-between mb-0">
                    <p className="small">
                      <a  className="text-muted mb-0">
                        Role
                      </a>
                    </p>
                    <p className="small text-danger mb-0">Next Js Frontend</p>
                  </div>
                
                </div>
              </Card>
            </div>
          
            <div className="col-md-6 col-lg-3">
              <Card className="aboutUSCard">
                <Image
                  src={driver3}
                  alt="hero banner"
                  className="productsIMG"
                  width={500}
                  height={600}
                  layout="responsive"
                />

                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a className="text-muted">
                        Name
                      </a>
                    </p>
                    <p className="small text-danger">Safeer Ahmad</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a  className="text-muted">
                        Email
                      </a>
                    </p>
                    <p className="small text-danger">FA18-BSE-067@cuilahore.edu.pk</p>
                  </div>
                  <div className="d-flex justify-content-between mb-0">
                    <p className="small">
                      <a  className="text-muted mb-0">
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
