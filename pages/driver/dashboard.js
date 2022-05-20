import React, { useState, useEffect } from "react";
import Head from "next/head";
import FullLayout from "../../components/DriverDashboard/components/Layout/FullLayout";
import Image from "next/image";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { getDriverBookings } from "../../redux/drivers/driver.actions";
import { updateDriverStatus } from "../../redux/drivers/driver.actions";
import Page404Error from "../error/404page";

export default function Home() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const user = useSelector(({ auth }) => auth.user);
  const driverBookings = useSelector(({ drivers }) => drivers.driverBookings);
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [accepted, setAccepted] = useState(false);
  const handleLoading = () => {
    setLoading(false);
  };


  const getBookings = () => {
    const payload = {
      registeredOwner_id: user.id,
    };
    setLoading(true);
    dispatch(getDriverBookings(payload, handleLoading));
  }

  useEffect(() => {
    if (user !== null) {
      getBookings();
    }
  }, [user]);

  useEffect(() => {
    if (driverBookings !== null) {
      setBookings(driverBookings);
    }
    if (isLoggedIn || !isLoggedIn) {
      setLoaded(true);
    }
  }, [driverBookings, isLoggedIn]);

  useEffect(() => {
    if (loaded) {
      if (!isLoggedIn) {
        router.push("/login")
      }
    }
  }, [isLoggedIn, loaded]);

  const handleAccept = (ownerid, type) => {
    const payload = {
      registeredOwner_id: ownerid,
      booking_type: type,
    }
    dispatch(updateDriverStatus(payload, handleLoading));
    getBookings();
  }

  return (
    <div>
      <FullLayout>
        <div>
          <div className="col-md-12 col-lg-10">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Booking Requests</CardTitle>
                {loading ? (<div className="d-flex justify-content-center vehicles-spinner">
                  <div className="spinner-grow text-danger" role="status">
                    <span className="sr-only">Loading...</span> </div>
                  <div className="spinner-grow text-danger" role="status">
                    <span className="sr-only">Loading...</span> </div>
                  <div className="spinner-grow text-danger" role="status">
                    <span className="sr-only">Loading...</span> </div>
                </div>) : (<>{bookings.length <= 0 ? (<h6 className="text-center">No Bookings Available</h6>)
                  :
                  (<div className="table-responsive scrollit">
                    <Table className="text-nowrap mt-3 align-middle" borderless>
                      <thead>
                        <tr>
                          <th>Customer Details</th>
                          <th>Booking Details</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {bookings.map((booking, index) => (
                          <tr key={index} className="border-top">
                            <td>
                              <div className="d-flex align-items-center p-2">
                                {/* <div >
                             <Image
                               src={tdata.avatar}
                               className="rounded-circle"
                               alt="avatar"
                               width="45"
                               height="45"
                             />
                             </div> */}
                                <div className="ms-2">
                                  <h6 className="mb-1 text-muted text-capitalize fontWeight">{booking.name}</h6>
                                  <h6 className="mb-1 text-muted fontWeight">{booking.cnic}</h6>
                                  <h6 className="mb-1 text-muted fontWeight">{booking.phone_no}</h6>
                                  <h6 className="mb-1 text-muted text-capitalize fontWeight ">{booking.address}</h6>
                                </div>
                              </div>
                            </td>

                            <td>
                              <div className="ms-0">
                                <h6 className="mb-1 text-muted text-capitalize fontWeight">Pickup City: {booking.fromCity}</h6>
                                <h6 className="mb-1 text-muted text-capitalize fontWeight">Destination: {booking.toCity}</h6>
                                <h6 className="mb-1 text-muted fontWeight">
                                  Date In: {booking.dateIn.split("T")[0]}
                                </h6>
                                <h6 className="mb-1 text-muted fontWeight">
                                  Date Out: {booking.dateOut.split("T")[0]}
                                </h6>
                                <h6 className="mb-1 text-muted fontWeight">Charges: PKR {booking.perDayPrice}</h6>
                              </div>
                            </td>

                            <td>
                              <div className="ms-0">
                                {!booking.accepted ? (
                                  <>
                                    <div>
                                      <button
                                        type="button"
                                        className="btn-success tableButton"
                                        onClick={() => handleAccept(booking.registeredOwner_id, booking.booking_type)}
                                      >
                                        Accept
                                      </button>
                                    </div>
                                    <div className="mt-3">
                                      <button
                                        type="button"
                                        className="btn-danger tableButton"
                                      >
                                        Reject
                                      </button>
                                    </div>
                                  </>) : (
                                  <>
                                    <button
                                      type="button"
                                      className="btn-success acceptedButton"
                                      disabled
                                    >
                                      Booking Accepted
                                    </button>
                                  </>)}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>)}</>)}

              </CardBody>
            </Card>
          </div>
        </div>
      </FullLayout>
    </div>
  );
}
