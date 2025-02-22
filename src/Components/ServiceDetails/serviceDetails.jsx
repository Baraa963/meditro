import { Box, Stack } from "@mui/material";
import ServiceLeftSide from "./ServiceLeftSide/serviceLeftSide";
import ServiceRightSide from "./ServiceRightSide/serviceRightSide";
export default function serviceDetails() {
  return (
    <Box
      sx={{
        width: "95%",
        display: "flex",
        flexDirection: {xs:'column', lg: "row" },
        justifyContent: "space-around",
        gap: 4,
        p:'30px'       
      }}
    >
      <Stack
        sx={{
          width: { md: "100%", lg: "67%" },
          height: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          backgroundColor: "#fbfbfb",
        }}
      >
        <ServiceLeftSide />
      </Stack>

      <Stack
        sx={{
          position: "sticky",
          top: "110px",
          maxHeight: "fit-content", // Yüksekliği sınırlama
          overflowY: "auto", // İçerik taşarsa scroll ekle
          height: "100vh",
          width: { xs: "100%", lg: "25%" },
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          justifyContent: "flex-start",
          alignItems: "start",
          border: "1px solid rgba(86, 90, 207, 0.2)",
          borderBottom: "3px solid #565acf",
          borderRadius: "6px 6px 4px 4px !important",
          boxShadow: "0 10px 30px 0 rgba(0, 0, 0, 0.06)",
          p:'30px'
        }}
      >
        <ServiceRightSide />
      </Stack>
    </Box>
  );
}
