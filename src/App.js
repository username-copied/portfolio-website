import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <Navbar />
    /* <Routes>
        <Route path="/" component={Navbar} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/footer" component={Footer} />
        <Route path="/projects" component={Projects} />
      </Routes> */
  );
}

export default App;
