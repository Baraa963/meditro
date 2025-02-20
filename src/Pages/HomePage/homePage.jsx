/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "../../Components/Nav/navbar";
import AboutUs from "../../Components/Home/AboutUs/aboutUs";
import WeWorks from "../../Components/Home/WeWorks/weWorks";
import Hero1 from "../../Components/Home/Hero/hero1";
import Shape from "../../assets/shape1.png";
import "./homePage.css";
import BookAppointment from "../../Components/Home/BookAppointment/bookAppointment";
import Services from "../../Components/Home/Services/services";
import Testimonial from "../../Components/Home/Testimonial/testimonial";
import LatestNews from "../../Components/Home/LatestNews/latestNews";
import Footer from "../../Components/Footer/footer";
import {Stack } from "@mui/material";
import { useEffect } from "react";
export default function homePage() {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Hero1 />
        <img style={{ width: "100%" }} src={Shape} />
      </div>
      <Stack sx={{ display: "flex", gap: 15 }}>
        <AboutUs />
        <WeWorks />
        <BookAppointment />
        <Services />
        <Testimonial />
        <LatestNews />
        <Footer />
      </Stack>
    </>
  );
}
