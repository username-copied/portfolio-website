import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, Switch } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
