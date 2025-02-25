/* eslint-disable react/prop-types */
import "swiper/css";
import "swiper/css/pagination";
import cardBackground from "../../../../assets/cardBackground.png";

import { Box, Card, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ServicesCards({ data, width }) {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
          justifyContent: "center",
          alignItems: "center",
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
            width: width,
            height: "auto",
            display: "flex",
            gap: 2,
            flexDirection: "column",
            backgroundColor: "#fff",
            backgroundImage: `url(${cardBackground})`,
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
            // eslint-disable-next-line react/prop-types
            src={data.img}
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
            {data.title}
          </Typography>
          <Typography
            className="text"
            sx={{
              fontSize: "15px",
              fontWeight: "400",
              transition: "all 0.4s ease-in-out",
            }}
          >
            {data.description}
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
                data.title === "Diagnostics" ? "#565acf" : "#e1e2f6",
              color: data.title === "Diagnostics" ? "#fff" : "#565acf",

              "&:hover": {
                backgroundColor: "#fff",
                borderColor: "#565acf",
                color: "#565acf",
              },
            }}
            onClick={() => {
              navigate('/service-detail');
            }}
          >
            View More
          </Button>
        </Card>
      </Box>
    </>
  );
}
