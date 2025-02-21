import { Box, Button, Container, Stack, Typography } from "@mui/material";
// import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import line from "../../../assets/line.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Scrollbar, Autoplay } from "swiper/modules";
// import cardBackground from "../../../assets/cardBackground.png";
import blueCircle2 from "../../../assets/blueCircle2.png";
import blueSquare2 from "../../../assets/blueSquare2.png";
import blueLine from "../../../assets/blue squiggly lines.png";
import orangeSqure from "../../../assets/aboutImg1.png";
import Diagnostics from "../../../assets/DiagnosticsImg.png";
import Treatment from "../../../assets/TreatmentImg.png";
import Surgery from "../../../assets/SurgeryImg.png";
import Vaccine from "../../../assets/VaccineImg.png";
import Emergency from "../../../assets/EmergencyImg.png";
import ServicesCards from "./ServiceCards/servicesCards";
import { useNavigate } from "react-router-dom";
export default function Services() {
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
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={blueCircle2}
        style={{
          width: "70px",
          opacity: "0.3",
          position: "absolute",
          left: "5%",
          top: "1%",
          animation: "move5 1.5s infinite alternate-reverse",
          zIndex: 1, // Resmi daha geriye atar
        }}
      />
      <img
        src={blueSquare2}
        style={{
          width: "70px",
          opacity: "0.9",
          position: "absolute",
          left: "45%",
          top: "1%",
          animation: "move2 2.5s infinite alternate-reverse",
          zIndex: 2, // Resmi daha geriye atar
        }}
      />
      <img
        src={blueLine}
        style={{
          width: "86px",
          opacity: "0.9",
          position: "absolute",
          left: "55%",
          bottom: "6%",
          animation: "move1 2.5s infinite alternate-reverse",
          zIndex: 2, // Resmi daha geriye atar
        }}
      />
      <img
        src={orangeSqure}
        style={{
          width: "86px",
          opacity: "0.9",
          position: "absolute",
          left: "5%",
          bottom: "1%",
          animation: "move1 3.5s infinite alternate-reverse",
          zIndex: 2, // Resmi daha geriye atar
        }}
      />
      <Container sx={{ width: "100%" }}>
        <Stack
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: { md: "column", lg: "row" },
            width: "100%",
            height: { md: "auto", lg: "85vh" },
            gap: "25px",
          }}
        >
          {/*Left Side */}
          <Box
            sx={{
              width: { md: "100%", lg: "45%" },
              pt: { md: "0px", lg: "100px" },
              mb: { md: "40px" },
            }}
          >
            <Typography
              sx={{
                width: "fit-content",
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
                position: "relative",
                zIndex: 2,
              }}
            >
              Services
            </Typography>

            <Typography
              sx={{
                fontSize: "36px",
                color: "var(--main-color)",
                fontWeight: "600",
                mb: "10px",
              }}
            >
              We Cover A Big Variety Of Medical Services
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "24px",
                pl: "2px",
                mb: "40px",
              }}
            >
              We provide the special tips and advice’s of health care treatment
              and high level of best.
            </Typography>

            <Button
              sx={{
                backgroundColor: "#f17732",
                color: "#fff",
                borderRadius: "8px",
                borderWidth: "2px",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "1.2",
                padding: "15px 30px",
                textDecoration: "none",
                transition: "all .5s",
                "&:hover": {
                  backgroundColor: "#f38b51",
                  scale: 0.97,
                },
              }}
              onClick={() => {
                navigate("/service");
              }}
            >
              All Services
            </Button>
          </Box>

          {/*Right Side */}
          <Box
            sx={{
              width: { md: "100%", lg: "55%" },
              height: "auto",
              position: "relative",
            }}
          >
            <Box
              sx={{
                background: "var(--btn-color)",
                borderRadius: "40px 0 0 40px",
                height: "100%",
                width: { md: "150%", lg: "110%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // position: { md: "blok", lg: "absolute" },
                // right: "-10vw",
                // top: 0,
                zIndex: 0,
              }}
            >
              <Swiper
                slidesPerView="auto"
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                modules={[Pagination, Scrollbar, Autoplay]}
                breakpoints={{
                  450: { slidesPerView: 1.5 }, // 320px ve daha küçük ekranlar için 1 kart göster
                  750: { slidesPerView: 2.5 }, // 480px ve daha küçük ekranlar için 2 kart göster
                  900: { slidesPerView: 4 }, // 768px ve daha küçük ekranlar için 3 kart göster
                  1200: { slidesPerView: 3.5 }, // 768px ve daha küçük ekranlar için 3 kart göster
                  1250: { slidesPerView: 2.5 }, // 1200px ve daha büyük ekranlar için 5 kart göster
                }}
                style={{
                  borderRadius: "20px",
                  padding: "10px",
                  height: "auto",
                  width: "100%",
                }}
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index} style={{ width: "40%" }}>
                    {/* <Box
                      sx={{
                        position: "relative",
                        display: "inline-block",
                        transition: "all 0.5s ease-in-out",
                        backgroundColor: "transparent",

                        "&:hover img": {
                          borderColor: "#f17732", // Hover olunca border rengi
                          boxShadow: "0px 0px 15px rgb(201, 192, 187)", // Glow efekti
                          transition: "all 0.4s ease-in-out",
                          animation: "shake 0.4s ease-in-out",
                        },
                        "& .text": {
                          transition: "all 0.4s ease-in-out",
                        },
                        "&:hover .text": {
                          color: "#fff",
                        },
                      }}
                    >
                      <Card
                        sx={{
                          width: "250px",
                          height: "400px",
                          display: "flex",
                          gap: 2,
                          flexDirection: "column",
                          backgroundColor: "#fff",
                          backgroundImage: url(${cardBackground}),
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "100%",
                          borderRadius: "20px",
                          boxShadow: "1px 1px 50px rgba(0, 0, 0, .08)",
                          overflow: "hidden",
                          padding: "40px",
                          cursor: "pointer",
                          transition: "all 0.5s ease-in-out",

                          "&:hover": {
                            backgroundColor: "transparent",
                            scale: "0.96",
                          },
                        }}
                      >
                        <img
                          className="img"
                          style={{
                            width: "130px",
                            height: "130px",
                            borderRadius: "12px",
                            border: "2px solid rgba(86, 90, 207, .1)",
                          }}
                          src={service.img}
                        />
                        <Typography
                          className="text"
                          sx={{
                            fontSize: "29px",
                            fontWeight: "600",
                            color: "var(--main-color)", // Varsayılan renk
                            transition: "all 0.4s ease-in-out",
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          className="text"
                          sx={{
                            fontSize: "15px",
                            fontWeight: "400",
                            transition: "all 0.4s ease-in-out",
                          }}
                        >
                          {service.description}
                        </Typography>
                        <Button
                          sx={{
                            textTransform: "none",
                            borderRadius: "8px",
                            border: "1px solid #e1e2f6",
                            fontSize: "14px",
                            fontWeight: 600,
                            lineHeight: "1.2",
                            padding: "15px 30px",
                            transition: "all 0.5s",
                            backgroundColor:
                              service.title === "Diagnostics"
                                ? "#565acf"
                                : "#e1e2f6",
                            color:
                              service.title === "Diagnostics"
                                ? "#fff"
                                : "#565acf",

                            "&:hover": {
                              backgroundColor: "#fff",
                              borderColor: "#565acf",
                              color: "#565acf",
                            },
                          }}
                        >
                          View More
                        </Button>
                      </Card>
                    </Box> */}

                    <ServicesCards data={service} width={"90%"} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
}