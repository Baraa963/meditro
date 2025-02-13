import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import bg2 from "../../../assets/bg2.png";
import { useState } from "react";
import mobile from "../../../assets/mobile.png";
import women from "../../../assets/women.png";
import heart from "../../../assets/heart.png";
import right from "../../../assets/right.png";
import location from "../../../assets/location.png";
import blueLine from "../../../assets/blue squiggly lines.png";
import orangeLine from "../../../assets/squiggly lines.png";
import orangeCircle from "../../../assets/orange circle.png";
export default function bookAppointment() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [departmentValue, setDepartmentValue] = useState("");

  function handleDepartmentChange(event) {
    setDepartmentValue(event.target.value);
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [doctorValue, setDoctorValue] = useState("");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  function handleDoctorChange(event) {
    setDoctorValue(event.target.value);
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [nameValue, setNameValue] = useState("");

  const handleChangeName = (event) => {
    setNameValue(event.target.value);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [numberValue, setNumberValue] = useState("");

  const handleChangeNumber = (event) => {
    setNumberValue(event.target.value);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedDate, setSelectedDate] = useState("");

  const handleChangeDate = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          borderRadius: "40px",
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "auto",
          backgroundColor: "#f5f5fc",
          mt: "20px",
          padding: "7% 5% 7% 7%",
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={blueLine}
          style={{
            width: "10%",
            position: "absolute",
            top: "-1%",
            right: "2%",
            animation: "move1 5s linear infinite",
          }}
        />
        <img
          src={orangeLine}
          style={{
            width: "10%",
            position: "absolute",
            bottom: "15%",
            left: "-8%",
            animation: "move1 5s linear infinite",
          }}
        />
        <img
          src={orangeCircle}
          style={{
            width:'6.7vw',
            position: "absolute",
            bottom: "-4%",
            right: "2%",
            animation: "rotateInfinite 10s linear infinite",
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { sm: "90%", md: "65%" },
            backgroundColor: "#fff",
            borderRadius: "40px",
            boxShadow: "0 10px 60px 0 rgba(31, 34, 120, .1)",
            gap: "25px 0px",
            padding: "40px 35px",
            position: "relative",
            textAlign: "center",
            overflow: "visible", // Make sure content isn't clipped
            "&::after": {
              border: "2px solid #565acf",
              borderRadius: "40px",
              content: "''",
              height: "100%",
              left: "-20px",
              position: "absolute",
              top: "-20px",
              width: "100%",
              zIndex: -1,
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "var(--main-color)", fontWeight: "600" }}
          >
            Book Appointment
          </Typography>

          {/* Selecty Department */}
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="select-department-label">
                Selecty Department
              </InputLabel>
              <Select
                labelId="select-department-label"
                id="select-department"
                value={departmentValue}
                label="Selecty Department"
                onChange={handleDepartmentChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderTopWidth: "3px", // Set border width for Selecty Department
                      borderColor: "#565acf", // Optional: Change border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#565acf", // Optional: Change border color on hover
                    },
                  },
                  textAlign: "start",
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Selecty Doctor */}
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="select-doctor-label">Selecty Doctor</InputLabel>
              <Select
                labelId="select-doctor-label"
                id="select-doctor"
                value={doctorValue}
                label="Selecty Doctor"
                onChange={handleDoctorChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderTopWidth: "5px", // Set border width for Selecty Doctor (larger than Selecty Department)
                      borderColor: "#565acf", // Optional: Change border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#565acf", // Optional: Change border color on hover
                    },
                  },
                  textAlign: "start",
                }}
              >
                <MenuItem value={10}>one</MenuItem>
                <MenuItem value={20}>Two</MenuItem>
                <MenuItem value={30}>Three</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField
            id="outlined-basic"
            label="Your Name"
            variant="outlined"
            value={nameValue}
            onChange={handleChangeName}
          />

          <TextField
            label="Enter a number"
            type="number"
            value={numberValue}
            onChange={handleChangeNumber}
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Select a date"
            type="date"
            value={selectedDate}
            onChange={handleChangeDate}
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true, // Date input label should be shrunk for better appearance
            }}
            inputProps={{
              lang: "en", // English language for date input
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
              "&:hover": {
                backgroundColor: "#f38b51",
                scale: 0.97,
              },
            }}
          >
            Appointment Now
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "end",
            width: { sm: "90%", md: "80%" },
            height: "auto",
            position: "relative",
          }}
        >
          <img
            src={heart}
            style={{
              width: "15%",
              position: "absolute",
              top: "10%",
              right: "10%",
              animation: "move1 5s linear infinite",
            }}
          />
          <img
            src={right}
            style={{
              width: "8%",
              position: "absolute",
              top: "25%",
              left: "3.5%",
              animation: "move6 3s infinite alternate-reverse",
            }}
          />
          <Box sx={{ mt: { sm: "10%", md: "0%" }, pl: "50px" }}>
            <img
              src={mobile}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <img
              src={women}
              style={{
                width: "40%",
                height: "auto",
                position: "absolute",
                right: "4%", // Konumu ayarlayabilirsin
                bottom: "2.6%",
                animation: "move5 2.5s infinite alternate-reverse",
              }}
            />
            <img
              src={location}
              style={{
                borderRadius: "7px",
                width: "15%",
                height: "auto",
                position: "absolute",
                left: "9%", // Konumu ayarlayabilirsin
                bottom: "30%",
                animation: "move3 10.5s infinite alternate-reverse",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
