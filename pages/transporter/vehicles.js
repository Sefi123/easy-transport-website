import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import FullLayout from "../../components/TransporterDashboard/components/Layout/FullLayout";
import VehicleAddForm from "../../components/TransporterDashboard/components/VehicleAddForm"
import user1 from "../../assets/images/car.png";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getVehicles, deleteVehicle, makeVehicleAvailable } from "../../redux/transporter/transporter.actions";
import { connect } from "react-redux";
import ErrorPage from "../../pages/error/404page"

const TransporterVehicles = () => {
  const user = useSelector(({ auth }) => auth.user);
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const registerVehicles = useSelector(({ transporter }) => transporter.transporterVehicles);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded]=useState(false);
  const [vehicles, setVehicles] =useState([]);

  const handleShow = () => {
    setShow(true);
  }
  const handleLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (user !== null) {
      const payload = {
        registeredOwner_id: user.id,
      };
      setLoading(true);
      dispatch(getVehicles(payload, handleLoading));
    }

  }, [user]);

  useEffect(() => {
    if (registerVehicles !== null) {
      setVehicles(registerVehicles);
    }
    if (isLoggedIn||!isLoggedIn) {
      setLoaded(true);
    }

  }, [registerVehicles,isLoggedIn]);

  const makeAvailable = (ownerid,vehicleid) => {
    const payload={
      registeredOwner_id: ownerid,
      vehicle_id: vehicleid,
      booking_type:"vehicle",
    }
    setLoading(true);
    dispatch(makeVehicleAvailable(payload,handleLoading));
  }

  const handleDelete = (ownerid, vehicleid) => {
    const payload = {
      registeredOwner_id: ownerid,
      vehicle_id: vehicleid,
    };
    setLoading(true);
    dispatch(deleteVehicle(payload, handleLoading));
    const newData = vehicles.filter((item) => item.id !== vehicleid);
    setVehicles(newData);
  }
  useEffect(()=>{
    if(loaded){
    if(!isLoggedIn){
      router.push("/login")
    }
  }
  },[isLoggedIn,loaded]);

  return (
    <div>
      <FullLayout>
        <div>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <button type="button" className="btn btn-danger" onClick={handleShow}>Add New Vehicle</button>
            </CardTitle>
            <CardBody className="">
              <div className="mt-3">
                {show ? <VehicleAddForm /> : <></>}
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-truck me-2" />
              Registered Vehicles
            </CardTitle>
            <CardBody className="">
              {loading ? (<div className="d-flex justify-content-center vehicles-spinner">
                <div className="spinner-grow text-danger" role="status">
                  <span className="sr-only">Loading...</span> </div>
                <div className="spinner-grow text-danger" role="status">
                  <span className="sr-only">Loading...</span> </div>
                <div className="spinner-grow text-danger" role="status">
                  <span className="sr-only">Loading...</span> </div>
              </div>) : (<div className="row">
                {(vehicles.map((vehicle, key) =>
                  <>
                    <div className="col-md-6 col-lg-4">
                      <Card >
                        <Image src={vehicle.photoUrl} alt="hero banner"
                          width={500}
                          height={250}
                          layout="responsive" />
                        <div className="card-body">
                          <div className="d-flex justify-content-between mb-3">
                            <h6 className="mb-0">Vehicle Name</h6>
                            <p className="mb-0 text-muted text-capitalize">{vehicle.name}</p>
                          </div>

                          {vehicle.vehicleType === "Small Truck" || vehicle.vehicleType === "Heavy Truck" ?
                            (<div className="d-flex justify-content-between mb-3">
                              <h6 className="mb-0">City</h6>
                              <p className="text-muted mb-0 text-capitalize">{vehicle.fromCity} To {vehicle.toCity}</p>
                            </div>)
                            :
                            (<div className="d-flex justify-content-between mb-3">
                              <h6 className="mb-0">City</h6>
                              <p className="text-muted mb-0 text-capitalize">{vehicle.fromCity}</p>
                            </div>)
                          }
                          <div className="d-flex justify-content-between mb-3">
                            <h6 className="mb-0">Number Plate</h6>
                            <p className="text-muted mb-0 text-uppercase">{vehicle.numberPlate}</p>
                          </div>
                          <div className="d-flex justify-content-between mb-3">
                            <h6 className="mb-0">Booking Status</h6>
                            <p className="text-muted mb-0">{!vehicle.booked ? (<>Available</>) : (<h6 className="mb-2 text-danger cursor-pointer " onClick={()=> makeAvailable(vehicle.registeredOwner_id, vehicle.id)}>Make Available</h6>)}</p>
                          </div>
                          <div className="topBorder mb-3"></div>
                          <div className="d-flex justify-content-between">
                            <button type="button" className="btn-success tableButton">Edit</button>
                            <button className="btn-danger tableButton" onClick={() => handleDelete(vehicle.registeredOwner_id, vehicle.id)}>Delete</button>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </>
                ))}
              </div>)}

            </CardBody>
          </Card>

        </div>
      </FullLayout>

    </div>

  );
};


// const mapStateToProps = ({auth,transporter})=>{
//   return{
//     data:auth.user
//   }
// }

// const VehicleMapped= connect(mapStateToProps,null)(Vehicles);

// export default VehicleMapped;
export default TransporterVehicles;
