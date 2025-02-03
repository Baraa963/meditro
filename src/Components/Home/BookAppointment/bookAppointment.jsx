import {
  Box,
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { sm: "90%", md: "50%" },
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
        </Box>

        <Box
          className="border"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "end",
            width: { sm: "90%", md: "55%" },
            height: "auto",
            position: "relative",
          }}
        >
          <img
            src={heart}
            style={{
              width: "75px",
              position: "absolute",
              top: "8%",
              right: "10%",
              animation: "move3 5s linear infinite",
            }}
          />
          <Box sx={{ mt: { sm: "10%", md: "0%" } }}>
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
                right: "10%", // Konumu ayarlayabilirsin
                bottom: "2.6%",
                animation: "move5 2.5s infinite alternate-reverse",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
