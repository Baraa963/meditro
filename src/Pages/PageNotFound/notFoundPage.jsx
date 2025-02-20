/* eslint-disable react-hooks/rules-of-hooks */
import NotFoundHeader from "../../Components/Header/header";
import NotFoundSection from "../../Components/NotFoundSection/notFoundSection";
import Footer from "../../Components/Footer/footer";
import { useEffect } from "react";

export default function notFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NotFoundHeader ComponentName="Page Not Found" Path="404" />
      <NotFoundSection />
      <Footer />
    </>
  );
}
