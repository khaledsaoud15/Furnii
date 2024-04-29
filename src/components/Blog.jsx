import React from "react";
import { blog } from "../utils/data";

const Blog = () => {
  return (
    <section className="flex flex-col gap-20 w-full h-screen px-24 mt-16">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">Recent Blogs</h1>
        <p className="text-semibold underline cursor-pointer">View All Posts</p>
      </div>
      <div className="flex w-full h-auto gap-4">
        {blog.map((i) => (
          <div className="group w-1/3 h-[30vh] flex flex-col gap-2 ">
            <img
              src={i.img}
              alt=""
              className="w-full h-auto object-cover rounded-xl group-hover:opacity-75 cursor-pointer"
            />
            <h1 className="font-semibold text-lg cursor-pointer">{i.title}</h1>
            <p className="text-gray-600 text-thin text-sm">
              by{" "}
              <span className="font-semibold text-black text-sm cursor-pointer">
                {i.name}
              </span>{" "}
              on{" "}
              <span className="font-semibold text-black text-sm cursor-pointer">
                {i.date}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
