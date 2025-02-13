import { Box, Slider, Stack, Typography } from "@mui/material";

import newsImg from "../../../assets/newsImg6.jpg";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function serviceLeftSide() {
  const data = [
    "Then along come two they",
    "That&apos;s just a little bit more than",
    "Standard dummy text ever since",
    "Simply dummy text of the printing",
    "Make a type specimen book",
  ];
  const sliderData = [
    { title: "Advanced Technology", value: "96" },
    { title: "Certified Engineers", value: "79" },
    { title: "6 years Experience", value: "75" },
  ];
  return (
    <Stack
      sx={{
        width: "65%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box
        component="img"
        src={newsImg}
        sx={{
          borderStyle: "none",
          height: "auto",
          maxWidth: "100%",
          verticalAlign: "middle",
        }}
      />

      <Stack>
        <Typography
          sx={{
            fontSize: "40px",
            color: "var(--main-color)",
            fontWeight: "600",
            mb: "10px",
          }}
        >
          Why Medical Had Been So Popular Till
        </Typography>
        <Typography
          sx={{ fontSize: "18px", fontWeight: "500", letterSpacing: 0.4 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book
        </Typography>
      </Stack>

      <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
        <Stack className="border" sx={{ width: "400px", gap: 0 }}>
          {data.map((text, index) => {
            return (
              <Box
                key={index}
                sx={{
                  width: "390px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                  m: "2px",
                }}
              >
                <div
                  style={{
                    backgroundColor: " #565acf",
                    borderRadius: "4px",
                    color: "#fff",
                    fontWeight: "900",
                    height: " 35px",
                    lineHeight: "35px",
                    textAlign: "center",
                    transition: "all .5s",
                    width: "35px",
                  }}
                >
                  <FontAwesomeIcon icon={faCheck} color="#fff" />
                </div>

                <Typography
                  sx={{
                    color: "#1f2278",
                    fontSize: "19px",
                    fontWeight: "500",
                    lineHeight: "20px",
                    letterSpacing: 0.3,
                    wordSpacing: 0.5,
                  }}
                >
                  {text}
                </Typography>
              </Box>
            );
          })}
        </Stack>

        <Stack className="border" sx={{ width: "400px", gap: 0 }}>
          <Typography
            variant="h6"
            sx={{ color: "var(--main-color)", fontWeight: "600" }}
            gutterBottom
          >
            Advanced Technology
          </Typography>
          <Slider
            aria-label="ios slider"
            value={96}
            valueLabelDisplay="on"
            sx={{
              color: "#007bff",
              height: 5,
              padding: "15px 0",
              "& .MuiSlider-thumb": {
                height: 20,
                width: 20,
                backgroundColor: "#fff",
                boxShadow: "0 0 2px 0px rgba(0, 0, 0, 0.1)",
                "&:focus, &:hover, &.Mui-active": {
                  boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.1)",
                  "@media (hover: none)": {
                    boxShadow:
                      '"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)"',
                  },
                },
                "&:before": {
                  boxShadow:
                    "0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)",
                },
              },
              "& .MuiSlider-valueLabel": {
                fontSize: 12,
                fontWeight: "normal",
                top: -6,
                backgroundColor: "unset",
                color: "#000",
                "&::before": {
                  display: "none",
                },
                "& *": {
                  background: "transparent",
                  color: "#000",
                },
              },
              "& .MuiSlider-track": {
                border: "none",
                height: 5,
              },
              "& .MuiSlider-rail": {
                opacity: 0.5,
                boxShadow: "inset 0px 0px 4px -2px #000",
                backgroundColor: "#d0d0d0",
              },
            }}
          />
        </Stack>
      </Box>
    </Stack>
  );
}
