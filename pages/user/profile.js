import React from "react";
import { useState ,useEffect} from "react";
import { Card, CardTitle, CardBody } from "reactstrap";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import FullLayout from "../../components/UserDashboard/components/Layout/FullLayout";
import user from "../../components/TransporterDashboard/images/users/user1.jpg";
function Profile() {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const user = useSelector(({ auth }) => auth.user);
  const router = useRouter();
  const [loaded, setLoaded]=useState(false);
  const [loading, setLoading] = useState(false);
  const token = useSelector(({ auth }) => auth.token);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    cnic: "",
    password: "",
    confirmpassword: "",
    photoUrl: "",
    accountType: "",
  });

  const handleData = (key, value) => {
    setData({ ...data, [key]: value });
  };
  const handleLoading = () => {
    setLoading(false);
  };

  useEffect(() => {

    if (isLoggedIn||!isLoggedIn) {
      setLoaded(true);
    }
  }, [isLoggedIn])

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: data.name,
      email: data.email,
      phone_no: data.phone,
      city: data.address,
      password: data.password,
      photoUrl: data.photoUrl,
      user_type: data.accountType,
    };
    setLoading(true);
    dispatch(userSignUpRequest(payload, handleLoading));
  };

  useEffect(()=>{
    if(loaded){
    if(!isLoggedIn){
      router.push("/login")
    }
  }
  },[isLoggedIn,loaded]);

  return (
    <div>
      {!isLoggedIn? <div className="ftco-section">Please Login First</div> : 
      <FullLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <Card className="bg-white">
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                <i className="bi bi-person me-2" />
                Edit Profile
              </CardTitle>
              <CardBody>
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  className="signin-form row"
                >
                  <div className="col-md-6 form-group mb-3">
                    <label className="label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={user.name}
                      onChange={(e) => handleData("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mb-3">
                    <label className="label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={user.email}
                      onChange={(e) => handleData("email", e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mb-3">
                    <label className="label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      value={user.phone_no}
                      onChange={(e) => handleData("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mb-3">
                    <label className="label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      value={user.address}
                      onChange={(e) => handleData("address", e.target.value)}
                      required
                    />
                  </div>
                 
                  <div className="col-md-6 form-group mb-3">
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
                  <div className="col-md-6 form-group mb-3">
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

                  <div className="col-md-6 form-group mb-3 form-group vehicleButton">
                    <button type="submit" className="signin-btn">
                      Update Profile
                    </button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>

          <div className="col-md-4">
            <Card className="bg-white">
              <CardTitle
                tag="h6"
                className="border-bottom text-center p-3 mb-0 "
              >
                <i className="bi bi-person me-2" />
                Your Profile
              </CardTitle>
              <CardBody>
                <div className="justify-content-center row">
                  <div className="transporterImg">
                    <Image
                      src={user.photoUrl}
                      alt="hero banner"
                      height={300}
                      width={300}
                      className="rounded-circle"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-danger">{user.name}</h3>
                  <div className="d-flex row">
                    <h5 className="text-muted"> {user.email}</h5>
                  </div>
                  <div>
                    <h6 className="text-muted"> {user.phone_no}</h6>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </FullLayout>}
    </div>
    
  );
}

export default Profile;
