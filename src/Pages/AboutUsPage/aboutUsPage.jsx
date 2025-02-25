import AboutUsHeader from "../../Components/Header/header";
import AboutUs from "../../Components/Home/AboutUs/aboutUs";
import Testimonial from "../../Components/Home/Testimonial/testimonial";
import LatestNews from "../../Components/Home/LatestNews/latestNews";
import Section1 from "../../Components/AboutUs/Section1/section1";
import OurDoctor from "../../Components/AboutUs/OurDoctor/ourDoctor";
import Footer from '../../Components/Footer/footer';

import { useEffect } from "react";
import { Stack } from "@mui/material";

export default function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Stack sx={{display:'flex',gap:10}}>
      <AboutUsHeader ComponentName='About Us' Path='about-us'/>
      <AboutUs />
      <Section1 />
      <OurDoctor/>
      <Testimonial />
      <LatestNews />
      <Footer/>
    </Stack>
  );
}
