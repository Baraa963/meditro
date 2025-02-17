import {Container, Stack } from "@mui/material";
import BlogDetailsLeftSide from "./BlogDetailsLeftSide/BlogDetailsLeftSide";
import BlogDetailsRightSide from "./BlogDetailsRightSide/BlogDetailsRightSide";
import Footer from "../Footer/footer";
export default function blogDetails() {
  return (
    <Stack sx={{display:'flex',gap:10}}>
      <Container
        className="border"
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
          <BlogDetailsLeftSide />
          <BlogDetailsRightSide />
      </Container>
      <Footer />
    </Stack>
  );
}
