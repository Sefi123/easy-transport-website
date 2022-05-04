import React from "react";
import { useState } from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import carimg from "../../assets/images/truck.png";
import { useRouter } from "next/router";
import {
  errorNotification,
  warningNotification,
  infoNotification,
} from "../../components/notification/notification";
import styles from "../../styles/Drivers.module.css";
import VehicleBooking from "../../components/VehicleBooking"
import { Tr } from "@chakra-ui/react";

function TruckDetails() {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const user = useSelector(({ auth }) => auth.user);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const truck = router.query;
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
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 justify-content-center  ">
            <div className={styles.card}>
              <div className={styles.driverimg}>
                {truck.photoUrl?( <Image
                  src={truck.photoUrl}
                  alt="hero banner"
                  className={styles.driverIMG}
                  width={500}
                  height={250}
                  layout="responsive"
                />):<></>}
               
              </div>
            </div>
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
                  <p className="mb-0 text-muted text-capitalize">{truck.name}</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Color</h6>
                  <p className="mb-0 text-muted text-capitalize">{truck.color}</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Model Year</h6>
                  <p className="mb-0 text-muted">{truck.modelYear}</p>
                </div>
                
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Transmission Type</h6>
                  <p className="mb-0 text-muted">{truck.transmission}</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">From City</h6>
                  <p className="mb-0 text-muted">{truck.fromCity}</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">To City</h6>
                  <p className="mb-0 text-muted">{truck.toCity}</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Truck Capacity</h6>
                  <p className="mb-0 text-muted">{truck.luggageCapacity} KG</p>
                </div>
                <div className="topBorder mb-3"></div>
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="mb-0">Average Charges</h6>
                  <p className="mb-0 text-muted">PKR {truck.perDayPrice}</p>
                </div>
               
                <div className="topBorder mb-3 "></div>
                <div className="d-flex justify-content-center">
                <button type="button" className="btn-danger tableButton "
                onClick={handleShow}
                >Book Now</button>
                </div>
              </CardBody>
            </Card>
          </div> : <div className="col-md-6"> <VehicleBooking vehicleDetails={truck}/> </div>}
          
          
        </div>
      </div>
    </div>
  );
}

export default TruckDetails;
