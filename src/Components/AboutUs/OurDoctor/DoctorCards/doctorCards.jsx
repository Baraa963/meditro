/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import ourDoctorCardBg2 from "../../../../assets/ourDoctorCardBg2.png";
import ourDoctorCardBg1 from "../../../../assets/ourDoctorCardBg1.png";
import maskImage from "../../../../assets/mask-img.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Card,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export default function doctorCards({ cardsData }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Container sx={{ py: 5 }}>
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {cardsData.map((card, index) => {
          return (
            <Card
              key={index}
              onMouseEnter={() => setHoveredIndex(index)} // Hover başlatıldığında index ayarla
              onMouseLeave={() => setHoveredIndex(null)} // Hover sona erdiğinde index sıfırla
              sx={{
                backgroundColor: "#fff",
                border: "2px solid rgba(86, 90, 207, .2)",
                borderRadius: "10px",
                padding: "20px",
                transition: "all .5s",
                width: { xs: "80%", sm: "60%", md: "40%", lg: "26.5%" },
                height: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
                opacity: hoveredIndex === index ? 1 : 0.3, // Hover edilen kartın opaklığını 1 yap, diğerlerini 0.4 yap
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
              <Box className="cardWrapper" sx={{ width: "100%", height: "auto" }}>
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
                      top: "9%",
                      left: "15%",
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
                      top: "16%",
                      left: "20%",
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
                  {card.icons.map((icon, idx) => (
                    <IconButton
                      key={idx}
                      sx={{
                        borderRadius: "10px",
                        backgroundColor: "var(--btn-color)",
                        transition: "all 0.6s",
                        color: "#fff",
                        height: "40px",
                        width: "40px",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={icon}
                        fontSize="20px"
                        color="#fff"
                        cursor="pointer"
                      />
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Card>
          );
        })}
      </Stack>
    </Container>
  );
}
