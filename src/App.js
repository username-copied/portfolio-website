import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
