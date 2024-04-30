import { useEffect, useState } from "react";
import { products } from "../utils/data";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [img, setImg] = useState("");

  useEffect(() => {
    const item = products.find((p) => p.id === +id);
    setProduct(item);
    setImg(item.images[0]);
  }, []);

  console.log(product);

  const handlclick = (i) => {
    product.images.find((item, index) => (i === index ? setImg(item) : ""));
  };

  return (
    <section className="flex w-full px-24 h-screen justify-between items-center">
      <div className="flex flex-col h-auto w-1/3">
        <div className="w-full h-[60vh] mb-8">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover drop-shadow-xl"
          />
        </div>
        <div className="flex items-center w-full h-full gap-4 justify-center">
          {product?.images.map((img, i) => (
            <img
              src={img}
              alt=""
              className="w-1/4 h-[20vh] object-cover border cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-xl active:scale-100 "
              onClick={() => handlclick(i)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 h-auto w-2/4">
        <h1 className="text-4xl font-semibold">{product?.title}</h1>
        <p className="text-base font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est
          voluptates facilis nisi fugiat sed praesentium, ut ipsum! Culpa
          nesciunt quibusdam delectus ducimus velit, aliquam eius tenetur omnis
          libero alias eaque ipsum. Expedita, repellat deserunt? Ratione quaerat
          consectetur quo laudantium.
        </p>
        <div className="flex items-center gap-2 ">
          <h4 className="text-xl font-thin">Available colors:</h4>
          {product?.colors.map((c) => (
            <div
              className="w-4 h-4 rounded-full cursor-pointer hover:scale-110   "
              style={{ backgroundColor: c }}
            ></div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3  border border-shadegreen text-black rounded-md font-semibold text-sm ">
            DEC
          </button>
          <p className="text-base font-semibold">1</p>
          <button className="px-3  border border-shadegreen text-black rounded-md font-semibold text-sm">
            INC
          </button>
        </div>
        <h4 className="text-xl font-thin">
          Price :<span className="font-semibold">{product?.price}</span>
        </h4>
        <button className="w-1/3 bg-shadegreen py-2 rounded-xl text-white font-semibold text-sm">
          ADD TO CART
        </button>
      </div>
    </section>
  );
};

export default Product;
