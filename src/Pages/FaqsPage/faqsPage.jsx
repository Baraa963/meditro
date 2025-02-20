import FaqsPageHeader from "../../Components/Header/header";
import FaqsSection from "../../Components/FaqsSection/faqsSection";
import LatestNews from "../../Components/Home/LatestNews/latestNews";
import Footer from "../../Components/Footer/footer";
export default function faqsPage() {
  return (
    <>
      <FaqsPageHeader ComponentName="Faq's" Path="faqs" />
      <FaqsSection />
      <LatestNews />
      <Footer/>
    </>
  );
}
