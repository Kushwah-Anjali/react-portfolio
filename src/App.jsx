import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
// import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  useEffect(() => {
  AOS.init({ duration: 800 });
}, []); 
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      {/* <Projects /> */}
      <Footer />
    </>
  );
}

export default App;
