import { Box, Slider, Stack, Typography } from "@mui/material";

import newsImg from "../../../assets/newsImg6.jpg";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
  const AccordionData = [
    {
      title: "How Doctor Can Ease Your Pain?",
      decsription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "How do I withdraw from a subject?",
      decsription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Understand Doctor Before You Regret?",
      decsription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "What types of systems do you support?",
      decsription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "We Teach You How To Feel Better?",
      decsription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "How Can I Contact You?",
      decsription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <Stack>
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "start",
        }}
      >
        {/* left side*/}
        <Stack className="border" sx={{ width: { xs: "100%", lg: "50%" } }}>
          {data.map((text, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                  m: "10px",
                }}
              >
                <Typography
                  sx={{
                    position: "relative",
                    color: "#1f2278",
                    fontSize: "19px",
                    fontWeight: "500",
                    lineHeight: "20px",
                    letterSpacing: 0.3,
                    wordSpacing: 0.5,
                    pl: "50px", // Check kutusu için yer açıyoruz
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: "#565acf",
                      borderRadius: "4px",
                      width: "40px", // Kutuyu genişlettik
                      height: "35px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all .5s",
                    },
                    "&::after": {
                      content: '"✓"', // Check işareti
                      position: "absolute",
                      left: "12px", // Check işaretini sağa kaydırdık (boşluk eklemek için)
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#fff",
                      fontWeight: "900",
                      fontSize: "18px",
                    },
                  }}
                >
                  {text}
                </Typography>
              </Box>
            );
          })}
        </Stack>

        {/* right side*/}
        <Stack
          className="border"
          sx={{ width: { xs: "100%", lg: "47%" }, pr: 2 }}
        >
          {sliderData.map((data, index) => {
            return (
              <Box key={index}>
                <Typography
                  variant="h6"
                  sx={{ color: "var(--main-color)", fontWeight: "600" }}
                  gutterBottom
                >
                  {data.title}
                </Typography>
                <Slider
                  aria-label="ios slider"
                  value={data.value}
                  valueLabelFormat={(value) => `${value}%`} // Yüzde işareti ekleme
                  valueLabelDisplay="on"
                  sx={{
                    color: "var(--btn-color)",
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
                        color: "var(--btn-color)",
                        fontWeight: "600",
                        fontSize: "15px",
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
              </Box>
            );
          })}
        </Stack>

        {/*Popular Questions */}
        <Stack sx={{ display: "flex", justifyContent: "center" }}>
          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                color: "var(--main-color)",
                fontWeight: "600",
                mb: "10px",
              }}
            >
              Popular Questions
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "400",
                mb: "10px",
              }}
            >
              Standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book
            </Typography>
          </Box>
          {/*Accordion -- How Doctor Can Ease Your Pain? */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {AccordionData.map((data, index) => {
              return (
                <Accordion
                  key={index}
                  defaultExpanded={index === 0} // Sadece ilk Accordion açık olacak
                  sx={{
                    borderRadius: "8px",
                    backgroundColor: "var(--btn-color)", // Varsayılan arka plan rengi
                    "&.Mui-expanded": {
                      backgroundColor: "var(--orange-color)",
                    }, // Açıkken arka plan rengi
                    transition: "background-color 0.5s ease-in-out",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />} // Expand icon rengi beyaz
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography
                      component="span"
                      sx={{
                        color: "#fff",
                        fontWeight: "600",
                        padding: "2px 2px",
                        transition: "all .5s",
                      }}
                    >
                      {data.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: "#eeeefa" }}>
                    {data.decsription}
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}
