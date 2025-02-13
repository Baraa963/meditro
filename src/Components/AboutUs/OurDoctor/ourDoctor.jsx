import { Box, Card, Container, IconButton, Typography } from "@mui/material";
import line from "../../../assets/line.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ourDoctorCardBg2 from "../../../assets/ourDoctorCardBg2.png";
import ourDoctorCardBg1 from "../../../assets/ourDoctorCardBg1.png";
import doctor1 from "../../../assets/doc4.jpg";
import doctor2 from "../../../assets/doc2.jpg";
import doctor3 from "../../../assets/doc5.jpg";
import maskImage from "../../../assets/mask-img.png";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function ourDoctor() {
  const cardsData = [
    { DocImg: doctor1, DocName: "Dr. Addition Smith", specialty: "Dentist" },
    { DocImg: doctor2, DocName: "Dr. Mahfuz Riad", specialty: "Chiropractor" },
    {
      DocImg: doctor3,
      DocName: "Dr. David Benjamin",
      specialty: "Cardiologist",
    },
  ];
  return (
    <Container sx={{ pb: 15, display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
        }}
      >
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

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems:'center',
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {cardsData.map((card, index) => {
          return (
            <Card
              key={index}
              sx={{
                backgroundColor: "#fff",
                border: "2px solid rgba(86, 90, 207, .2)",
                borderRadius: "10px",
                padding: "20px",
                transition: "all .5s",
                width: { xs:'80%',sm: "60%", md: "40%", lg: "31.4%" },
                height: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems:'center',
                gap: 4,
                "&:hover": {
                  border: "2px solid #fff",
                  boxShadow: "0 10px 30px 0 rgba(58, 64, 234, 0.57)",
                  scale: "0.95",
                },
                "&:hover .opacity": {
                  opacity: "1",
                },
              }}
            >
              <Box
                className="cardWrapper"
                sx={{ width: "100%", height: "auto" }}
              >
                <Box sx={{ position: "relative", width: "100%" }}>
                  <Box
                    className="opacity"
                    component="img"
                    src={ourDoctorCardBg2}
                    sx={{
                      width: "100%",
                      opacity: "0.3",
                      transition: "all 0.7s",
                    }}
                  />
                  <Box
                    className="opacity"
                    component="img"
                    src={ourDoctorCardBg1}
                    sx={{
                      width: "72%",
                      opacity: "0.3",
                      position: "absolute",
                      top: '9%',
                      left: '15%',
                      transition: "all 0.7s",
                      "&:hover": {
                        opacity: "1",
                      },
                    }}
                  />
                  <Box
                    component="img"
                    src={card.DocImg}
                    sx={{
                      maskImage: `url(${maskImage})`,
                      maskRepeat: "no-repeat",
                      maskSize: "100%",
                      maskPosition: "center center",
                      WebkitMaskImage: `url(${maskImage})`,
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "100%",
                      WebkitMaskPosition: "center center",
                      width: "62%",
                      position: "absolute",
                      top: '16%',
                      left: '20%',
                    }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Typography
                  sx={{
                    color: "var(--main-color)",
                    fontWeight: "700",
                    fontSize: "24px",
                  }}
                >
                  {card.DocName}
                </Typography>
                <Typography
                  sx={{
                    color: "var(--orange-color)",
                    fontWeight: "500",
                    fontSize: "18px",
                  }}
                >
                  {card.specialty}
                </Typography>

                <Box sx={{ color: "#f17732", display: "flex", gap: 3 }}>
                  <IconButton
                    sx={{ p: "10px", backgroundColor: "var(--btn-color)",transition:'all 0.6s' }}
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="l"
                      color="#fff"
                      cursor="pointer"
                    />
                  </IconButton>
                  <IconButton
                    sx={{ p: "10px", backgroundColor: "var(--btn-color)" }}
                  >
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      size="l"
                      color="#fff"
                      cursor="pointer"
                    />
                  </IconButton>
                  <IconButton
                    sx={{ p: "10px", backgroundColor: "var(--btn-color)" }}
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="l"
                      color="#fff"
                      cursor="pointer"
                    />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
}
