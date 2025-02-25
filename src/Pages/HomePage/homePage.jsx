/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "../../Components/Nav/navbar";
import AboutUs from "../../Components/Home/AboutUs/aboutUs";
import WeWorks from "../../Components/Home/WeWorks/weWorks";
import Hero1 from "../../Components/Home/Hero/hero1";
import Shape from "../../assets/shape1.png";
import BookAppointment from "../../Components/Home/BookAppointment/bookAppointment";
import Services from "../../Components/Home/Services/services";
import Testimonial from "../../Components/Home/Testimonial/testimonial";
import LatestNews from "../../Components/Home/LatestNews/latestNews";
import Footer from "../../Components/Footer/footer";
import { Box, Stack } from "@mui/material";
import { useEffect } from "react";

import bgImg from "../../assets/bg1.jpg";

export default function homePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box
        sx={{
          position: "relative", // İçindeki içeriklerin doğru konumlanması için
          backgroundImage: `url(${bgImg})`, // Ana arka plan resmi
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "auto",
          "&::after": {
            content: '""', // Pseudo-element için boş içerik gereklidir
            position: "absolute",
            bottom: 0, // Sayfanın alt kısmında olmasını istiyorsan
            left: 0, // Sayfanın sol tarafına sabitlemek için
            width: "100%", // Tam genişlik
            height: "25%", // Resmin doğal oranlarını koruması için
            backgroundImage: `url(${Shape})`, // Shape resmini ekle
            backgroundSize: "contain", // Resmi orantılı şekilde sığdır
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom", // Resmi aşağı hizala
            zIndex: 1, // İçeriğin altında kalması için
          },
        }}
      >
        <Navbar />
        <Hero1 />
        <img style={{ width: "100%" }} src={Shape} />
      </Box>
      <Stack sx={{ display: "flex", gap: 10 }}>
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
