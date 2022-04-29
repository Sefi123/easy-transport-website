import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import LogoWhite from "../../images/logos/amplelogowhite.svg";
import user1 from "../../images/users/user1.jpg";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ showMobmenu }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const user = useSelector(({ auth }) => auth.user);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="secondary" dark expand="md" className="dashnav">
      <div className="d-flex align-items-center">
        <Button color="secondary" className="d-lg-none" onClick={showMobmenu}>
          <i className="fa fa-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="secondary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto">
         <h4 className="text-light">Welcome {user.name}</h4>
        </Nav>
        {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}> */}
          {/* <DropdownToggle color="secondary"> */}
            <div >
              <Image
                src={user1}
                alt="profile"
                className="rounded-circle"
                width="40"
                height="40"
              />
            </div>
          {/* </DropdownToggle> */}
          {/* <DropdownMenu>
            <DropdownItem header>Info</DropdownItem>
            <DropdownItem>My Account</DropdownItem>
            <DropdownItem>Edit Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>My Balance</DropdownItem>
            <DropdownItem>Inbox</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu> */}
        {/* </Dropdown> */}
      </Collapse>
    </Navbar>
  );
};

export default Header;
