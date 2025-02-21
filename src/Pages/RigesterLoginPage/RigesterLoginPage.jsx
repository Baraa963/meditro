/* eslint-disable no-undef */
import { useState } from "react";
import {
  Box,
  TextField,
  Stack,
  FilledInput,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";

import logo from "../../assets/logo.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Stack
          className="border"
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box component="img" src={logo} sx={{ width: "200px" }} />

          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            sx={{
              width: "85%",
              "& .MuiInputLabel-root.Mui-focused": {
                color: "var(--btn-color)",
              },
              "& .MuiFilledInput-underline:before": {
                borderBottomColor: "var(--btn-color)",
              },
              "& .MuiFilledInput-underline:after": {
                borderBottomColor: "var(--btn-color)",
              },
            }}
          />

          <FormControl sx={{ m: 1, width: "85%" }} variant="filled">
            <InputLabel
              htmlFor="filled-adornment-password"
              sx={{
                "&.Mui-focused": {
                  color: "var(--btn-color)", // Change label color to btn-color when focused
                },
              }}
            >
              Password
            </InputLabel>
            <FilledInput
             sx={{
                "& .MuiFilledInput-underline:before": {
                  borderBottomColor: "var(--btn-color)", // Change border color before focus
                },
                "& .MuiFilledInput-underline:after": {
                  borderBottomColor: "var(--btn-color)", // Change border color after focus
                },
              }}
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
             
            />
          </FormControl>

          <Button
            type="button"
            sx={{
              width: "85%",
              color: "white",
              transition: "all 0.3s ease-in-out",
              p: "10px",
              backgroundColor: "var(--btn-color)",

              "&:hover": {
                backgroundColor: "#4044a4",
              },
            }}
            aria-label="search"
          >
            Login
          </Button>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
