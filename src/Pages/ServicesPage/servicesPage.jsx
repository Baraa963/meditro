/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import ServicesHeader from "../../Components/Header/header";
import ServicesCards from "../../Components/Home/Services/ServiceCards/servicesCards";
import Section1 from '../../Components/AboutUs/Section1/section1'
import OurDoctor from "../../Components/AboutUs/OurDoctor/ourDoctor";
import LatestNews from "../../Components/Home/LatestNews/latestNews";
import Footer from "../../Components/Footer/footer";

import Diagnostics from "../../assets/DiagnosticsImg.png";
import Treatment from "../../assets/TreatmentImg.png";
import Surgery from "../../assets/SurgeryImg.png";
import Vaccine from "../../assets/VaccineImg.png";
import Emergency from "../../assets/EmergencyImg.png";
import { Box } from "@mui/material";
import { useEffect } from "react";
export default function servicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    {
      img: Diagnostics,
      title: "Diagnostics",
      description:
        "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    },
    {
      img: Treatment,
      title: "Treatment",
      description:
        "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    },
    {
      img: Surgery,
      title: "Surgery",
      description:
        "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    },
    {
      img: Vaccine,
      title: "Vaccine",
      description:
        "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    },
    {
      img: Emergency,
      title: "Emergency",
      description:
        "Phasellus venenatis porta rhoncus. Integer et viverra felis.",
    },
  ];
  return (
    <>
      <ServicesHeader ComponentName="Services" Path='service'/>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "var(--btn-color)",
          height: "auto",
          display: "flex",
          p: { xs: 3, sm: 8 }, 
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "30px 30px",
          }}
        >
          {services.map((service, index) => (
            <Box key={index} sx={{ width: "358px" }}>
              <ServicesCards data={service} width={"100%"} />
            </Box>
          ))}
        </Box>
      </Box>

    <Section1/>
    <OurDoctor/>
    <LatestNews/>
    <Footer/>
    </>
  );
}
