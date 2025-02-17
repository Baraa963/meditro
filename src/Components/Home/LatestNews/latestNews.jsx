import { Box, Button, Card, Container, Typography } from "@mui/material";
import line from "../../../assets/line.png";
import newsBg from "../../../assets/newsBg.png";
import blueCircle from "../../../assets/blueCircle2.png";
import traingle from "../../../assets/traingle.png";
import square from "../../../assets/aboutImg1.png";
import blueLine from "../../../assets/blue squiggly lines.png";

import newsImg1 from "../../../assets/newsImg1.jpg";
import newsImg2 from "../../../assets/newsImg2.jpg";
import newsImg3 from "../../../assets/newsImg3.jpg";
import newsImg4 from "../../../assets/newsImg4.jpg";
import newsImg5 from "../../../assets/newsImg5.jpg";
import dImg1 from "../../../assets/doc1.jpg";
import dImg2 from "../../../assets/doc2.jpg";
import dImg3 from "../../../assets/doc3.jpg";
import dImg4 from "../../../assets/doc4.jpg";
import dImg5 from "../../../assets/doc5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import the autoplay CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function latestNews() {
  const LatestNewsData = [
    {
      imgTitle: newsImg1,
      doctorImg: dImg1,
      doctorName: "John deo",
      tarih: "21 July 2021",
      description: "In this hospital there are special surgeons",
    },
    {
      imgTitle: newsImg2,
      doctorImg: dImg2,
      doctorName: "Peter Packer",
      tarih: "20 July 2021",
      description: "Can you get a diflucan prescription online?",
    },
    {
      imgTitle: newsImg3,
      doctorImg: dImg3,
      doctorName: "Sonar Moyna",
      tarih: "19 July 2021",
      description: "Why Is Skin Surgeon Considered Underrated",
    },
    {
      imgTitle: newsImg4,
      doctorImg: dImg4,
      doctorName: "Kalina Mollika",
      tarih: "18 July 2021",
      description: "Dental Care for Women is very important",
    },
    {
      imgTitle: newsImg5,
      doctorImg: dImg5,
      doctorName: "Michel",
      tarih: "17 July 2021",
      description: "Health Will Be A Thing Of The Past And Here is Why",
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${newsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // mb:'100px',
      }}
    >
      <Container
        sx={
          {
            // mt: "100px"
          }
        }
      >
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
            src={blueCircle}
            style={{
              width: "7%",
              position: "absolute",
              top: "-10%",
              right: "14%",
              animation: "move2 5s infinite alternate-reverse",
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
            Latest News
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
            Our Latest News
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img
            src={traingle}
            style={{
              width: "7%",
              position: "absolute",
              top: "-2%",
              left: "4%",
              animation: "move3 5s infinite alternate-reverse",
            }}
          />
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            slidesPerView={1}
            autoplay={{
              delay: 4000, // Set the autoplay delay to 3 seconds
              disableOnInteraction: false, // Allow autoplay to continue after interaction
            }}
            style={{
              padding: "15px 0px",
              borderRadius: "20px",
              width: "95%",
              height: "auto",
              position: "relative",
            }}
            breakpoints={{
              500: { slidesPerView: 1 },
              700: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {LatestNewsData.map((data, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    backgroundColor: "#fff",
                    border: "2px solid rgba(86, 90, 207, .2)",
                    borderRadius: "10px",
                    padding: "20px",
                    transition: "all .5s",
                    width: { sm: "95%", md: "95%", lg: "95%" },
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 2,
                    "&:hover": {
                      border: "2px solid #fff",
                      boxShadow: "0 10px 30px 0 rgba(58, 64, 234, 0.57)",
                      scale: "0.95",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={data.imgTitle}
                    sx={{ width: "100%" }}
                  />

                  <Box
                    sx={{
                      display: "flex",
                      flexDirectionL: "row",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={data.doctorImg}
                      sx={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        mr: "7px",
                      }}
                    />
                    <Typography sx={{ color: "#f17732" }}>
                      {data.doctorName}
                    </Typography>

                    <Typography sx={{ color: "#f17732" }}>
                      <FontAwesomeIcon
                        style={{ marginRight: "5px", marginLeft: "15px" }}
                        icon={faCalendarDays}
                      />
                      {data.tarih}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{ color: "#1f2278", fontWeight: "600" }}
                  >
                    {data.description}
                  </Typography>
                  <Button
                    sx={{
                      width: "50%",
                      textTransform: "none",
                      borderRadius: "8px",
                      border: "1px solid #e1e2f6",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "1.2",
                      padding: "15px 30px",
                      transition: "all 0.5s",
                      backgroundColr: "#e1e2f6",
                      color: "#565acf",

                      "&:hover": {
                        backgroundColor: "#565acf",
                        borderColor: "#565acf",
                        color: "#fff",
                      },
                    }}
                  >
                    View More
                  </Button>
                </Card>
              </SwiperSlide>
            ))}
            <img
              src={blueLine}
              style={{
                width: "9%",
                position: "absolute",
                bottom: "-2%",
                right: "5%",
                animation: "move3 5s infinite alternate-reverse",
                zIndex: 1,
              }}
            />
          </Swiper>
          <img
            src={square}
            style={{
              width: "9%",
              position: "absolute",
              bottom: "-15%",
              left: "5%",
              animation: "move1 5s infinite alternate-reverse",
              zIndex: 1,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
