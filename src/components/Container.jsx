import React from "react";
import Info from "./Info";
import Products from "./Products";

const Container = () => {
  return (
    <section className="flex py-20  gap-4 px-20 h-auto w-full">
      <Info />
      <Products />
    </section>
  );
};

export default Container;
