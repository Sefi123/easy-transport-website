import React from "react";
import { useState,useEffect } from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import driver from "../assets/images/drivers/d2.jpg";
import DriverBooking from "../components/DriverBooking";
import {
  errorNotification,
  warningNotification,
  infoNotification,
} from "../components/notification/notification";
import { connect } from "react-redux";
import {driverData} from "../redux/drivers/selector";

function DriverDetails() {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const driversResult = useSelector(({ drivers }) => drivers.driversResult);
  const user = useSelector(({ auth }) => auth.user);
  const router = useRouter();
  const driver = router.query;
  const [show, setShow] = useState(false);
  const handleShow = () => {
      if(isLoggedIn && user.user_type==="Customer"){
        setShow(true);
      }
      else if(isLoggedIn && (user.user_type==="Transporter" || user.user_type==="Driver")){
       infoNotification("Information",`Bookings are not allowed on ${user.user_type} account`)
      }
      else{
        errorNotification("Login First","Please Login First to Book this Driver")
      }
      
  }
  
  return (
    <div className="ftco-section">
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-3 justify-content-center  ">
            <Card className="effectCard">
            {driver.photoUrl?( <div>
              
                <Image
                  src={driver.photoUrl}
                  alt="hero banner"
                  className="productDetailsIMG"
                  width={600}
                  height={600}
                  layout="responsive"
                />
               </div>):<></>}
            </Card>
          </div>
          {!show ? <div className="col-md-6 col-lg-4">
            <Card className={`effectCard bg-white container-fluid`}>
              <CardTitle
                tag="h6"
                className="border-bottom p-3 mb-0 text-center "
              >
                <i className="bi bi-person me-2 " />
                Driver Details
              </CardTitle>
              <CardBody>
                
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Age</h6>
                  <p className="mb-0 text-muted">{driver.age}</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">City</h6>
                  <p className="mb-0 text-muted">{driver.city}</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Driving License</h6>
                  <p className="mb-0 text-muted">Yes</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Driving Experience</h6>
                  <p className="mb-0 text-muted">{driver.drive_experience} Years</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Driving Type</h6>
                  <p className="mb-0 text-muted text-capitalize">{driver.driver_type}</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Per Day Charges</h6>
                  <p className="mb-0 text-muted">PKR {driver.perDayPrice}</p>
                </div>
                <div className="topBorder mb-3 "></div>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn-danger tableButton "
                    onClick={handleShow}
                  >Book Now</button>
                </div>
              </CardBody>
            </Card>
          </div> : <div className="col-md-6"> <DriverBooking driverDetails={driver} /> </div>}
        </div>
      </div>
    </div>
  );
}

const makeMapStateToProps = () => {
  const getDriverData = driverData()
  const mapStateToProps = (state, ownProps) => {
    debugger
    return {
       driver: getDriverData(state, ownProps)
    }
   }
  return mapStateToProps
 }
 const DriverData=connect(makeMapStateToProps)(DriverDetails)
 export default DriverData;
