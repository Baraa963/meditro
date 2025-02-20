/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import errorImg from "../../assets/error.404Img.gif";
import { useNavigate } from "react-router-dom";

export default function notFoundSection() {
    const navigate = useNavigate();
  return (
    <Container
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        p: 4,
      }}
    >
      <Stack
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "var(--main-color)",
            fontSize: "190px",
            fontWeight: "700",
            width: "400px",
            lineHeight: 0,
          }}
        >
          4
          <Box component="img" src={errorImg} sx={{ width: "45%", px: 2 }} />4
        </Typography>

        <Typography
          sx={{
            width: "470px",
            color: "var(--main-color)",
            fontSize: "28px",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          The Page you were looking for, couldn&#39;t be found.
        </Typography>

        <Typography
          sx={{
            width: "490px",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>

        <Button
          sx={{
            height: "50px",
            background: "var(--btn-color)",
            borderRadius: "8px",
            color: "#fff",
            display: "inline-block",
            textTransform: "uppercase",
            borderWidth: "2px",
            fontSize: "14px",
            fontWeight: "500",
            padding: "15px 30px",
          }}
          onClick={()=>{navigate('/')}}
        >
          Back To Home
        </Button>

      </Stack>
    </Container>
  );
}
