import "./App.css";
import HomePage from "./Pages/HomePage/homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage/aboutUsPage";
import BookingPage from './Pages/BookingPage/bookingPage'
import ServicesPage from "./Pages/ServicesPage/servicesPage";
import ServiceDetailsPage from './Pages/ServiceDetailsPage/serviceDetailsPage'
import BlogDetailsPage from "./Pages/BlogDetailsPage/blogDetailsPage";
import OurTeamPage from "./Pages/OurTeamPage/ourTeamPage";
import FaqsPage from "./Pages/FaqsPage/faqsPage";
import NotFoundPage from "./Pages/PageNotFound/notFoundPage";
import BlogPage from "./Pages/BlogPage/blogPage";
import RigesterLoginPage from './Pages/RigesterLoginPage/RigesterLoginPage'
function App() {
  return (
    <>
    {/* <div className="wrapper">
      <Navbar />
      <Home />
      
    </div>
    <AboutUs/> */}
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/service-detail" element={<ServiceDetailsPage/>} />
        <Route path="/blog-detail" element={<BlogDetailsPage/>} />
        <Route path="/our-team" element={<OurTeamPage/>} />
        <Route path="/faqs" element={<FaqsPage/>} />
        <Route path="/404" element={<NotFoundPage/>} />
        <Route path="/blogs" element={<BlogPage/>} />
        <Route path="/login" element={<RigesterLoginPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </Router>
    {/* <HomePage/> */}
    </>
  );
}

export default App;
