import { Box, Container, Typography } from "@mui/material";

import blueLine from "../../../assets/blue squiggly lines.png";
import traingle from "../../../assets/traingle.png";
import line from "../../../assets/line.png";
import doctor1 from "../../../assets/doc4.jpg";
import doctor2 from "../../../assets/doc2.jpg";
import doctor3 from "../../../assets/doc5.jpg";

import DoctorCards from "./DoctorCards/doctorCards";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function ourDoctor() {
  const cardsData = [
    {
      DocImg: doctor1,
      DocName: "Dr. Addition Smith",
      specialty: "Dentist",
      icons: [faFacebook, faXTwitter, faInstagram],
    },
    {
      DocImg: doctor2,
      DocName: "Dr. Sonar Moyna",
      specialty: "Chiropractor",
      icons: [faFacebook, faXTwitter, faInstagram],
    },
    {
      DocImg: doctor3,
      DocName: "Dr. David Benjamin",
      specialty: "Cardiologist",
      icons: [faFacebook, faXTwitter, faInstagram],
    },
  ];
  return (
    <Container sx={{ pb: 10, display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          position: "relative",
        }}
      >
        <img
          src={blueLine}
          style={{
            width: "10%",
            opacity: "0.9",
            position: "absolute",
            right: "15%",
            top: "0%",
            animation: "move1 2.5s infinite alternate-reverse",
          }}
        />
        <img
          src={traingle}
          style={{
            width: "6%",
            opacity: "0.9",
            position: "absolute",
            left: "15%",
            bottom: "20%",
            animation: "move6 4s infinite alternate-reverse",
          }}
        />
        <Typography
          sx={{
            fontSize: "22px",
            color: "var(--orange-color)",
            mb: "10px",
            backgroundImage: `url(${line})`,
            backgroundPosition: "50%",
            backgroundRepeat: "repeat",
            display: "inline-block",
            fontWeight: "700",
            marginBottom: "15px",
            padding: "3px 15px",
            position: "relative", // İçindeki metni yukarı taşır
            zIndex: 2, // Metni öne getirir
          }}
        >
          Our Doctor
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "var(--main-color);",
            mb: "25px",
            fontSize: {
              xs: "28px",
              sm: "33px",
              md: "42px",
            },
          }}
        >
          Meet Best Doctors
        </Typography>
      </Box>

      {/*Doctor Cards */}
      <DoctorCards cardsData={cardsData} />
    </Container>
  );
}
