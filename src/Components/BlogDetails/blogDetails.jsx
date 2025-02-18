import { Container, Stack } from "@mui/material";
import BlogDetailsLeftSide from "./BlogDetailsLeftSide/BlogDetailsLeftSide";
import BlogDetailsRightSide from "./BlogDetailsRightSide/BlogDetailsRightSide";
import Footer from "../Footer/footer";
export default function blogDetails() {
  return (
    <Stack sx={{ display: "flex", gap: 10 }}>
      <Container
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: { md: "center", lg: "space-between" },
          alignItems: "start",
          gap: 4,
        }}
      >
        <Stack
          className="border"
          sx={{
            width: { sm: "100%", md: "100%", lg: "66%" },
            display: "flex",
            gap: 2.5,
          }}
        >
          <BlogDetailsLeftSide />
        </Stack>

        <Stack
          className="border"
          sx={{
            width: { md: "100%", lg: "33%", height: "auto" },
            height:'auto',
            display: "flex",
            justifyContent:'center',
            alignItems:'center',
            gap: 2.5,
            position: { md: "relative", lg: "sticky" },
            top: "110px",
            maxHeight: "fit-content", // Yüksekliği sınırlama
            overflowY: "auto", // İçerik taşarsa scroll ekle
            mb:{md:'100px',lg:'0'}
          }}
        >
          <BlogDetailsRightSide />
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
}
