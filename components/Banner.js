import React from "react";
import Link from "next/link";
import Image from "next/image";
// import bannerimg from "../assets/images/bannerPic.jpg";
import bannerimg from "../assets/images/banner.jpg";
import styles from '../styles/Home.module.css'

const Banner = () => {
  return (
    <div>
    <div className={`${styles.Banner}`}>
     <Image src={bannerimg} alt="hero banner"  width={800}
      height={300} 
      layout="responsive"
      />
    </div>
     <div className={`${styles.bannerdiv}`}>
            <h1>
              Make Your Transport Life Easy
            </h1>
            <h4 className="col-md-5 col-7">
              Book all kind of trucks for your cargo shipment. Book vehicles
         like cars, buses and vans for daily uses. Book all kind of
        drivers easily in just few minutes.  
            </h4>
            </div>
    </div>
  );
};

export default Banner;
