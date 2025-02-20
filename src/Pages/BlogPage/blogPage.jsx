import BlogPageHeader from "../../Components/Header/header";
import BlogSection from "../../Components/BlogSection/blogSection";
import Footer from "../../Components/Footer/footer";
export default function blogPage() {
  return (
    <>
      <BlogPageHeader ComponentName="Blogs" Path="blogs" />
      <BlogSection />
      <Footer />
    </>
  );
}
