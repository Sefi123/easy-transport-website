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
import Page404Error from "../error/404page";

export default function Home() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const user = useSelector(({ auth }) => auth.user);
  const tableData = [
    {
      avatar: user1,
      name: "Arslan Ahmad",
      cnic: "343031242653",
      phone: "03092016575",
      address: "Shershaw Coloni Raiwind Road Lahore",
      vehicleName: "Honda Civic",
      numberPlate: "LES3100",
      withDriver: "NO",
      fromCity: "Lahore",
      toCity: "Gujranwala",
      dateIn: "12th March 2022",
      dateOut: "13th March 2022",
    },
    {
      avatar: user2,
      name: "Arslan Ahmad",
      cnic: "343031242653",
      phone: "03092016575",
      address: "Shershaw Coloni Raiwind Road Lahore",
      vehicleName: "Honda Civic",
      numberPlate: "LES3100",
      withDriver: "NO",
      fromCity: "Lahore",
      toCity: "Gujranwala",
      dateIn: "12th March 2022",
      dateOut: "13th March 2022",
    },
    {
      avatar: user3,
      name: "Arslan Ahmad",
      cnic: "343031242653",
      phone: "03092016575",
      address: "Shershaw Coloni Raiwind Road Lahore",
      vehicleName: "Honda Civic",
      numberPlate: "LES3100",
      withDriver: "NO",
      fromCity: "Lahore",
      toCity: "Gujranwala",
      dateIn: "12th March 2022",
      dateOut: "13th March 2022",
    },
    {
      avatar: user4,
      name: "Arslan Ahmad",
      cnic: "343031242653",
      phone: "03092016575",
      address: "Shershaw Coloni Raiwind Road Lahore",
      vehicleName: "Honda Civic",
      numberPlate: "LES3100",
      withDriver: "NO",
      fromCity: "Lahore",
      toCity: "Gujranwala",
      dateIn: "12th March 2022",
      dateOut: "13th March 2022",
    },
    {
      avatar: user5,
      name: "Arslan Ahmad",
      cnic: "343031242653",
      phone: "03092016575",
      address: "Shershaw Coloni Raiwind Road Lahore",
      vehicleName: "Honda Civic",
      numberPlate: "LES3100",
      withDriver: "NO",
      fromCity: "Lahore",
      toCity: "Gujranwala",
      dateIn: "12th March 2022",
      dateOut: "13th March 2022",
    },
    {
      avatar: user5,
      name: "Arslan Ahmad",
      cnic: "343031242653",
      phone: "03092016575",
      address: "Shershaw Coloni Raiwind Road Lahore",
      vehicleName: "Honda Civic",
      numberPlate: "LES3100",
      withDriver: "NO",
      fromCity: "Lahore",
      toCity: "Gujranwala",
      dateIn: "12th March 2022",
      dateOut: "13th March 2022",
    },
    {
      avatar: user5,
      name: "Arslan Ahmad",
      cnic: "343031242653",
      phone: "03092016575",
      address: "Shershaw Coloni Raiwind Road Lahore",
      vehicleName: "Honda Civic",
      numberPlate: "LES3100",
      withDriver: "NO",
      fromCity: "Lahore",
      toCity: "Gujranwala",
      dateIn: "12th March 2022",
      dateOut: "13th March 2022",
    },
    {
      avatar: user5,
      name: "Arslan Ahmad",
      cnic: "343031242653",
      phone: "03092016575",
      address: "Shershaw Coloni Raiwind Road Lahore",
      vehicleName: "Honda Civic",
      numberPlate: "LES3100",
      withDriver: "NO",
      fromCity: "Lahore",
      toCity: "Gujranwala",
      dateIn: "12th March 2022",
      dateOut: "13th March 2022",
    },
  ];

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
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Overview of the Requests
                  </CardSubtitle>
                  <div className="table-responsive scrollit">
                    <Table className="text-nowrap mt-3 align-middle" borderless>
                      <thead>
                        <tr>
                          <th>Customer Details</th>
                          <th>Vehicle Details</th>
                          <th>Booking Details</th>
                          <th>Accept</th>
                          <th>Reject</th>
                        </tr>
                      </thead>

                      <tbody>
                        {tableData.map((tdata, index) => (
                          <tr key={index} className="border-top">
                            <td>
                              <div className="d-flex align-items-center p-2">
                                <Image
                                  src={tdata.avatar}
                                  className="rounded-circle"
                                  alt="avatar"
                                  width="45"
                                  height="45"
                                />
                                <div className="ms-3">
                                  <h6 className="mb-0">{tdata.name}</h6>
                                  <span className="text-muted">
                                    {tdata.cnic}
                                  </span>
                                  <h6 className="mb-0">{tdata.phone}</h6>
                                  <h6 className="mb-0">{tdata.address}</h6>
                                </div>
                              </div>
                            </td>

                            <td>
                              <div className="ms-3">
                                <h6 className="mb-0">{tdata.vehicleName}</h6>
                                <span className="text-muted">
                                  {tdata.numberPlate}
                                </span>
                                <h6 className="mb-0">
                                  Driver: {tdata.withDriver}
                                </h6>
                              </div>
                            </td>

                            <td>
                              <div className="ms-3">
                                <h6 className="mb-0">From: {tdata.fromCity}</h6>
                                <h6 className="mb-0">To: {tdata.toCity}</h6>
                                <span className="text-muted">
                                  Date In: {tdata.dateIn}
                                </span>
                                <h6 className="mb-0">
                                  Date Out: {tdata.dateOut}
                                </h6>
                              </div>
                            </td>

                            <td>
                              <button
                                type="button"
                                className="btn-success tableButton"
                              >
                                Accept
                              </button>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn-danger tableButton"
                              >
                                Reject
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </FullLayout>
      )}
    </div>
  );
}
