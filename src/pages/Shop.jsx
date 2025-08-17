import { useState } from "react";
import Products from "../components/Products";
import ShopProducts from "../components/ShopProducts";

import Subscribe from "../components/footer/Subscribe";
import FooterGrid from "../components/footer/FooterGrid";

const Shop = () => {
  const buttons = ["Best Seller", "On Sale", "New Arrival", "Top Rated"];
  const [active, setIsActive] = useState(buttons[0]);

   const products = [
    {
      id: 1,
      imageUrl: "Images/product.png",
      name: "Leather Chair",
      price: "55000",
      description:
        "Sink into comfort with this plush velvet sofa — perfect for cozy evenings or classy hosting.",
    },
    {
      id: 2,
      imageUrl: "Images/product-1.png",
      name: "Modern Chair",
      price: "34000",
      description:
        "A sleek design that transforms into a comfy bed. Style and function? Yes, please.",
    },
    {
      id: 3,
      imageUrl: "Images/product-2.png",
      name: "Lamp ",
      price: "52000",

      description:
        "Retro meets modern in this three-seater beauty, crafted for lounging in style.",
    },
    {
      id: 4,
      imageUrl: "Images/product-3.png",
      name: "Relax Sofa ",
      price: "52130",

      description:
        "A bold statement piece that blends comfort and elegance for your reading nook or living space.",
    },
    {
      id: 5,
      imageUrl: "Images/product-4.png",
      name: "Family Sofa",
      price: "12000",

      description:
        "Designed to support your grind — comfy, breathable, and built for long hours of focus.",
    },
    {
      id: 6,
      imageUrl: "Images/product-5.png",
      name: "Mini Bed",
      price: "24000",

      description:
        "Minimalist vibes, maximum charm. These chairs upgrade any dinner setup effortlessly.",
    },
    {
      id: 7,
      imageUrl: "Images/product-6.png",
      name: "Sheep Chair",
      price: "10000",

      description:
        "A curated mix of comfort and style — everything you need to complete your dream space. ",
    },
    {
      id: 8,
      imageUrl: "Images/product-1.png",
      name: "White Chair",
      price: "35000",

      description:
        "Handcrafted with natural wood grain finish, this table adds earthy charm to any room.",
    },
  ];

  

  return (
    <div className=" w-screen min-h-screen pt-[60px]">
      <div className="p-2 rounded flex flex-col m-5 dark:bg-zinc-900 bg-gray-100 h-full overflow-x-hidden">
        <h1 className="text-center text-3xl font-bold text-blue-900">
          Evaluate Your Space
        </h1>

        <div className="pt-5 flex gap-3 overflow-x-auto no-scrollbar">
          {buttons.map((buttonText, index) => (
            <button
              key={index}
              onClick={() => setIsActive(buttonText)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg border transition-all duration-200
           ${
             active === buttonText
            ? "bg-amber-500 text-white border-amber-500"
            : "bg-white dark:bg-zinc-800 text-black dark:text-white border-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700"
           }`}
            >
              {buttonText}
            </button>
          ))}
        </div>
       
        
        <div className="grid grid-cols-2 mt-10 gap-x-2">
           {
            products.map((item, index)=> (
              <div className="" key={index}>
                <ShopProducts product={item} shopProduct={true}></ShopProducts>
              </div>
            ))
           }
        </div>
      </div>

      <div className="m-5">
        <Subscribe></Subscribe>

        <FooterGrid></FooterGrid>
      </div>
    </div>
  );
};

export default Shop;
