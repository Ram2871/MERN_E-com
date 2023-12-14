import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { IoIosLogOut } from "react-icons/io";
import { useAuth } from "../../context/auth";
import { Badge } from "antd";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const access_token = localStorage.getItem("access_token");
  const user = localStorage.getItem("user-details");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user-details");
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    setTimeout(() => {
      toast.success("Logout Successfully.");
    }, 1000);
    navigate("/login");
  };
  return (
    <>
      <header>
        <Toaster />
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link to="/" className="navbar-brand">
                🛒 Shopmon
              </Link>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link ">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link ">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link ">
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/policy" className="nav-link ">
                    Policy
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/cart" className="nav-link ">
                    <Badge count={5} showZero offset={[10, -5]}>
                      Cart
                    </Badge>
                  </NavLink>
                </li>

                {!auth?.user ? (
                  <>
                    <li className="nav-item ms-4">
                      <NavLink to="/register" className="nav-link">
                        Register
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link">
                        Login
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item ms-4">
                      <MDBDropdown>
                        <MDBDropdownToggle
                          color="link"
                          className="nav-link"
                          size="sm"
                        >
                          {auth?.user?.name}
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                          <NavLink
                            to={`${
                              auth.user.role === "1" ? "/admin" : "/user"
                            }/dashboard`}
                          >
                            <MDBDropdownItem link>Dashboard</MDBDropdownItem>
                          </NavLink>
                          <MDBDropdownItem onClick={handleLogout} link>
                            Logout <IoIosLogOut className="fs-6" />
                          </MDBDropdownItem>
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
