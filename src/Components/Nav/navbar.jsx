import {
  Box,
  Typography,
  Container,
  Drawer,
  IconButton,
  Paper,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { ExpandMore } from "@mui/icons-material";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setIsMediumScreen(true);
      } else {
        setIsMediumScreen(false);
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Home",
    "Pages",
    "Services",
    "Blog",
    "Contact Us",
    "Search",
  ];

  // Define submenu options for each menu item
  const subMenuOptions = {
    Pages: [
      "About Us",
      "Our Team",
      "FAQ'S",
      "Booking",
      "Error 404",
      "Login / Register",
    ],
    Services: ["Service", "Service Detail"],
    Blog: ["Blogs", "Blog Detail"],
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: isScrolled ? "#fff" : "transparent",
        position: "fixed",
        zIndex: 3,
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <Container sx={{ padding: "25px 10px" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "25%",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <img src={logo} alt="Logo" />
          </Box>
          <Box
            sx={{
              color: "var(--main-color)",
              width: "75%",
              display: { xs: "contents", md: "flex" },
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {!isMediumScreen ? (
              menuItems.map((text, index) => (
                <Box key={index} sx={{ position: "relative" }}>
                  <Typography
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    sx={{
                      position: "relative",
                      padding: "15px 20px",
                      "&:hover": {
                        cursor: "pointer",
                        color: "var(--orange-color)",
                        transition: "0.4s ease-in-out",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "0%",
                        height: "2px",
                        backgroundColor: "var(--orange-color)",
                        transition: "width 0.4s ease-in-out",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {text}
                  </Typography>
                  {hoverIndex === index && subMenuOptions[text] && (
                    <Paper
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        zIndex: 4,
                        minWidth: "200px",
                        backgroundColor: "#fff",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        padding: "10px 0",
                      }}
                      onMouseEnter={() => setHoverIndex(index)}
                      onMouseLeave={() => setHoverIndex(null)}
                    >
                      {subMenuOptions[text].map((option, i) => (
                        <MenuItem key={i} sx={{ padding: "10px 20px" }}>
                          {option}
                        </MenuItem>
                      ))}
                    </Paper>
                  )}
                </Box>
              ))
            ) : (
              <IconButton onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon sx={{ color: "var(--main-color)" }} />
              </IconButton>
            )}
          </Box>
        </Box>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box sx={{ width: 250 }}>
            <Box sx={{ padding: "20px", textAlign: "left" }}>
              <img src={logo} alt="Logo" style={{ width: "150px" }} />
            </Box>
            {menuItems
              .filter(
                (text) =>
                  text !== "Pages" && text !== "Services" && text !== "Blog"
              ) // Filter out Pages, Services, and Blog from top-level items
              .map((text, index) => (
                <Box key={index}>
                  <Typography sx={{ padding: "15px 20px", cursor: "pointer" }}>
                    {text}
                  </Typography>
                  {subMenuOptions[text] && (
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        sx={{ padding: "0 20px" }}
                      >
                        <Typography>{text}</Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ padding: "10px 20px" }}>
                        {subMenuOptions[text].map((option, i) => (
                          <MenuItem key={i} sx={{ padding: "10px 20px" }}>
                            {option}
                          </MenuItem>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  )}
                </Box>
              ))}
            {["Pages", "Services", "Blog"].map((text, index) => (
              <Box key={index}>
                {subMenuOptions[text] && (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      sx={{ padding: "0 20px" }}
                    >
                      <Typography>{text}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: "10px 20px" }}>
                      {subMenuOptions[text].map((option, i) => (
                        <MenuItem key={i} sx={{ padding: "10px 20px" }}>
                          {option}
                        </MenuItem>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                )}
              </Box>
            ))}
          </Box>
        </Drawer>
      </Container>
    </Box>
  );
}
