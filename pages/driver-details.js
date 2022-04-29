import React from "react";
import { useState } from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import driver from "../assets/images/drivers/d2.jpg";
import styles from "../styles/Drivers.module.css";
import DriverBooking from "../components/DriverBooking"
function DriverDetails() {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const [show, setShow] = useState(false);
  const handleShow = () =>{
      setShow(true);
  }
  
  return (
    <div className="ftco-section">
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-3 justify-content-center  ">
            <div className={styles.card}>
              <div className={styles.driverimg}>
                <Image
                  src={driver}
                  alt="hero banner"
                  className={styles.driverIMG}
                  width={500}
                  height={600}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
       {!show? <div className="col-md-6 col-lg-4">
            <Card className={`${styles.driverData} bg-white container-fluid`}>
              <CardTitle
                tag="h6"
                className="border-bottom p-3 mb-0 text-center "
              >
                <i className="bi bi-person me-2 " />
                Driver Details
              </CardTitle>
              <CardBody>
                <div className={`d-flex justify-content-between mb-3`}>
                  <h6 className="mb-0">Name</h6>
                  <p className="mb-0 text-muted">Arslan Ahmad</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Phone Number</h6>
                  <p className="mb-0 text-muted">03092016575</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Age</h6>
                  <p className="mb-0 text-muted">22</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">City</h6>
                  <p className="mb-0 text-muted">Lahore</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Driving License</h6>
                  <p className="mb-0 text-muted">Yes</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Driving Experience</h6>
                  <p className="mb-0 text-muted">10 Years</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Driving Type</h6>
                  <p className="mb-0 text-muted">Car</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Per Day Charges</h6>
                  <p className="mb-0 text-muted">PKR 1500</p>
                </div>
                <div className="topBorder mb-3 "></div>
                <div className="d-flex justify-content-center">
                <button type="button" className="btn-danger tableButton "
                onClick={handleShow}
                >Book Now</button>
                </div>
              </CardBody>
            </Card>
          </div> : <div className="col-md-6"> <DriverBooking/> </div>}
          
          
        </div>
      </div>
    </div>
  );
}

export default DriverDetails;
