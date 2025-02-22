import { Container, Stack } from "@mui/material";
import BlogDetailsLeftSide from "./BlogDetailsLeftSide/BlogDetailsLeftSide";
import BlogDetailsRightSide from "./BlogDetailsRightSide/BlogDetailsRightSide";
import Footer from "../Footer/footer";
export default function blogDetails() {
  return (
    <Stack  sx={{width:'100%', display: "flex", gap: 10}}>
      <Container
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: { xs: "center", lg: "space-between" },
          alignItems: { xs: "center", lg: "start" },
          gap: 5,
        }}
      >
        <Stack
          sx={{
            width: { sm: "90%", md: "80%", lg: "67%" },
            display: "flex",
          }}
        >
          <BlogDetailsLeftSide />
        </Stack>

        <Stack
          sx={{
            width: { sm: "90%", md: "80%", lg: "32%" },
            height: "auto",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            position: { md: "relative", lg: "sticky" },
            top: "110px",
            maxHeight: "fit-content", // Yüksekliği sınırlama
            mb: { md: "100px", lg: "0" },
            gap:4
          }}
        >
          <BlogDetailsRightSide />
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
}
