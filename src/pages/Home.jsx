import React from "react";
import Header from "../components/Header";
import Chooseus from "../components/Chooseus";
import Container from "../components/Container";
import Help from "../components/Help";
import About from "../components/About";
import Slider from "../components/Slider";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Container />
      <Chooseus />
      <Help />
      <About />
      <Slider />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
