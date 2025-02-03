import { Box, Container, Stack, Typography } from "@mui/material";
import line from "../../../assets/line.png";
import WeWorksCard from "./WeWorksCard/weWorksCard";
import bg3 from "../../../assets/bg3.png";
import pulsImg from "../../../assets/plus.png";
import orangeCircle from "../../../assets/orange circle.png";
import blueCircle from "../../../assets/blue circle.png";
export default function weWorks() {
  const WeWorksCards = [
    {
      number: "01",
      title: "Make Appointment",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of.",
    },
    {
      number: "02",
      title: "Take Treatment",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of.",
    },
    {
      number: "03",
      title: "Registration",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of.",
    },
  ];

  return (
    <Container sx={{ position: "relative" }}>
      {/* <motion.img
        initial={{ x: 400 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 3.5, ease: "easeInOut" }}
        style={{ position: "absolute", left: "29%", top: "6%" }}
        src={blueCircle}
      /> */}
      <img
        style={{
          position: "absolute",
          left: "9%",
          top: "2%",
          animation: "rotateInfinite 10s linear infinite",
        }}
        src={blueCircle}
      />
      <img
        style={{
          position: "absolute",
          bottom: "29%",
          animation: "rotateInfinite 10s linear infinite",
        }}
        src={orangeCircle}
      />
      <img
        className="circle-img"
        style={{ position: "absolute", right: "2%", top: "60%" }}
        src={pulsImg}
      />

      <Stack
        sx={{
          mt: "120px",
          display: "flex",
          backgroundImage: `url(${bg3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "auto",
        }}
      >
        <Box
          sx={{
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
              position: "relative",
              zIndex: 2,
            }}
          >
            Working Process
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "var(--main-color);",
              mb: "25px",
              fontSize: {
                xs: "28px",
                sm: "33px",
                md: "45px",
              },
            }}
          >
            How we work?
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: { sm: "column", md: "row" },
              gap: "0px 25px",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "auto",
            }}
          >
            {WeWorksCards.map((step, index) => (
              <WeWorksCard
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                mb={step.mb}
              />
            ))}
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
