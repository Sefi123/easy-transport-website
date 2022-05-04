import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  errorNotification,
  warningNotification,
} from "./notification/notification";
import { Card, CardTitle, CardBody } from "reactstrap";
import styles from "../styles/Drivers.module.css";
import { useDispatch, useSelector } from "react-redux";
import { vehicleBookingRequest } from "../redux/vehicles/vehicles.actions";

const VehicleBooking = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);
  const [imgName, setimgName] = useState("");
  const vehicle = props.vehicleDetails;
  const [data, setData] = useState({
    Name: "",
    PhoneNo: "",
    Address: "",
    CNIC: "",
    FromCity: "",
    ToCity: "",
    DateIn: "",
    DateOut: "",

  });

  const CNICValidation = () =>{
    if(!/^[0-9]+$/.test(data.CNIC) || (data.CNIC.length<13 || data.CNIC.length>13))
    {return(
      <div className="password-match">Please Enter Correct CNIC Number</div>
    )
    } else{
      return <></>
    }
  }
  const handleData = (key, value) => {
    setData({ ...data, [key]: value });
  };
  const handleLoading = () => {
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let fromCity;
    let toCity;
    if(vehicle.vehicleType==="Small Truck" || vehicle.vehicleType==="Heavy Truck"){
      fromCity=vehicle.fromCity;
      toCity=vehicle.toCity
    }
    else{
      fromCity=data.FromCity;
      toCity=data.ToCity;
    }
    const payload = {
      user_id: user.id,
      name: data.Name,
      cnic: data.CNIC,
      phone_no: data.PhoneNo,
      fromCity: fromCity,
      toCity: toCity,
      vehicle_id: vehicle.id,
      vehicle_name: vehicle.name,
      perDayPrice: vehicle.perDayPrice,
      numberPlate: vehicle.numberPlate,
      modelYear: vehicle.modelYear,
      address: data.Address,
      dateIn: data.DateIn.replaceAll('-','/'),
      dateOut: data.DateOut.replaceAll('-','/'),
      registeredOwner_id: vehicle.registeredOwner_id,

    };
    console.log(payload);
    setLoading(true);
    dispatch(vehicleBookingRequest(payload, handleLoading));
  };

  return (
    <Card className={`${styles.driverData} container-fluid`}>
      <CardTitle className={styles.cardTitle}>
        <div className="border-bottom mt-2 text-center">
          <h3 className="mb-2">Please Fill Booking Details </h3>
        </div>
      </CardTitle>
      <form onSubmit={(e) => handleSubmit(e)} className="row">
        <div className="col-md-6 form-group mb-3">
          <label className="label">Your Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={data.Name}
            onChange={(e) => handleData("Name", e.target.value)}
            required
          />
        </div>
        <div className="col-md-6 form-group mb-3">
          <label className="label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            value={data.PhoneNo}
            onChange={(e) => handleData("PhoneNo", e.target.value)}
            required
          />
        </div>

        <div className="col-md-6 form-group mb-3">
          <label className="label">Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            value={data.Address}
            onChange={(e) => handleData("Address", e.target.value)}
            required
          />
        </div>
        <div className="col-md-6 form-group mb-3">
          <label className="label">CNIC Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="CNIC Number"
            value={data.CNIC}
            onChange={(e) => handleData("CNIC", e.target.value)}
            required
          />
           {!data.CNIC?(<></>):(<CNICValidation/>)}
        </div>
      {vehicle.vehicleType==="Small Truck" || vehicle.vehicleType==="Heavy Truck" ? (
        <>
        <div className="col-md-6 form-group mb-3">
        <label className="label">From City</label>
        <input
          type="text"
          className="form-control"
          placeholder="From City"
          value={vehicle.fromCity}
          onChange={(e) => handleData("FromCity", e.target.value)}
          disabled
        />
      </div>
      <div className="col-md-6 form-group mb-3">
        <label className="label">To City</label>
        <input
          type="text"
          className="form-control"
          placeholder="To City"
          value={vehicle.toCity}
          onChange={(e) => handleData("ToCity", e.target.value)}
          disabled
        />
      </div>
      </>

      ):(<> <div className="col-md-6 form-group mb-3">
      <label className="label">From City</label>
      <input
        type="text"
        className="form-control"
        placeholder="From City"
        value={data.FromCity}
        onChange={(e) => handleData("FromCity", e.target.value)}
        required
      />
    </div>
    <div className="col-md-6 form-group mb-3">
      <label className="label">To City</label>
      <input
        type="text"
        className="form-control"
        placeholder="To City"
        value={data.ToCity}
        onChange={(e) => handleData("ToCity", e.target.value)}
        required
      />
    </div>
</>)}
       
        <div className="col-md-6 form-group mb-3">
          <label className="label">Date In</label>
          <input
            type="date"
            className="form-control"
            placeholder="Date In"
            value={data.DateIn}
            onChange={(e) => handleData("DateIn", e.target.value)}
            required
          />
        </div>
        <div className="col-md-6 form-group mb-3">
          <label className="label">Date Out</label>
          <input
            type="date"
            className="form-control"
            placeholder="Date Out"
            value={data.DateOut}
            onChange={(e) => handleData("DateOut", e.target.value)}
            required
          />
        </div>
        <div className="col-md-6 mb-3 vehicleButton">
          <button type="submit" className="signin-btn">
            Book Now
          </button>
        </div>
      </form>
    </Card>
  );
};

export default VehicleBooking;
