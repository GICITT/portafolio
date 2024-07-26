import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div>
      {" "}
      <ToastContainer />
      <NavBar />
      <Hero />
      <About />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}
