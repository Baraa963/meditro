import {
  faBed,
  faFire,
  faSyringe,
  faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, Stack, Typography,Button } from "@mui/material";
import doc1Img from "../../../assets/pic-1.jpg";
import doc2Img from "../../../assets/pic-2.jpg";
import doc3Img from "../../../assets/pic-3.jpg";
import doc4Img from "../../../assets/pic-3.jpg";
import square1 from "../../../assets/square1.png";
import lines from "../../../assets/squiggly lines.png";
import line from "../../../assets/line.png";
import img1 from '../../../assets/aboutImg1.png'
import img2 from '../../../assets/AboutImg2.png'
import { useNavigate } from "react-router-dom";
export default function AboutUs() {
  const navigate = useNavigate();  // useNavigate hook'unu tanımla
  const servicesData = [
    {icon:faTruckMedical,SerciveName:'Emergency Help',borderColor:'#b2f0fb',backgroundColor:'#b2f0fba8'},
    {icon:faBed,SerciveName:'Qualified Doctors',borderColor:'#a4fcc4',backgroundColor:'#a4fcc4a8'},
    {icon:faFire,SerciveName:'Best Professionals',borderColor:'#ffbdbc',backgroundColor:'#ffbdbca8'},
    {icon:faSyringe,SerciveName:'Medical Treatment',borderColor:'#e2c4ff',backgroundColor:'#e2c4ffa8'},
  ]
  return (
    <Container>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { md: "column", lg: "row" },
          width: "100%",
          position:'relative',
        }}
      >
        <img
          src={square1}
          style={{
            position: "absolute",
            right: "2.5vw",
            top: "4%",
            animation: "move2 1.5s infinite alternate-reverse",
            zIndex: 1, // Resmi daha geriye atar
          }}
        />
        <img
          src={img1}
          style={{
            position: "absolute",
            right: "2%",
            bottom: "-5%",
            animation: "move1 1.5s infinite alternate-reverse",
            zIndex: 1, // Resmi daha geriye atar
          }}
        />
        <img
          src={img2}
          style={{
            position: "absolute",
            right: "25%",
            bottom: "-15%",
            animation: "move3 5.5s infinite alternate-reverse",
            zIndex: 1, // Resmi daha geriye atar
          }}
        />
        
        {/* Left Side */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            mt: "5px",
            flexWrap: "wrap",
            alignItems: "end",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "end",
              gap: "25px 25px",
              mb: "25px",
            }}
          >
            <Box>
              <img
                style={{
                  width: "100%",
                  maxWidth: "210px",
                  height: "auto",
                  borderRadius: "0% 20% 20% 20%",
                  boxSshadow: "0 5px 30px 0 rgba(31, 34, 120, .08)",
                }}
                src={doc1Img}
              />
            </Box>
            <Box>
              <img
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  height: "auto",
                  borderRadius: "20% 0% 20% 20%",
                }}
                src={doc2Img}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              width: "50px",
              height: "50px",
              position: "absolute",
              top: "55%",
              left: "38.5%",
              transform: "rotate(45deg)",
              borderRadius: "30%",
              backgroundColor: "var(--orange-color)",
            }}
          />

        <img
          src={lines}
          style={{
            position: "absolute",
            left: "6%",
            bottom: "10%",
            zIndex: 0,
            animation: "move1 1.5s infinite alternate-reverse", // Animasyonu ekledik
          }}
        />
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              gap: "25px 25px",
              zIndex: 1,
            }}
          >
            <Box>
              <img
                style={{
                  width: "100%",
                  maxWidth: "110px",
                  height: "auto",
                  borderRadius: "20% 37% 20% 0%",
                }}
                src={doc3Img}
              />
            </Box>
            <Box>
              <img
                style={{
                  width: "100%",
                  maxWidth: "190px",
                  height: "auto",
                  borderRadius: "20% 20% 0% 20%",
                }}
                src={doc4Img}
              />
            </Box>
          </Box>
        </Box>

        {/* Right Side */}
        <Box sx={{ width: { md: "70%", lg: "50%" }, mt: "50px" }}>
          <Box sx={{ width: "100%" }}>
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
                position: "relative", // İçindeki metni yukarı taşır
                zIndex: 2, // Metni öne getirir
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "var(--main-color)",
                mb: "10px",
                pl:'2px'
              }}
            >
              The Great Place Of Medical Hospital Center
            </Typography>
            <Typography sx={{ fontSize: "18px", lineHeight: "1.6", pl:'2px' }}>
              We provide the special tips and advice’s of heath care treatment
              and high level of best technology involve in the our hospital.
            </Typography>
          </Box>

          <Box
            sx={{
              width:'100%',
              display: "flex",
              flexDirection:'row',
              mt: "45px",
              flexWrap: "wrap",
              gap: "30px 30px",
              justifyContent:'center'
            }}
          >
            {/* Emergency Help */}
            {servicesData.map((service,index)=>{
              return(
                <Box
                key={index}
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  width: { md: "47%", lg: "273px" },
                  p: "20px",
                  borderRadius: "8px",
                  border: `2px solid ${service.borderColor}`,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "75px",
                    height: "75px",
                    borderRadius: "9% 50% 50% 9%",
                    left: "0%",
                    backgroundColor: `${service.backgroundColor}`,
                    zIndex: 0,
                  },
                  "&:hover .icon": {
                    animation: "shake 0.4s ease-in-out",
                  },
                }}
              >
                <FontAwesomeIcon
                  className="icon"
                  icon={service.icon}
                  size="2x"
                  style={{ zIndex: "1" }}
                />
                <Typography sx={{ pl: "40px" }}>{service.SerciveName}</Typography>
              </Box>
              );
            })}         

          </Box>
          
          <Box sx={{display:'flex', justifyContent:{xs:'start',sm:'center',lg:'start'}}}>
          <Button
              sx={{
                width: { xs: "130px", sm: "150px", md: "160px" }, 
                height: { xs: "40px", sm: "45px", md: "50px" }, 
                fontSize: { xs: "12px", sm: "14px", md: "15px" },
                backgroundColor: "var(--btn-color)",
                mt:'30px',
                "&:hover": {
                  backgroundCcolor: '#494db0',
                  borderColor: '#494db0',
                  color: '#fff',
                  opacity:'0.95',
                  transition: ".3s ease-in-out",
                },
              }}
              variant="contained"
              onClick={() => navigate("/about-us")} // Butona tıklandığında yönlendirme yap
            >
              Read More
          </Button>
          </Box>
    
        </Box>
      </Stack>
    </Container>
  );
}
