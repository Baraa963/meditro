import { Box, Typography, Button, Container, Stack } from "@mui/material";
import doctorImg from "../../../assets/doctor.png";
import circle from "../../../assets/circle.png";
import square1 from "../../../assets/square1.png";
import traingle from "../../../assets/traingle.png";
import plus from "../../../assets/plus.png";
import line2 from "../../../assets/line2.png";
import { useNavigate } from "react-router-dom"; // useNavigate import edildi


export default function hero1() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate(); // useNavigate hook'unu tanımla

  return (
    <Container sx={{ pt: "150px" }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { md: "column", lg: "row" },
          position: "relative",
          alignItems: "start",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{ width: { md: "90%", lg: "55%" }, mt: "100px", display: "blok" }}
        >
          <img src={circle} className="circle-img" />
          <img src={square1} className="square1-img" />
          <Typography
            variant="h5"
            sx={{
              color: "var(--btn-color);",
              mb: "15px",
              fontSize: {
                xs: "16px", // Küçük ekran
                sm: "20px", // Orta ekran
                md: "24px", // Büyük ekran
              },
              backgroundImage: `url(${line2})`,
              backgroundPosition: "50%",
              backgroundRepeat: "repeat",
              display: "inline-block",
              fontWeight: "700",
              margin: "0 0 20px",
              padding: "5px 15px",
            }}
          >
            We Provide All Health Care Solution
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "var(--main-color);",
              mb: "25px",
              fontSize: {
                xs: "28px", // Küçük ekran
                sm: "36px", // Orta ekran
                md: "48px", // Büyük ekran
              },
            }}
          >
            Protect Your Health And Take Care To Of Your Health
          </Typography>

          <Box
            className="box"
            sx={{
              width: { md: "800px", lg: "750px" },
              height: "250px",
              position: "relative",
            }}
          >
            <img
              src={traingle}
              className="traingle-img"
              style={{ position: "absolute" }}
            />
            <img
              src={plus}
              className="plus-img"
              style={{ position: "absolute" }}
            />

            <Button
              sx={{
                width: { xs: "130px", sm: "160px", md: "180px" }, // Responsive genişlik
                height: { xs: "45px", sm: "55px", md: "60px" }, // Responsive yükseklik
                fontSize: { xs: "13px", sm: "16px", md: "20px" }, // Responsive yazı boyutu
                backgroundColor: "var(--btn-color)",
                "&:hover": {
                  backgroundColor: "var(--orange-color)",
                  opacity: "0.9",
                  transition: ".3s ease-in-out",
                },
              }}
              variant="contained"
              onClick={() => navigate("/about-us")}
            >
              Read More
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: { md: "100%", lg: "40%" },

            display: { md: "flex" },
            justifyContent: { md: "flex-end" }, // Sağda hizalama
          }}
        >
          <img
            className="doctor-img"
            src={doctorImg}
            style={{ maxWidth: "100%", width: "400px", height: "auto" }}
          />
        </Box>
      </Stack>
    </Container>
  );
}
