import React from "react";
import { products } from "../utils/data";
import { NavLink } from "react-router-dom";

const Products = () => {
  return (
    <div className="flex w-3/4 h-auto gap-6">
      {products.map((p) => (
        <div className="group flex flex-col gap-4 w-full h-[60vh] text-center rounded-lg relative cursor-pointer">
          <img
            src={p.images[0]}
            alt=""
            className="w-full h-3/4 object-cover transition-all duration-500 group-hover:-translate-y-8"
          />
          <div className="flex flex-col">
            <h1 className="text-md text-black font-semibold">{p.title}</h1>
            <p className="text-xl text-black font-bold">{p.price}</p>
          </div>
          <NavLink to={`/product/${p.id}`}>
            <div className=" w-[27px] p-4 relative mx-auto  min-h-[27px] bg-darkgrey opacity-0 rounded-full transition-all duration-500 group-hover:opacity-100  group-hover:translate-y-2 ">
              <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-4 h-[2px] bg-white"></div>
              <div className="absolute top-2/4 left-2/4 -translate-x-2/4 rotate-90 -translate-y-2/4 w-4 h-[2px] bg-white"></div>
            </div>
          </NavLink>
          <div className="absolute -bottom-4 left-0 h-0 w-full transition-all duration-500 bg-darkgrey opacity-10 -z-10 rounded-lg group-hover:h-3/4"></div>
        </div>
      ))}
    </div>
  );
};

export default Products;
