import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getToken } from "../../context/helpers";
import Dashboard from "../../pages/dashboard/Dashboard";
import Home from "../../pages/home/Home";
import SignIn from "../../pages/signin/SignIn";
import Accommodation from "../../pages/accommodation/Accommodation";
import Contact from "../../pages/contact/Contact";
import Enquiry from "../../pages/enquiry/Enquiry";
import HotelDetails from "../../pages/hotelDetails/Details";

const NavRoutes = () => {
  return (
    <Routes>
      <Route exact path="/accommodation" element={<Accommodation />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="accommodation/details/:id" element={<HotelDetails />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/dashboard"
        element={getToken() ? <Dashboard /> : <Navigate to="/signin" />}
      />
    </Routes>
  );
};

export default NavRoutes;
