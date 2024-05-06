import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../redux/cartSlice";

const Shop = () => {
  const cart = useSelector((props) => props.cart.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = cart
      .map((c) => c.price * c.quantity)
      .reduce((acc, prev) => acc + prev, 0);

    setTotal(totalPrice);
  }, [total, cart.length]);

  const deletCart = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <>
      <Navbar />
      <section className="w-full h-screen flex flex-col">
        <header className="w-full h-2/4 text-white bg-shadegreen flex items-center justify-center">
          <h1 className="text-3xl font-semibold">CART</h1>
        </header>
        <div className="flex flex-col w-full  h-screen  px-24 py-16 z-20 bg-inherit">
          <div className="flex items-center w-full justify-between py-4 border-b-2 border-black">
            <h1 className="text-xl font-semibold ">Cart</h1>
            <h1 className="text-xl font-semibold ">Total:${total}</h1>
          </div>
          <div className="flex flex-col w-full h-full min-h-auto overflow-y-scroll ">
            {cart.length === 0 ? (
              <h1 className="text-xl text-center my-auto font-semibold  ">
                Your Cart is Empty
              </h1>
            ) : (
              <>
                {cart.map((el) => (
                  <div className="flex items-center justify-between border-b py-2 px-2">
                    <img src={el.img} alt="" className="w-[10%] " />
                    <h1 className="text-lg font-semibold ">
                      <span className="font-thin">Title: </span>
                      {el.title}
                    </h1>
                    <div className="flex items-center gap-1">
                      <span className="font-thin">Colors: </span>
                      {el.color.map((c) => (
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: c }}
                        ></div>
                      ))}
                    </div>
                    <p className="text-base font-thin">
                      <span className="font-thin">Quantity: </span>
                      {el.quantity}
                    </p>
                    <p className="text-base font-thin">
                      <span className="font-thin">Total: </span>$
                      {el.quantity * el.price}
                    </p>
                    <button
                      onClick={() => deletCart(el.id)}
                      className="bg-shadegreen text-white font-semibold text-sm py-2 px-8 rounded-lg shadow-md"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <button className="my-10 bg-shadegreen w-1/6 py-2 ml-24 text-white font-semibold rounded-lg shadow-md">
          Checkout
        </button>
      </section>
      <Footer />
    </>
  );
};

export default Shop;
