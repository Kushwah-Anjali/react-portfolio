import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Process from "./components/Process";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 80 });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <About />
      <Process />
      <Footer />
    </>
  );
}

export default App;
