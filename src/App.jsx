import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Technology from "./components/Pages/Technology";
import Pledge from "./components/Pages/Pledge";
import Career from "./components/Pages/Career";
import About from "./components/Pages/About.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Blog from "./components/Pages/Blog.jsx";
import CareerApplication from "./components/Career/CareerApplication.jsx";


function App() {
  return (
    <>
      <Navbar />
       <ScrollToTop />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/pledge" element={<Pledge />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career1" element={<CareerApplication />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer/>
    
    </>
  );
}

export default App;


