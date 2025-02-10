import Navbar from "../../Components/Nav/navbar";
import AboutUs from "../../Components/Home/AboutUs/aboutUs";
import WeWorks from '../../Components/Home/WeWorks/weWorks'
import Hero1 from '../../Components/Home/Hero/hero1';
import Shape from '../../assets/shape1.png';
import "./homePage.css";
import BookAppointment from '../../Components/Home/BookAppointment/bookAppointment'
import Services from '../../Components/Home/Services/services'
import Testimonial from "../../Components/Home/Testimonial/testimonial";
import LatestNews from "../../Components/Home/LatestNews/latestNews";
import Footer from '../../Components/Footer/footer'
export default function homePage() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        {/* <Home/> */}
        <Hero1 />
      <img style={{width:'100%'}} src={Shape}/>
      </div>
      <AboutUs />
      <WeWorks/>
      <BookAppointment/>
      <Services/>
      <Testimonial/>
      <LatestNews/>
      <div className="">

      <Footer/>
      </div>

      
    </>
  );
}
