/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Section1() {
  const cardsData = [
    {
      number: 120,
      title: "Years With You",
      description:
        "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
    },
    {
      number: 400,
      title: "Awards",
      description:
        "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
    },
    {
      number: 250,
      title: "Doctors",
      description:
        "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
    },
    {
      number: 800,
      title: "Satisfied Client",
      description:
        "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "rgba(86, 90, 207, .1)",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 10,
       
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { sm: "column", md: "row" },
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        {cardsData.map((card, index) => {
          const [currentNumber, setCurrentNumber] = useState(0);

          useEffect(() => {
            let count = 0;
            const interval = setInterval(() => {
              if (count < card.number) {
                count += Math.ceil(card.number / 100); // Increment to reach the target in 100 steps
                setCurrentNumber(count);
              } else {
                clearInterval(interval);
              }
            }, 40); // Update every 50ms for smooth animation

            return () => clearInterval(interval); // Cleanup interval on component unmount
          }, [card.number]);

          return (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: { sm: "70%", md: "46%", lg: "22%" },
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.7s",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: "-5px",
                  left: "-5px",
                  width: "100%",
                  height: "100%",
                  border: "2px solid #565acf",
                  borderRadius: "20px",
                  zIndex: 1,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "start",
                  gap: 2,
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 10px 60px 0 rgba(31, 34, 120, .1)",
                  padding: "50px 30px",
                  margin: "15px 0 0 15px",
                  width: "100%",
                  position: "relative",
                  transition: "all 0.8s",
                  zIndex: 2,
                  "&:hover": {
                    backgroundColor: "#565acf",
                  },
                  "&:hover .text": {
                    color: "#fff",
                  },
                }}
              >
                <Typography
                  className="text"
                  sx={{
                    color: "var(--orange-color)",
                    fontWeight: "600",
                    fontSize: "60px",
                    lineHeight: 1,
                    transition: "all 0.5s",
                  }}
                >
                  {currentNumber}
                </Typography>

                <Typography
                  className="text"
                  sx={{
                    color: "#1f2278",
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: 1,
                    transition: "all 0.5s",
                  }}
                >
                  {card.title}
                </Typography>

                <Typography
                  className="text"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    transition: "all 0.5s",
                    textAlign: "start",
                  }}
                >
                  {card.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}
