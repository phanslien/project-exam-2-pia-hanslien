import styles from "./Navbar.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import React from "react";
import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";
import Accommodation from "../../pages/accommodation/Accommodation";
import Login from "../../pages/login/Login";
import Dashboard from "../../pages/dashboard/Dashboard";
import HotelDetails from "../../pages/hotelDetails/Details";
import Enquiry from "../../pages/enquiry/Enquiry";

function Navbar() {
  return (
    <Router>
      <nav className={styles.container_navbar}>
        <div className={styles.navbar}>
        <div>
          <NavLink to="/">
          <p className={styles.navbar_logo}>Holidaze</p>
            </NavLink>
        </div>
        <div>
          <ul className={styles.navbar_list}>
            <li>
              <NavLink to="/" className={styles.navbar_link}>
                Home
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink to="/accommodation" className={styles.navbar_link}>
                Accommodation
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink to="/contact" className={styles.navbar_link}>
                Contact
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink to="/login" className={styles.navbar_link}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        </div>
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="accommodation/details/:id" element={<HotelDetails />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
