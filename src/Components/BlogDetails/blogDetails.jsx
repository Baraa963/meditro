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
          justifyContent: { xs: "center", lg: "space-between" },
          alignItems: {xs:'center',lg:"start"},
          gap: 4,
        }}
      >
        <Stack
          sx={{
            width: { sm: "90%", md: "80%", lg: "66%" },
            display: "flex",
            gap: 2.5,
          }}
        >
          <BlogDetailsLeftSide />
        </Stack>

        <Stack
          sx={{
            width: { sm: "90%", md: "80%", lg: "33%" },
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
