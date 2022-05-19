import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  errorNotification,
  warningNotification,
} from "./notification/notification";
import { useDispatch, useSelector } from "react-redux";
import { driverBooking } from "../redux/drivers/driver.actions";
import { Card, CardTitle, CardBody } from "reactstrap";

const DriverBooking = (props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);
  const [imgName, setimgName] = useState("");
  const driver = props.driverDetails;
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

  const PhoneValidation = () => {
    const phoneNo = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;
    if (data.PhoneNo.match(phoneNo)) {
      return <div></div>;
    } else {
      return (
        <div className="password-match">Please Enter Correct Phone Number</div>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      user_id: user.id,
      name: data.Name,
      cnic: data.CNIC,
      phone_no: data.PhoneNo,
      fromCity: data.FromCity,
      toCity: data.ToCity,
      driver_name: driver.name,
      booking_type:"driver",
      accepted:false,
      perDayPrice: driver.perDayPrice,
      age:driver.age,
      experience:driver.drive_experience,
      address: data.Address,
      dateIn: data.DateIn.replaceAll('-','/'),
      dateOut: data.DateOut.replaceAll('-','/'),
      registeredOwner_id: driver.id,

    };
    setLoading(true);
    dispatch(driverBooking(payload, handleLoading));
  };

  return (
    <Card className={`aboutUSCard container-fluid`}>
      <CardTitle className="cardTitle">
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
           {!data.PhoneNo ? <></> : <PhoneValidation />}
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
        <div className="col-md-6 form-group mb-3">
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

export default DriverBooking;
