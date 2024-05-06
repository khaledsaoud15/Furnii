import nordik from "../images/product-1.png";
import nordick1 from "../images/nordick-1.png";
import nordick2 from "../images/nordick-2.png";
import Kruzo from "../images/product-2.png";
import kruzo1 from "../images/kruzo-1.png";
import kruzo2 from "../images/kruzo-2.png";
import ergonomic from "../images/product-3.png";
import ergo1 from "../images/ergo-1.png";
import ergo2 from "../images/ergo-2.png";

import truck from "../images/truck.svg";
import bag from "../images/bag.svg";
import support from "../images/support.svg";
import share from "../images/return.svg";

import blog1 from "../images/post-1.jpg";
import blog2 from "../images/post-2.jpg";
import blog3 from "../images/post-3.jpg";

export const links = [
  { link: "Home", path: "/" },
  { link: "Shop" },
  { link: "About us" },
  { link: "Services" },
  { link: "Blog" },
  { link: "Contact us" },
];

export const products = [
  {
    id: 1,
    title: "Nordik Chair",
    price: 500.0,
    images: [nordik, nordick1, nordick2],
    colors: ["#deb351", "#92a953", "#509766"],
  },
  {
    id: 2,
    title: "Kruzo Aero Chair",
    price: 780.0,
    images: [Kruzo, kruzo1, kruzo2],
    colors: ["#9ceeeb", "#9afac8", "#d2fc8d", "#9c639a", "#74afe3"],
  },
  {
    id: 3,
    title: "Ergonomic Chair",
    price: 430.0,
    images: [ergonomic, ergo1, ergo2],
    colors: ["#000000", "#412728", "#7f4d3e"],
  },
];

export const items = [
  {
    id: 1,
    title: "Fast & Free Shipping",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    icon: truck,
  },
  {
    id: 2,
    title: "Easy to Shop",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    icon: bag,
  },
  {
    id: 3,
    title: "24/7 Support",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    icon: support,
  },
  {
    id: 4,
    title: "Hassle Free Returns",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    icon: share,
  },
];

export const aboutus = [
  {
    id: 1,
    title: "Nordik Chair",
    img: nordik,
  },
  {
    id: 2,
    title: "Kruzo Aero Chair",
    img: Kruzo,
  },
  {
    id: 3,
    title: "Ergonomic Chair",
    img: ergonomic,
  },
];

export const blog = [
  {
    id: 1,
    title: "First Time Home Owner Ideas",
    img: blog1,
    name: "Kristin Watson",
    date: "Dec 19, 2021",
  },
  {
    id: 2,
    title: "How To Keep Your Furniture Clean",
    img: blog2,
    name: "Robert Fox",
    date: "Dec 15, 2021",
  },
  {
    id: 3,
    title: "Small Space Furniture Apartment Ideas",
    img: blog3,
    name: "Kristin Watson",
    date: "Dec 12, 2021",
  },
];

export const links1 = ["About us", "Services", "Blog", "Contact us"];
export const links2 = ["Support", "Knowledge base", "Live Chat", "", ""];
export const links3 = ["Jobs", "Our Team", "Leardship", "Privacy Policy"];
export const links4 = ["Nordic Chair", "Kruzo Aero", "Ergonomic Chair", "", ""];
