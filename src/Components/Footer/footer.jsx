import logo from "../../assets/logo.png";
import footerContact from "../../assets/footerContact.png";
import BlueLineImg from "../../assets/footerBlueLine.png";
import footerBg from "../../assets/footerbg.jpg";
import footerimg from "../../assets/footerImg.png";
import blueLines from "../../assets/blue squiggly lines.png";
import bluePlus from "../../assets/bluePlus.png";
import blueCircle from "../../assets/blue circle.png";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";

import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const LinksAndServices = [
    {
      title: "QuickLinks",
      links: [
        "About Us",
        "Services",
        "Booking",
        "Faq\u0027s",
        "Blogs",
        "Our Team",
      ],
    },
    {
      title: "Our Service",
      links: [
        "Dental Care",
        "Cardiac Clinic",
        "Massage Therapy",
        "Cardiology",
        "Precise Diagnosis",
        "Ambulance Services",
      ],
    },
  ];

  return (
    <Box
      sx={{
        mt:'40px',
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "auto",
        position: "relative",
        paddingTop: "10vw",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${footerimg})`,
          backgroundPosition: "0 0",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          zIndex: 0, // Ensure that the footer image is behind other elements
        },
      }}
    >
      <Container
        sx={{ position: "relative", display: "flex", flexDirection: "column" }}
      >
        <img
          src={blueLines}
          style={{
            width: "7%",
            position: "absolute",
            top: "-2%",
            left: "4%",
            animation: "move3 5s infinite alternate-reverse",
          }}
        />
        <img
          src={bluePlus}
          style={{
            width: "7%",
            position: "absolute",
            top: "12%",
            right: "4%",
            animation: "move2 5s infinite alternate-reverse",
          }}
        />
        <img
          src={blueLines}
          style={{
            width: "7%",
            position: "absolute",
            bottom: "1%",
            right: "4%",
            animation: "move1 5s infinite alternate-reverse",
          }}
        />
        <img
          src={blueCircle}
          style={{
            width: "7%",
            position: "absolute",
            bottom: "3%",
            left: "4%",
            animation: "move2 5s infinite alternate-reverse",
          }}
        />

        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {/* First Box */}
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Stack sx={{ gap: 4 }}>
              <Box component="img" src={logo} sx={{ width: "170px" }} />
              <Typography
                sx={{ fontSize: "16px", fontWeight: "500", lineHeight: "28px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore
                smod tempor incididunt ut labore et.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  zIndex: 3,
                }}
              >
                <Box
                  component="img"
                  src={footerContact}
                  sx={{ width: "58px", height: "58px" }}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6">Contact Us</Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "rgb(31, 34, 120)",
                      lineHeight: "1.3",
                      fontWeight: "600",
                    }}
                  >
                    +905377792608
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>

          {/* Second Box & Third Box (Links) */}
          {LinksAndServices.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <Stack sx={{ gap: 1 }}>
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: "rgb(31, 34, 120)",
                    lineHeight: "1.3",
                    fontWeight: "600",
                  }}
                >
                  {item.title}
                </Typography>
                <Box
                  component="img"
                  src={BlueLineImg}
                  sx={{ width: "120px", height: "6px" }}
                />
                <List sx={{ display: "block", alignItems: "start", zIndex: 2 }}>
                  {item.links.map((link, linkIndex) => (
                    <ListItem key={linkIndex} sx={{ p: 0, pb: "10px" }}>
                      <ListItemText
                        sx={{
                          position: "relative",
                          "&:hover": {
                            cursor: "pointer",
                            color: "var(--orange-color)",
                            transition: "0.4s ease-in-out",
                            transform: "translateX(1px)",
                            scale: 0.99,
                          },
                        }}
                      >
                        {link}
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Grid>
          ))}

          {/* Fourth Box (Subscribe) */}
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Stack sx={{ flexDirection: "column" }}>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "rgb(31, 34, 120)",
                  lineHeight: "1.3",
                  fontWeight: "600",
                  mb: "10px",
                }}
              >
                Subscribe
              </Typography>
              <Box
                component="img"
                src={BlueLineImg}
                sx={{ width: "120px", height: "6px", mb: "30px" }}
              />
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                sx={{
                  mb: "30px",
                  zIndex: 2, // Ensure it's above the background
                  position: "relative", // Added to ensure it stays above
                }}
              />
              <Button
                sx={{
                  backgroundColor: "#f17732",
                  color: "#fff",
                  borderRadius: "8px",
                  borderWidth: "2px",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "1.2",
                  padding: "15px 30px",
                  textDecoration: "none",
                  transition: "all .5s",
                  zIndex: 2, // Ensure it stays above the background
                  position: "relative", // Added to ensure it stays above
                  "&:hover": {
                    backgroundColor: "#f38b51",
                    scale: 0.97,
                  },
                }}
              >
                Subscribe Now
              </Button>
              <Box sx={{ display: "flex", gap: 2, mt: "30px" }}>
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  color="#1877F2"
                  cursor="pointer"
                />
                <FontAwesomeIcon
                  icon={faXTwitter}
                  size="2x"
                  color="black"
                  cursor="pointer"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  color="#E4405F"
                  cursor="pointer"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  color="#0077B5"
                  cursor="pointer"
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mt: "30px", mb: "30px", zIndex: 2 }}>
          <Divider
            sx={(theme) => ({
              [theme.breakpoints.only("xs")]: {
                "& .MuiDivider-wrapper": {
                  whiteSpace: "pre-line",
                  textAlign: "start",
                },
              },
            })}
          >
            Developer
            <Typography
              component="span"
              sx={{ color: "var(--orange-color)", fontWeight: "bold" }}
            >
              {" "}
              Bara Fedallah.{" "}
            </Typography>
            All rights reserved
          </Divider>
        </Box>
      </Container>
    </Box>
  );
}
