import Head from "next/head";
import FullLayout from "../../components/UserDashboard/components/Layout/FullLayout";
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
  const vehicleData = [
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
      dateOut:"13th March 2022"
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
      dateOut:"13th March 2022"
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
      dateOut:"13th March 2022"
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
      dateOut:"13th March 2022"
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
      dateOut:"13th March 2022"
    },
     
  ];
  const driverData = [
    {
      avatar: user1,
      name: "Arslan Ahmad",
      cnic: "343031242653",
      phone: "03092016575",
      address: "Shershaw Coloni Raiwind Road Lahore",
      DriverName: "Shahzaib Manzoor",
      PhoneNo: "03160148151",
      DriverExp: "10",
      fromCity: "Lahore",
      toCity: "Gujranwala",
      dateIn: "12th March 2022",
      dateOut:"13th March 2022"
    },
    {
      avatar: user2,
      name: "Arslan Ahmad",
      cnic: "343031242653",
      phone: "03092016575",
      address: "Shershaw Coloni Raiwind Road Lahore",
      DriverName: "Shahzaib Manzoor",
      PhoneNo: "03160148151",
      DriverExp: "10",
      fromCity: "Lahore",
      toCity: "Gujranwala",
      dateIn: "12th March 2022",
      dateOut:"13th March 2022"
    },
    {
      avatar: user3,
      name: "Arslan Ahmad",
      cnic: "343031242653",
      phone: "03092016575",
      address: "Shershaw Coloni Raiwind Road Lahore",
      DriverName: "Shahzaib Manzoor",
      PhoneNo: "03160148151",
      DriverExp: "10",
      fromCity: "Lahore",
      toCity: "Gujranwala",
      dateIn: "12th March 2022",
      dateOut:"13th March 2022"
    },
    {
      avatar: user4,
      name: "Arslan Ahmad",
      cnic: "343031242653",
      phone: "03092016575",
      address: "Shershaw Coloni Raiwind Road Lahore",
      DriverName: "Shahzaib Manzoor",
      PhoneNo: "03160148151",
      DriverExp: "10",
      fromCity: "Lahore",
      toCity: "Gujranwala",
      dateIn: "12th March 2022",
      dateOut:"13th March 2022"
    },
    {
      avatar: user4,
      name: "Arslan Ahmad",
      cnic: "343031242653",
      phone: "03092016575",
      address: "Shershaw Coloni Raiwind Road Lahore",
      DriverName: "Shahzaib Manzoor",
      PhoneNo: "03160148151",
      DriverExp: "10",
      fromCity: "Lahore",
      toCity: "Gujranwala",
      dateIn: "12th March 2022",
      dateOut:"13th March 2022"
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
                  <CardTitle tag="h5">Vehicle Booking Requests</CardTitle>
                  <div className="table-responsive userScrollit">
                    <Table className="text-nowrap mt-3 align-middle" borderless>
                      <thead>
                        <tr>
                          <th>Customer Details</th>                        
                          <th>Vehicle Details</th>
                          <th>Booking Details</th>
                          <th>Cancel Booking</th>
                        </tr>
                      </thead>

                      <tbody>
                        {vehicleData.map((vehicleData, index) => (
                          <tr key={index} className="border-top">
                            <td>
                              <div className="d-flex align-items-center p-2">
                                <div >
                                <Image
                                  src={vehicleData.avatar}
                                  className="rounded-circle"
                                  alt="avatar"
                                  width="45"
                                  height="45"
                                />
                                </div>
                                <div className="ms-3">
                                  <h6 className="mb-0">{vehicleData.name}</h6>
                                  <span className="text-muted">
                                    {vehicleData.cnic}
                                  </span>
                                  <h6 className="mb-0">{vehicleData.phone}</h6>
                                  <h6 className="mb-0">{vehicleData.address}</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="ms-3">
                                <h6 className="mb-0">{vehicleData.vehicleName}</h6>
                                <span className="text-muted">
                                  {vehicleData.numberPlate}
                                </span>
                                <h6 className="mb-0">
                                  Driver: {vehicleData.withDriver}
                                </h6>
                              </div>
                            </td>

                            <td>
                              <div className="ms-3">
                                <h6 className="mb-0">From: {vehicleData.fromCity}</h6>
                                <h6 className="mb-0">To: {vehicleData.toCity}</h6>
                                <span className="text-muted">
                                  Date In: {vehicleData.dateIn}
                                </span>
                                <h6 className="mb-0">
                                  Date Out: {vehicleData.dateOut}
                                </h6>
                              </div>
                            </td>

                            <td>
                              <button
                                type="button"
                                className="btn-danger tableButton"
                              >
                                Cancel
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
            <div className="col-md-12 col-lg-12">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">Driving Booking Requests</CardTitle>
                  <div className="table-responsive userScrollit">
                    <Table className="text-nowrap mt-3 align-middle" borderless>
                      <thead>
                        <tr>
                          <th>Customer Details</th>                        
                          <th>Driver Details</th>
                          <th>Booking Details</th>
                          <th>Cancel Booking</th>
                        </tr>
                      </thead>

                      <tbody>
                        {driverData.map((driverData, index) => (
                          <tr key={index} className="border-top">
                            <td>
                              <div className="d-flex align-items-center p-2">
                                <div >
                                <Image
                                  src={driverData.avatar}
                                  className="rounded-circle"
                                  alt="avatar"
                                  width="45"
                                  height="45"
                                />
                                </div>
                                <div className="ms-3">
                                  <h6 className="mb-0">{driverData.name}</h6>
                                  <span className="text-muted">
                                    {driverData.cnic}
                                  </span>
                                  <h6 className="mb-0">{driverData.phone}</h6>
                                  <h6 className="mb-0">{driverData.address}</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                            <div className="ms-3">
                                  <h6 className="mb-0">{driverData.DriverName}</h6>
                                  <span className="text-muted">
                                    {driverData.PhoneNo}
                                  </span>
                                  <h6 className="mb-0">Experience: {driverData.DriverExp} Years</h6>
                                </div>
                            </td>

                            <td>
                              <div className="ms-3">
                                <h6 className="mb-0">From: {driverData.fromCity}</h6>
                                <h6 className="mb-0">To: {driverData.toCity}</h6>
                                <span className="text-muted">
                                  Date In: {driverData.dateIn}
                                </span>
                                <h6 className="mb-0">
                                  Date Out: {driverData.dateOut}
                                </h6>
                              </div>
                            </td>

                            <td>
                              <button
                                type="button"
                                className="btn-danger tableButton"
                              >
                                Cancel
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
