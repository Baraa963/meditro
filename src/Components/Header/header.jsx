/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import Navbar from "../Nav/navbar";
import footerimg from "../../assets/footerImg.png";
import footerBg from "../../assets/footerbg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import bluePlus from "../../assets/bluePlus.png";
import blueCircle from "../../assets/blue circle.png";
import blueLine from "../../assets/blue squiggly lines.png";

import { useNavigate } from "react-router-dom"; // useNavigate import edildi

export default function Header({ ComponentName, Path }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate(); // useNavigate hook'unu tanımla

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${footerBg})`, // Üstteki görseli footerimg yapın
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '420px',
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          zIndex: 2,
          "&::after": {
            backgroundImage: `url(${footerimg})`, // Görseli buraya ekleyin
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            bottom: 0,
            content: "''",
            height: "100%",
            left: 0,
            position: "absolute",
            width: "100%",
            zIndex: 1,
            transform: "rotate(180deg)", // Görseli 180 derece döndürür
 
            
          },
        }}
      >
        <img
          src={bluePlus}
          style={{
            width: "7%",
            position: "absolute",
            bottom: "35%",
            right: "4%",
            animation: "rotateInfinite 10s infinite alternate",
          }}
        />
        <img
          src={blueCircle}
          style={{
            width: "7%",
            position: "absolute",
            top: "25%",
            left: "4%",
            animation: "move3 4s infinite alternate",
          }}
        />
        <img
          src={blueLine}
          style={{
            width: "7%",
            position: "absolute",
            bottom: "25%",
            left: "14%",
            animation: "move5 3s infinite alternate",
          }}
        />
        <Typography
          sx={{
            fontSize: {xs:'40px',sm:'45px',md:'56px',lg:"62px"},
            fontWeight: "600",
            color: "var(--main-color)",
            letterSpacing: "2px",
          }}
        >
          {ComponentName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: {xs:'210px',lg:"250px"},
            height: "auto",
            backgroundColor: "var(--btn-color)",
            p: { xs:'10px 2px',lg:"10px 10px"},
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              boxShadow: "0 5px 30px 0 rgba(86, 90, 207, .3)",
            }}
          >
            <FontAwesomeIcon fontSize={"20px"} icon={faHouse} color="#fff" />
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "500",
                cursor: "pointer",
                zIndex: 2,
              }}
              onClick={() => navigate("/")} // Butona tıklandığında yönlendirme yap
            >
              Home
            </Typography>
            <Typography sx={{ color: "#fff" }}>/</Typography>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "500",
                cursor: "pointer",
                zIndex: 2,
              }}
              onClick={() => navigate(`/${Path}`)} // Butona tıklandığında yönlendirme yap
            >
              {ComponentName}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}