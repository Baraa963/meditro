import { Container } from "@mui/material";
import BlogDetailsLeftSide from "./BlogDetailsLeftSide/BlogDetailsLeftSide";
import BlogDetailsRightSide from "./BlogDetailsRightSide/BlogDetailsRightSide";
export default function blogDetails() {
  return (
    <Container
      className="border"
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent:'space-between',
      }}
    >
      <BlogDetailsLeftSide />
      <BlogDetailsRightSide />
    </Container>
  );
}
