import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import Chooseus from "./components/Chooseus";
import Help from "./components/Help";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Container />
      <Chooseus />
      <Help />
    </>
  );
};

export default App;
