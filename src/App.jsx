import { Routes, Route } from "react-router-dom";



import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Technology from "./components/Pages/Technology";
import Resources from "./components/Pages/Resources";
import Pledge from "./components/Pages/Pledge";
import Career from "./components/Pages/Career";
import About from "./components/Pages/About.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/pledge" element={<Pledge />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer/>
    
    </>
  );
}

export default App;


