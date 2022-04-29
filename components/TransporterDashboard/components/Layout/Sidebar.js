import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Transporter.module.css"

const navigation = [
  {
    title: "Dashboard",
    href: "/transporter/dashboard",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Vehicles",
    href: "/transporter/vehicles",
    icon: "bi bi-truck",
  },
  {
    title: "Profile",
    href: "/transporter/profile",
    icon: "bi bi-person",
  },
  
];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <h3>Easy Transport</h3>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link href={navi.href}>
                <a
                  className={
                    location === navi.href ? "text-danger nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </a>
              </Link>
            </NavItem>
          ))}
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="#"
          >
            Log Out
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
