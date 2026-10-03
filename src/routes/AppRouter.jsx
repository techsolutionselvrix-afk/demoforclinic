import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import AppointmentFrom from "../pages/Appointment/AppointmentFrom";
import Doctors from "../pages/Doctors/Doctors";
import Contact from "../pages/Contact/Contact";

const AppRouter = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/appointment",
      element: <AppointmentFrom />,
    },
    {
      path: "/doctors",
      element: <Doctors />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
