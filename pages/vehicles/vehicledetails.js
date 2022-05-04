import React from "react";
import { useState } from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  errorNotification,
  warningNotification,
  infoNotification,
} from "../../components/notification/notification";
import carimg from "../../assets/images/car.png";
import styles from "../../styles/Drivers.module.css";
import VehicleBooking from "../../components/VehicleBooking"

function VehicleDetails() {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const user = useSelector(({ auth }) => auth.user);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const vehicle = router.query;
  const handleShow = () =>{
    if(isLoggedIn && user.user_type==="Customer"){
      setShow(true);
    }
    else if(isLoggedIn && (user.user_type==="Transporter" || user.user_type==="Driver")){
     infoNotification("Information",`Bookings are not allowed on ${user.user_type} account`)
    }
    else{
      errorNotification("Login First","Please Login First to Book this Vehicle")
    }
    
  }
  
  return (
    <div className="ftco-section">
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 justify-content-center  ">
          <Card className="effectCard">
            {vehicle.photoUrl?( <div className={styles.driverimg}>
                <Image
                  src={vehicle.photoUrl}
                  alt="Image"
                  className={styles.driverIMG}
                  width={500}
                  height={250}
                  layout="responsive"
                />
              </div>):<></>}
             
            </Card>
          </div>
       {!show? <div className="col-md-6 col-lg-4">
            <Card className={`${styles.driverData} bg-white container-fluid`}>
              <CardTitle
                tag="h6"
                className="border-bottom p-3 mb-0 text-center "
              >
                <i className="bi bi-truck me-2 " />
                Vehicle Details
              </CardTitle>
              <CardBody>
                <div className={`d-flex justify-content-between mb-3`}>
                  <h6 className="mb-0">Vehicle Name</h6>
                  <p className="mb-0 text-muted text-capitalize">{vehicle.name}</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Color</h6>
                  <p className="mb-0 text-muted text-capitalize">{vehicle.color}</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Model Year</h6>
                  <p className="mb-0 text-muted">{vehicle.modelYear}</p>
                </div>
                
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Transmission Type</h6>
                  <p className="mb-0 text-muted">{vehicle.transmission}</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">City</h6>
                  <p className="mb-0 text-muted">{vehicle.fromCity}</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Per Day Charges</h6>
                  <p className="mb-0 text-muted">PKR {vehicle.perDayPrice}</p>
                </div>
               
                <div className="topBorder mb-3 "></div>
                <div className="d-flex justify-content-center">
                <button type="button" className="btn-danger tableButton "
                onClick={handleShow}
                >Book Now</button>
                </div>
              </CardBody>
            </Card>
          </div> : <div className="col-md-6"> <VehicleBooking vehicleDetails={vehicle}/> </div>}
        </div>
      </div>
    </div>
  );
}

export default VehicleDetails;
