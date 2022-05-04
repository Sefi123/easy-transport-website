import React, { useState, useEffect } from "react";
import Head from "next/head";
import FullLayout from "../../components/TransporterDashboard/components/Layout/FullLayout";
import Image from "next/image";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../components/TransporterDashboard/images/users/user1.jpg";
import user2 from "../../components/TransporterDashboard/images/users/user2.jpg";
import user3 from "../../components/TransporterDashboard/images/users/user3.jpg";
import user4 from "../../components/TransporterDashboard/images/users/user4.jpg";
import user5 from "../../components/TransporterDashboard/images/users/user5.jpg";
import { useDispatch, useSelector } from "react-redux";
import { transporterBookings } from "../../redux/transporter/transporter.actions";
import Page404Error from "../error/404page";

export default function Home() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const user = useSelector(({ auth }) => auth.user);
  const bookingsRequests = useSelector(({ transporter }) => transporter.transporterBookings);
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const handleLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (user !== null) {
      const payload = {
        registeredOwner_id: user.id,
      };
      setLoading(true);
      dispatch(transporterBookings(payload, handleLoading));
    }
  }, [user]);

  useEffect(() => {
    if (bookingsRequests !== null) {
      setBookings(bookingsRequests);
    }
  }, [bookingsRequests]);
  
  return (
    <div>
      {!isLoggedIn ? (
        <Page404Error />
      ) : (
        <FullLayout>
          <div>
            <div className="col-md-12 col-lg-12">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">Booking Requests</CardTitle>
                  {bookings.length <= 0 ? (<h6 className="text-center">No Bookings Available</h6>) : (<div className="table-responsive scrollit">
                    <Table className="text-nowrap mt-3 align-middle" borderless>
                      <thead>
                        <tr>
                          <th>Customer Details</th>
                          <th>Vehicle Details</th>
                          <th>Booking Details</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {bookings.map((booking, index) => (
                          <tr key={index} className="border-top">
                            <td>
                              <div className="d-flex align-items-center">
                                {/* <Image
                                  src={user.photoUrl}
                                  className="rounded-circle"
                                  alt="avatar"
                                  width="70"
                                  height="70"
                                /> */}
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
                                <h6 className="mb-1 text-muted text-capitalize fontWeight">{booking.vehicle_name}</h6>
                                <h6 className="mb-1 text-muted text-uppercase fontWeight">{booking.numberPlate}</h6>
                                <h6 className="mb-1 text-muted text-capitalize fontWeight">{booking.modelYear}</h6>
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
                                <div>
                                  <button
                                    type="button"
                                    className="btn-success tableButton"
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
                              </div>
                            </td>

                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>)}

                </CardBody>
              </Card>
            </div>
          </div>
        </FullLayout>
      )}
    </div>
  );
}
