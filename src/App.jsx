import "./App.css";
import HomePage from "./Pages/HomePage/homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage/aboutUsPage";
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
      </Routes>
    </Router>
    {/* <HomePage/> */}
    </>
  );
}

export default App;
