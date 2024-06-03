import React from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Signup from "./pages/Signup";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";

const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/cart" element={<Shop />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
