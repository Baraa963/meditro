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
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../../assets/Logo.webm";
import { ExpandMore } from "@mui/icons-material";

export default function Navbar() {
  const navigate = useNavigate();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth <= 800);
      if (window.innerWidth > 800) setIsDrawerOpen(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { title: "Home", path: "/" },
    {
      title: "Pages",
      subMenu: [
        { title: "About Us", path: "/about-us" },
        { title: "Our Team", path: "/our-team" },
        { title: "FAQ'S", path: "/faqs" },
        { title: "Booking", path: "/booking" },
        { title: "Error 404", path: "/404" },
        { title: "Login / Register", path: "/login" },
      ],
    },
    {
      title: "Services",
      subMenu: [
        { title: "Service", path: "/service" },
        { title: "Service Detail", path: "/service-detail" },
      ],
    },
    {
      title: "Blog",
      subMenu: [
        { title: "Blogs", path: "/blogs" },
        { title: "Blog Detail", path: "/blog-detail" },
      ],
    },
    { title: "Contact Us", path: "/contact-us" },
  ];

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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo Section */}
          <Box sx={{ width: "25%", display: "flex", alignItems: "start" }}>
            <Box
              component="video"
              src={logo}
              sx={{ width:{xs:'190px',sm:'200px',md:'220px',lg:'250px'}}}
              autoPlay
              muted
            />
          </Box>

          {/* Navigation Menu */}
          <Box
            sx={{
              width: "65%",
              display: { xs: "contents", md: "flex" },
              justifyContent: "space-evenly",
              alignItems: "center", // Add this line to vertically align the items
            }}
          >
            {/* Desktop Navigation */}
            {!isMediumScreen ? (
              <>
                {navItems.map((item, index) => (
                  <Box key={index} sx={{ position: "relative" }}>
                    <Typography
                      onClick={() => item.path && navigate(item.path)}
                      onMouseEnter={() => setHoverIndex(index)}
                      onMouseLeave={() => setHoverIndex(null)}
                      sx={{
                        position: "relative",
                        padding: "15px 25px",
                        cursor: "pointer",
                        color: "var(--main-color)",
                        fontWeight: "600",
                        transition: "color 0.4s ease-in-out",
                        "&:hover": {
                          color: "var(--orange-color)",
                        },
                        "&::before": {
                          content:
                            item.title !== "Contact Us" &&
                            item.title !== "Home" &&
                            item.title !== "Search"
                              ? '"+"'
                              : '""',
                          position: "absolute",
                          right: 0,
                          bottom: 10,
                          textAlign: "center",
                          fontWeight: "500",
                          fontSize: "22px",
                          color: "#bbbbcf",
                          transition: "transform 0.6s ease",
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
                        "&:hover::after": { width: "100%" },
                        "&:hover::before": {
                          transform: "rotate(45deg)",
                          color: "var(--orange-color)",
                        },
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* Dropdown Menu for Submenu Items */}
                    {hoverIndex === index && item.subMenu && (
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
                        {item.subMenu.map((option, i) => (
                          <MenuItem
                            key={i}
                            sx={{
                              padding: "10px 20px",

                              "&::after": {
                                content: '""',
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "0%",
                                height: "2px",
                                backgroundColor: "var(--btn-color)",
                                transition: "width 0.7s ease-in-out",
                              },
                              "&:hover::after": { width: "100%" },
                            }}
                            onClick={() => navigate(option.path)}
                          >
                            {option.title}
                          </MenuItem>
                        ))}
                      </Paper>
                    )}
                  </Box>
                ))}
                {/* Search Section inside Navigation */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    type="button"
                    sx={{
                      transition: "all 0.3s ease-in-out",
                      p: "10px",
                      backgroundColor: "var(--btn-color)",

                      "&:hover": {
                        backgroundColor: "#4044a4",
                      },
                    }}
                    aria-label="search"
                    onClick={() => navigate("/login")}
                  >
                    <LoginIcon sx={{ color: "white" }} />
                  </IconButton>
                </Box>
              </>
            ) : (
              <IconButton onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon sx={{ color: "var(--main-color)" }} />
              </IconButton>
            )}
          </Box>
        </Box>

        {/* Mobile Drawer (Sidebar) */}
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box sx={{ width: 250, padding: "20px" }}>
          <Box
              component="video"
              src={logo}
              sx={{ width:{xs:'190px',sm:'200px',md:'220px',lg:'250px'}}}
              autoPlay
              muted
            />
            {navItems.map((item, index) => (
              <Box key={index}>
                {item.subMenu ? (
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {item.subMenu.map((option, i) => (
                        <MenuItem
                          key={i}
                          sx={{ padding: "10px 20px" }}
                          onClick={() => navigate(option.path)}
                        >
                          {option.title}
                        </MenuItem>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  <Typography
                    sx={{ padding: "15px 20px", cursor: "pointer" }}
                    onClick={() => item.path && navigate(item.path)}
                  >
                    {item.title}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </Drawer>
      </Container>
    </Box>
  );
}
