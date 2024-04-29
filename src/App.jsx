import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import Chooseus from "./components/Chooseus";
import Help from "./components/Help";
import About from "./components/About";
import Slider from "./components/Slider";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Container />
      <Chooseus />
      <Help />
      <About />
      <Slider />
      <Blog />
      <Footer />
    </>
  );
};

export default App;
