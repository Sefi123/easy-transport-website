import React from "react";
import Link from "next/link";
import Image from "next/image";
import bannerimg from "../assets/images/landingpage/banner-img.png";
import truckimg from "../assets/images/truck.png";
import carimg from "../assets/images/car.png";
import driverimg from "../assets/images/Driver.png";
import styles from "../styles/Home.module.css";

const Features = () => {
  return (
    <div>
      <div className={styles.featuresText}>
        <h1> Most Amazing Services We Offer</h1>
      </div>

     <div className="container">
      <div className={`${styles.features} row featuresDiv`}>
        <div className={`${styles.featuresdiv} col-md-6`}>
          <h1>
            Trucks for Cargo Shipment
            <br /> ----
          </h1>
          <h4>
            If you need any type of trucks for your cargo shipment you
           can find and book these trucks in just few easy steps. Just
             search and select the most suitable truck and book it.
          </h4>
          <div className="d-flex featuresBtn">
            <Link href="/trucks/smalltrucks" passHref>
                <button type="button" className="features-btn">
                  Book Truck
                </button>
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <Image src={truckimg} alt="Truck Image" width={530} height={300}  />
        </div>
      </div>

      <div className={`${styles.features} row`}>
        <div className="col-md-6">
          <Image src={carimg} alt="Car Image" width={700} height={340}/>
        </div>
        <div className={`${styles.featuresdiv} col-md-6`}>
          <h1>
            Vehicles for Daily Uses
            <br /> ----
          </h1>
          <h4>
            Book all kind of vehicles like cars for daily uses, buses
            and vans for tour services and for others many functions.
             Just search and select the right one.
          </h4>
          <div className="d-flex featuresBtn">
            <Link href="/vehicles/cars" passHref>
                <button type="button" className="features-btn ">
                  Book Vehicle
                </button>
            </Link>
          </div>
        </div>
      </div>

      <div className={`${styles.features} row featuresDiv`}>
        <div className={`${styles.featuresdiv} col-md-6`}>
          <h1>
            All kind of Drivers
            <br /> ----
          </h1>
          <h4>
            If you have your vehicle and just need a driver than you
            can get your most suitable driver very easily. Just find
            and select your most suitable driver for booking.
          </h4>
          <div className="d-flex featuresBtn">
            <Link href="/drivers" passHref>
                <button type="button" className="features-btn">
                  Book Driver
                </button>     
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <Image src={driverimg} alt="Driver Image" width={500} height={400} />
        </div>
      </div>
      </div>

      <div className="container text-center mb-4">
        <div className={styles.featuresText}>
          <h1>A Right Place for Transporters and Drivers</h1>
          <h4>
            The most amazing features in this website are also for transporters
            and drivers.
          </h4>
        </div>

        <div className={`${styles.workfeatures} row`}>
          <div className={`${styles.workfeaturesdiv} col-md-4`}>
            <h1>1. Register and Make Profile</h1>
            <h4>
              Create a free account with few easy steps. Complete your profile
              by adding some personal information.{" "}
            </h4>
          </div>
          <div className={`${styles.workfeaturesdiv} col-md-4`}>
            <h1>2. Add Your Vehicles or Driver</h1>
            <h4>
              If you are a transporter, from dashboard add your vehicles. If you
              are a driver, from dashboard add your driver profile.{" "}
            </h4>
          </div>
          <div className={`${styles.workfeaturesdiv} col-md-4`}>
            <h1>3. Customers Search and Book</h1>
            <h4>
              Customers will search vehicles and drivers according to their
              needs and select most suitable vehicle or driver for booking.{" "}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
