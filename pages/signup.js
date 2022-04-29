import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  errorNotification,
  warningNotification,
} from "../components/notification/notification";
import { useDispatch } from "react-redux";
import { userSignUpRequest } from "../redux/auth/auth.actions";
import FileUploader from "../components/FileUploader";
import { uploadImage } from "../components/ImageUpload";
import convertImageToBase64 from "../components/ImageBase64";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [imgName, setimgName] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmpassword: "",
    cnic: "",
    age: null,
    city: "Lahore",
    perDayCharges: null,
    driverType: "Car",
    drivingExperience: null,
    drivingLicense: "",
    licenseExpiry: "",
    photoUrl: "",
    accountType: "Customer",
    role: "user",
  });

  const handleData = (key, value) => {
    setData({ ...data, [key]: value });
  
  };
  const handleLoading = () => {
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.photoUrl) {
      errorNotification("Error", "Please Upload Image");
      return;
    } else {
      if (data.accountType === "Customer") {
        var payload = {
          name: data.name,
          email: data.email,
          phone_no: data.phone,
          address: data.address,
          city: data.city,
          password: data.password,
          photoUrl: data.photoUrl,
          user_type: data.accountType,
          role: data.role,
        }
      }
      else if (data.accountType === "Transporter") {
        var payload = {
          name: data.name,
          email: data.email,
          phone_no: data.phone,
          address: data.address,
          city: data.city,
          cnic: data.cnic,
          password: data.password,
          photoUrl: data.photoUrl,
          user_type: data.accountType,
          role: data.role,
        }
      }
      else {
        var payload = {
          name: data.name,
          email: data.email,
          phone_no: data.phone,
          address: data.address,
          city: data.city,
          cnic: data.cnic,
          role: "user",
          perDayPrice: data.perDayCharges,
          driver_type: data.driverType,
          license_number: data.drivingLicense,
          expiry_date: data.licenseExpiry.replaceAll('-','/'),
          drive_experience: data.drivingExperience,
          age: data.age,
          password: data.password,
          photoUrl: data.photoUrl,
          user_type: data.accountType,
          role: data.role,
        };
        console.log(payload);
      }
      setLoading(true);
      dispatch(userSignUpRequest(payload, handleLoading));
    }
  };

  const PhoneValidation = () => {
    const phoneNo = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;
    if (data.phone.match(phoneNo)) {
      return <div></div>;
    } else {
      return (
        <div className="password-match">Please Enter Correct Phone Number</div>
      );
    }
  };

  const PasswordMatch = () => {
    if (data.password != data.confirmpassword) {
      return <div className="password-match">Password not Matched</div>;
    } else {
      return <div></div>;
    }
  };

  const onDrop = (acceptedFiles, rejectedFiles, imgName) => {
    if (rejectedFiles.length > 0) {
      warningNotification(
        "warning",
        "Upload only one image and size limit of 1 MB"
      );
      return;
    } else if (acceptedFiles) {
      convertImageToBase64(acceptedFiles[0], (result, success) => {
        if (success) {
          uploadImage(result, (url, success) => {
            if (success) {
              handleData("photoUrl", `${url}`);
              setimgName(acceptedFiles[0].name);
            }
          });
        }
      });
    }
  };

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section text-muted">Easy Transport</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10 justify-content-center">
            <div className="wrap d-md-flex">
              <div className="text-wrap p-5 p-lg-5 text-center d-flex align-items-center order-md-last">
                <div className="text w-100">
                  <h2>Welcome to Sign Up</h2>
                  <p>Already have an account?</p>
                  <Link href="/login">
                    <a>
                      <button
                        type="button"
                        className="btn-white btn-outline-white "
                      >
                        Login
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="login-wrap p-4 p-lg-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Sign Up</h3>
                  </div>
                  {/* <div className="w-100">
                    <p className="social-media d-flex justify-content-end">
                      <a
                        href="#"
                        className="social-icon d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-google"></span>
                      </a>
                    </p>
                  </div> */}
                </div>
                <form onSubmit={(e) => handleSubmit(e)} className="signin-form">
                  <div className="form-group mb-3">
                    <label className="label">Select Account Type</label>
                    <select
                      id="accountType"
                      className="form-control"
                      onChange={(e) =>
                        handleData("accountType", e.target.value)
                      }
                    >
                      <option value="Customer">Customer</option>
                      <option value="Transporter">Transporter</option>
                      <option value="Driver">Driver</option>
                    </select>
                  </div>
                  <div className="form-group mb-3">
                    <label className="label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={data.name}
                      onChange={(e) => handleData("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={data.email}
                      onChange={(e) => handleData("email", e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      value={data.phone}
                      onChange={(e) => handleData("phone", e.target.value)}
                      required
                    />
                  </div>
                  {!data.phone ? <></> : <PhoneValidation />}
                  <div className="form-group mb-3">
                    <label className="label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      value={data.address}
                      onChange={(e) => handleData("address", e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label">Select City</label>
                    <select
                      id="accountType"
                      className="form-control"
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
                  {data.accountType === "Transporter" ? (
                    <div>
                      <div className="form-group mb-3">
                        <label className="label">CNIC Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="CNIC"
                          value={data.cnic}
                          onChange={(e) => handleData("cnic", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      {data.accountType === "Driver" ? (
                        <div>
                          <div className="form-group mb-3">
                            <label className="label">Age</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Age"
                              value={data.age}
                              onChange={(e) =>
                                handleData("age", e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label className="label">CNIC Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="CNIC"
                              value={data.cnic}
                              onChange={(e) =>
                                handleData("cnic", e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label className="label">
                              Driving License Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Driving License "
                              value={data.drivingLicense}
                              onChange={(e) =>
                                handleData("drivingLicense", e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label className="label">License Expiry Date</label>
                            <input
                              type="date"
                              className="form-control"
                              placeholder="dd-mm-yyyy"
                              value={data.licenseExpiry}
                              onChange={(e) =>
                                handleData("licenseExpiry", e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label className="label">Per Day Charges</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Per Day Charges "
                              value={data.perDayCharges}
                              onChange={(e) =>
                                handleData("perDayCharges", e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label className="label">Driving Experience</label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Driving Experience Years"
                              value={data.drivingExperience}
                              onChange={(e) =>
                                handleData("drivingExperience", e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label className="label">Select Driver Type</label>
                            <select
                              id="driverType"
                              className="form-control"
                              onChange={(e) =>
                                handleData("driverType", e.target.value)
                              }
                            >
                              <option value="Car">Car</option>
                              <option value="Bus">Bus</option>
                              <option value="Van">Van</option>
                              <option value="Small Truck">Small Truck</option>
                              <option value="Heavy Truck">Heavy Truck</option>
                            </select>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </>
                  )}

                  <div className="form-group mb-3">
                    <label className="label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={data.password}
                      onChange={(e) => handleData("password", e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={data.confirmpassword}
                      onChange={(e) =>
                        handleData("confirmpassword", e.target.value)
                      }
                      required
                    />
                  </div>
                  {!data.confirmpassword ? <></> : <PasswordMatch />}

                  <label className="label">Profile Picture</label>
                  <FileUploader
                    placeholder={imgName ? imgName : "Click here to upload"}
                    accept={["image/jpeg", "image/png", "image/bmp"]}
                    maxFiles={1}
                    maxSize={1000000}
                    onDrop={(acceptedFiles, rejectedFiles) =>
                      onDrop(acceptedFiles, rejectedFiles, "frontSideImage")
                    }
                  />
                  <div className="form-group">
                    <button type="submit" className="signin-btn">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
