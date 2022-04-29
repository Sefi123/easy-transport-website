import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logOutRequest } from "../redux/auth/auth.actions";

const Navbar = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const user = useSelector(({ auth }) => auth.user);
  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(false);
  };
 
  return (
    <nav className=" w-100 p-3 navbar navbar-expand-lg navbar-light bg-light position-fixed top-0 start-0">
      <div className="container-fluid">
        <Link href="/" passHref>
        <a className="navbarBrand fw-bold">
          Easy Transport
        </a>
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="bi bi-list"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <Link href="/">
              <a className="nav-link">
                <li className="nav-item">Home</li>
              </a>
            </Link>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Trucks
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link href="/trucks/smalltrucks">
                  <a className="nav-link">
                    <li className="nav-item">Small Trucks</li>
                  </a>
                </Link>
                <Link href="/trucks/heavytrucks">
                  <a className="nav-link">
                    <li className="nav-item">Heavy Trucks</li>
                  </a>
                </Link>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Vehicles
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link href="/vehicles/cars">
                  <a className="nav-link">
                    <li className="nav-item"> Cars</li>
                  </a>
                </Link>
                <Link href="/vehicles/buses">
                  <a className="nav-link">
                    <li className="nav-item">Buses</li>
                  </a>
                </Link>
                <Link href="/vehicles/vans">
                  <a className="nav-link">
                    <li className="nav-item">Vans</li>
                  </a>
                </Link>
              </ul>
            </li>
            <Link href="/drivers">
              <a className="nav-link">
                <li className="nav-item"
               >
               Drivers</li>
              </a>
            </Link>

            <Link href="/aboutus">
              <a className="nav-link">
                <li className="nav-item">About Us</li>
              </a>
            </Link>
            <Link href="/contactus">
              <a className="nav-link">
                <li className="nav-item">Contact Us</li>
              </a>
            </Link>
          </ul>

          {!isLoggedIn ? (
            <div className="navbar-nav ">
              <Link href="/login">
                <a className="nav-link">
                  <button type="button" className="btn ">
                    Login
                  </button>
                </a>
              </Link>
              <Link href="/signup">
                <a className="nav-link">
                  <button type="button" className="btn ">
                    Sign Up
                  </button>
                </a>
              </Link>
            </div>
          ) : (
            <div className="navbar-nav ">
              <Link href="/dashboard">
                <a className="nav-link">
                  <button type="button" className="btn ">
                    Dashboard
                  </button>
                </a>
              </Link>
                <a className="nav-link">
                  <button type="button" className="btn "
                  onClick={() => {
                    setLoading(true);
                    dispatch(logOutRequest(handleLoading));
                  }}
                  >
                    Log Out
                  </button>
                </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
