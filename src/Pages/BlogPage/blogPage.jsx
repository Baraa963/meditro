import BlogPageHeader from "../../Components/Header/header";
import BlogSection from "../../Components/BlogSection/blogSection";
import Footer from "../../Components/Footer/footer";
import { Stack } from "@mui/material";
export default function blogPage() {
  return (
    <Stack sx={{display:'flex',gap:10}}>
      <BlogPageHeader ComponentName="Blogs" Path="blogs" />
      <BlogSection />
      <Footer />
    </Stack>
  );
}
