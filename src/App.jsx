import "./App.css";
import HomePage from "./Pages/HomePage/homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage/aboutUsPage";
import BookingPage from './Pages/BookingPage/bookingPage'
import ServicesPage from "./Pages/ServicesPage/servicesPage";
import ServiceDetailsPage from './Pages/ServiceDetailsPage/serviceDetailsPage'
import BlogDetailsPage from "./Pages/BlogDetailsPage/blogDetailsPage";
import OurTeamPage from "./Pages/OurTeamPage/ourTeamPage";
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
      </Routes>
    </Router>
    {/* <HomePage/> */}
    </>
  );
}

export default App;
