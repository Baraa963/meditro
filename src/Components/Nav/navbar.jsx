import { Box, Typography, Container, Drawer, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assets/logo.png";
import "./navbar.css";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  // Detect screen size changes to toggle drawer visibility
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setIsMediumScreen(true);
      } else {
        setIsMediumScreen(false);
        setIsDrawerOpen(false); // Close the drawer if screen size is larger
      }
    };

    // Listen for window resize
    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on mount

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setIsDrawerOpen(false)}
      onKeyDown={() => setIsDrawerOpen(false)}
    >
      {/* Show logo inside the Drawer */}
      <Box sx={{ padding: '20px', textAlign: 'left' }}>
        <img src={logo} alt="Logo" style={{ width: '150px' }} />
      </Box>

      {/* List of menu items */}
      {["Home", "Pages", "Services", "Blog", "Contact Us", "Search"].map((text, index) => (
        <Typography
          key={index}
          sx={{
            position: "relative",
            padding: "15px 20px",
            "&:hover": {
              cursor: "pointer",
              color: "var(--orange-color)",
              transition: "0.4s ease-in-out",
              transform: "translateX(10px)", 
            },
            "&:active": {
              transform: "translateX(0)", 
              transition: "transform 0.2s ease-out", 
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -2,
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
      ))}
    </Box>
  );

  return (
    <Container sx={{ padding: '25px 10px' }}>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <Box sx={{ width: '25%', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
          <img src={logo} alt="Logo" />
        </Box>

        <Box sx={{ color: 'var(--main-color)', width:'75%', display: {xs:'contents',md:'flex'}, flexDirection: 'row', justifyContent: 'space-evenly' }}>
          {!isMediumScreen ? (
            // Show desktop nav links
            ["Home", "Pages", "Services", "Blog", "Contact Us", "Search"].map((text, index) => (
              <Typography
                key={index}
                sx={{
                  position: "relative",
                  "&:hover": {
                    cursor: "pointer",
                    color: "var(--orange-color)",
                    transition: "0.4s ease-in-out",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -2,
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
            ))
          ) : (
            // Show mobile menu icon for medium screens
            <IconButton onClick={() => toggleDrawer(true)}>
              <MenuIcon sx={{ color: "var(--main-color)" }} />
            </IconButton>
          )}
        </Box>
      </Box>

      {/* Drawer for medium screens */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </Container>
  );
}
