/* eslint-disable no-undef */
import { useState } from "react";
import {
  Box,
  TextField,
  Stack,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import logo from "../../assets/logo.png";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

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
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            boxShadow: "0 10px 30px 0 rgba(0, 0, 0, 0.06)",
            padding: "30px",
          }}
        >
          <Box component="img" src={logo} sx={{ width: "200px" }} />

          {/* Name Field */}
          <TextField
            required
            id="outlined-name"
            label="Name"
            variant="outlined"
            sx={{
              color: "var(--btn-color) !important",
              width: "85%",
              "& .MuiInputLabel-root.Mui-focused": {
                color: "var(--btn-color)", // Label rengi değişsin
              },
              "& .MuiOutlinedInput-root": {
                
                "&.Mui-focused fieldset": {
                  borderColor: "var(--btn-color) !important", // Focus rengi
                },
              },
            }}
          />

          {/* Password Field */}
          <FormControl sx={{ width: "85%" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-password"
              sx={{
                "&.Mui-focused": {
                  color: "var(--btn-color) !important",
                },
              }}
            >
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "var(--btn-color) !important", // Focus rengi
                },
              }}
              label="Password"
            />
          </FormControl>

          {/* Login Button */}
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
