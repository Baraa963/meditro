import { Box, Button, Card, Container, Typography } from "@mui/material";
import line from "../../../assets/line.png";
import TestimonialImg from "../../../assets/Testimonial_Img.png";
import Doc1 from "../../../assets/doc1.jpg";
import Doc2 from "../../../assets/doc2.jpg";
import Doc3 from "../../../assets/doc3.jpg";
import Doc4 from "../../../assets/doc4.jpg";
import Doc5 from "../../../assets/doc5.jpg";
import Doc6 from "../../../assets/doc6.jpg";
import plusImg from "../../../assets/plus.png";
import blueCircle from "../../../assets/blue circle.png";
import square from "../../../assets/square1.png";
import orangeCircle from "../../../assets/orangeCircle.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import the autoplay CSS
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
export default function Testimonial() {
  const swiperRef = useRef(null); // Create a reference for the Swiper instance

  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: { sm: "start", md: "center" },
          position: "relative",
        }}
      >
        <img
          src={plusImg}
          style={{
            width: "7%",
            position: "absolute",
            top: "-10%",
            left: "7%",
            animation: "move1 5s linear infinite",
          }}
        />
        <img
          src={blueCircle}
          style={{
            width: "8%",
            position: "absolute",
            top: "0%",
            right: "4%",
            animation: "move2 5s linear infinite",
          }}
        />

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
          Testimonial
        </Typography>

        <Typography
          sx={{
            fontSize: "36px",
            color: "var(--main-color)",
            fontWeight: "700",
            mb: "10px",
            width: { md: "100%", lg: "50%" },
            textAlign: { sm: "start", md: "center" },
            lineHeight: 1.3,
            wordSpacing: 2,
          }}
        >
          See What Are The Patients Saying About us
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
          alignItems: "center",
          justifyContent: "end",
          gap: 5,
          position: "relative",
        }}
      >
        <img
          src={orangeCircle}
          style={{
            width: "6%",
            position: "absolute",
            bottom: "-3%",
            right: "2%",
            animation: "move2 2.5s infinite alternate-reverse",
          }}
        />
        <img
          src={square}
          style={{
            width: "9%",
            position: "absolute",
            bottom: "-3%",
            left: "2%",
            animation: "move2 2.5s infinite alternate-reverse",
          }}
        />
        <Box
          sx={{
            width: { sm: "100", md: "50%", lg: "40%" },
            display: "flex",
            flexDirection: "row",
            position: "relative",
          }}
        >
          <img
            src={TestimonialImg}
            style={{
              width: "100%",
            }}
          />
          <img
            src={Doc1}
            style={{
              width: "14%",
              position: "absolute",
              top: "0%",
              right: "43%",
              borderRadius: "50%",
            }}
          />
          <img
            src={Doc2}
            style={{
              width: "14%",
              position: "absolute",
              top: "20%",
              right: "7%",
              borderRadius: "50%",
            }}
          />
          <img
            src={Doc3}
            style={{
              width: "14%",
              position: "absolute",
              top: "20%",
              left: "7%",
              borderRadius: "50%",
            }}
          />
          <img
            src={Doc4}
            style={{
              width: "14%",
              position: "absolute",
              bottom: "20%",
              right: "7%",
              borderRadius: "50%",
            }}
          />
          <img
            src={Doc5}
            style={{
              width: "14%",
              position: "absolute",
              bottom: "0%",
              left: "43%",
              borderRadius: "50%",
            }}
          />
          <img
            src={Doc6}
            style={{
              width: "14%",
              position: "absolute",
              bottom: "20%",
              left: "7%",
              borderRadius: "50%",
            }}
          />
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "80vw", lg: "55%" },
            height: "auto",
          }}
        >
          <Swiper
            ref={swiperRef} // Reference the Swiper instance
            modules={[Navigation, Autoplay]}
            loop={true}
            slidesPerView={1}
            autoplay={{
              delay: 4000, // Set the autoplay delay to 3 seconds
              disableOnInteraction: false, // Allow autoplay to continue after interaction
            }}
            style={{
              borderRadius: "20px",
              width: "100%",
              height: "auto",
            }}
          >
            {[...Array(6)].map((_, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    backgroundColor: "var(--orange-color)",
                    maxWidth: "90%",
                    width: "90vw",
                    height: "auto",
                    borderRadius: "40px 0 40px 40px",
                    flexDirection: "column",
                    m: "50px 20px 20px",
                    p: { xs: "25px", sm: "50px" },
                    display: "flex",
                    gap: 1,
                    position: "relative",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    style={{
                      bottom: "20px",
                      color: "#fff",
                      fontSize: "92px",
                      fontWeight: "900",
                      lineHeight: "92px",
                      opacity: 0.3,
                      position: "absolute",
                      right: "40px",
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                      fontStyle: "italic",
                      fontWeight: "400",
                      lineHeight: "28px",
                      mb: "40px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecena ssuspendisse ultrices gravida.
                  </Typography>

                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "28px",
                      fontWeight: "600",
                    }}
                  >
                    John Deo
                  </Typography>

                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: "600",
                      mb: 0,
                      textTransform: "uppercase",
                    }}
                  >
                    patient
                  </Typography>
                </Card>
              </SwiperSlide>
            ))}

            <Box
              sx={{
                pl: "20px",
                width: "170px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={() => swiperRef.current.swiper.slidePrev()}
                sx={{
                  backgroundColor: "#ffe4d5", // doğru kullanım
                  borderRadius: "12px",
                  bottom: 0,
                  color: "#f17732",
                  fontSize: "24px", // İkon boyutunu uygun şekilde ayarladık
                  height: "50px",
                  transition: "all .5s", // Geçiş efektini koruduk
                  width: "50px",
                  display: "flex", // İkonun düzgün görünmesi için flex ekledik
                  justifyContent: "center", // İkonu ortaladık
                  alignItems: "center", // İkonu dikeyde ortaladık
                }}
              >
                <ChevronLeftIcon />
              </Button>

              <Button
                onClick={() => swiperRef.current.swiper.slideNext()}
                sx={{
                  backgroundColor: "#ffe4d5", // doğru kullanım
                  borderRadius: "12px",
                  bottom: 0,
                  color: "#f17732",
                  fontSize: "24px", // İkon boyutunu uygun şekilde ayarladık
                  height: "50px",
                  transition: "all .5s", // Geçiş efektini koruduk
                  width: "50px",
                  display: "flex", // İkonun düzgün görünmesi için flex ekledik
                  justifyContent: "center", // İkonu ortaladık
                  alignItems: "center", // İkonu dikeyde ortaladık
                }}
              >
                <ChevronRightIcon />
              </Button>
            </Box>
          </Swiper>
        </Box>
      </Box>
    </Container>
  );
}
