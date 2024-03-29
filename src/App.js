import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages";
import { Routes, Route } from "react-router-dom";
import Me from "./pages/me";
import ContactMe from "./pages/contactme";
import Creations from "./pages/creations";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("I resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/me" element={<Me />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/creations" element={<Creations />} />
      </Routes>
    </>
  );
}

export default App;
