/* eslint-disable react-hooks/rules-of-hooks */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Card, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import traingle from "../../assets/traingle.png";
import square from "../../assets/aboutImg1.png";
import blueLine from "../../assets/blue squiggly lines.png";
import "swiper/css"; // Swiper stillerini eklemelisin
import "swiper/css/navigation";
import "swiper/css/pagination";

import newsImg1 from "../../assets/newsImg1.jpg";
import newsImg2 from "../../assets/newsImg2.jpg";
import newsImg3 from "../../assets/newsImg3.jpg";
import newsImg4 from "../../assets/newsImg4.jpg";
import newsImg5 from "../../assets/newsImg5.jpg";
import newsImg6 from "../../assets/doc1_2.jpg";
import newsImg7 from "../../assets/doc7.jpg";
import newsImg8 from "../../assets/doc8.jpg";
import newsImg9 from "../../assets/doc9.jpg";
import dImg1 from "../../assets/doc1.jpg";
import dImg2 from "../../assets/doc2.jpg";
import dImg3 from "../../assets/doc3.jpg";
import dImg4 from "../../assets/doc4.jpg";
import dImg5 from "../../assets/doc10.jpg";
import dImg6 from "../../assets/doc5.jpg";
import dImg7 from "../../assets/doc5.jpg";
import dImg8 from "../../assets/doc2.jpg";
import dImg9 from "../../assets/doc5.jpg";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function blogSection() {
  const navigate = useNavigate();
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
      tarih: "18 July 2021",
      description: "Health Will Be A Thing Of The Past And Here",
    },
    {
      imgTitle: newsImg6,
      doctorImg: dImg6,
      doctorName: "Michel",
      tarih: "17 July 2021",
      description: "Health Will Be A Thing Of The Past And Here is Why",
    },
    {
      imgTitle: newsImg7,
      doctorImg: dImg7,
      doctorName: "Sonar Moyna",
      tarih: "15 July 2021",
      description: "Ten Gigantic Influences Of Health",
    },
    {
      imgTitle: newsImg8,
      doctorImg: dImg8,
      doctorName: "Kalina",
      tarih: "12 July 2021",
      description: "Why Is Skin Surgeon Considered Underrated",
    },
    {
      imgTitle: newsImg9,
      doctorImg: dImg9,
      doctorName: "Michel",
      tarih: "17 July 2021",
      description: "Everyone need to go Dentist regularly",
    },
  ];
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
          alignItems:'center',
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

        {LatestNewsData.map((data, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "#fff",
              border: "2px solid rgba(86, 90, 207, .2)",
              borderRadius: "10px",
              padding: "20px",
              transition: "all .5s",
              width: {xs:'80%',sm:'55%',md:'40%',lg:"25%"},
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
            <Box component="img" src={data.imgTitle} sx={{ width: "100%" }} />

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
                width: "fit-content",
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
              onClick={() => navigate("/blog-detail")}
            >
              View More
            </Button>
          </Card>
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
        <img
          src={square}
          style={{
            width: "9%",
            position: "absolute",
            bottom: "-4%",
            left: "5%",
            animation: "move1 5s infinite alternate-reverse",
            zIndex: 1,
          }}
        />
      </Box>
    </Container>
  );
}
