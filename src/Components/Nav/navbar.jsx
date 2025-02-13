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
import logo from "../../assets/logo.png";
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
        { title: "Our Team", path: "/team" },
        { title: "FAQ'S", path: "/faq" },
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
    { title: "Contact Us", path: "/contact" },
    { title: "Search", path: "/search" },
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
          <Box sx={{ width: "25%", display: "flex", alignItems: "center" }}>
            <img src={logo} alt="Logo" />
          </Box>
          <Box
            sx={{
              width: "75%",
              display: { xs: "contents", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            {!isMediumScreen ? (
              navItems.map((item, index) => (
                <Box key={index} sx={{ position: "relative" }}>
                  <Typography
                    onClick={() => item.path && navigate(item.path)} // 🚀 Ana menü yönlendirme
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    sx={{
                      padding: "15px 20px",
                      cursor: "pointer",
                      "&:hover": {
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
                      "&:hover::after": { width: "100%" },
                    }}
                  >
                    {item.title}
                  </Typography>
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
                          sx={{ padding: "10px 20px" }}
                          onClick={() => navigate(option.path)}
                        >
                          {option.title}
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
          <Box sx={{ width: 250, padding: "20px" }}>
            <img src={logo} alt="Logo" style={{ width: "150px" }} />
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
