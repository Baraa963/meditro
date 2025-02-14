import { Box, Stack } from "@mui/material";
import ServiceLeftSide from "./ServiceLeftSide/serviceLeftSide";
import ServiceRightSide from "./ServiceRightSide/serviceRightSide";
export default function serviceDetails() {
  return (
    <Box
      // className="border"
      sx={{
        width: "100%",
        p: "40px 40px",
        display: "flex",
        flexDirection: { lg: "row" },
        justifyContent: "center",
        gap: 4,
      }}
    >
      <Stack
        sx={{
          width: { md: "95%", lg: "67%" },
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
          maxHeight: "85vh", // Yüksekliği sınırlama
          overflowY: "auto", // İçerik taşarsa scroll ekle
          height: "100vh",
          width: { md: "45%", lg: "32%" },
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          justifyContent: "flex-start",
          alignItems: "start",
          border: "1px solid rgba(86, 90, 207, 0.2)",
          borderBottom: "3px solid #565acf",
          borderRadius: "6px 6px 4px 4px !important",
          boxShadow: "0 10px 30px 0 rgba(0, 0, 0, 0.06)",
          padding: "30px",
        }}
      >
        <ServiceRightSide />
      </Stack>
    </Box>
  );
}
