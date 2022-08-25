import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, Switch } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <About />
    </>
  );
}

export default App;
