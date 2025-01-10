import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Home from "./Components/Home";
import Belowfooter from "./Components/Belowfooter";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-black">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Footer />
        <Belowfooter />
      </div>
    </>
  );
}

export default App;
