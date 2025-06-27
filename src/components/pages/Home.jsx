import { useContext, useState } from "react";
import AboutCard from "../AboutCard";
import Button from "../buttons/Button";
import FooterGrid from "../footer/FooterGrid";
import Subscribe from "../footer/Subscribe";
import Products from "../Products";

import SearchContext from "../../context/SearchContext";

const Home = () => {
  const logoName = [
    {
      name: "Tesla",
      file: "logo1.png",
      url: "#",
    },
    {
      name: "ikea",
      file: "logo2.png",
      url: "#",
    },
    {
      name: "best_buy",
      file: "logo3.png",
      url: "#",
    },
    {
      name: "lorempizum",
      file: "logo4.png",
      url: "#",
    },
    {
      name: "united",
      file: "logo5.png",
      url: "#",
    },
    {
      name: "last",
      file: "logo6.png",
      url: "#",
    },
  ];

  // Centralized State for the Search Functionality
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const products = [
    {
      id: 1,
      imageUrl: "Images/product.png",
      name: "Leather Chair",
      description:
        "Sink into comfort with this plush velvet sofa — perfect for cozy evenings or classy hosting.",
    },
    {
      id: 2,
      imageUrl: "Images/product-1.png",
      name: "Modern Chair",
      description:
        "A sleek design that transforms into a comfy bed. Style and function? Yes, please.",
    },
    {
      id: 3,
      imageUrl: "Images/product-2.png",
      name: "Lamp ",
      description:
        "Retro meets modern in this three-seater beauty, crafted for lounging in style.",
    },
    {
      id: 4,
      imageUrl: "Images/product-3.png",
      name: "Relax Sofa ",
      description:
        "A bold statement piece that blends comfort and elegance for your reading nook or living space.",
    },
    {
      id: 5,
      imageUrl: "Images/product-4.png",
      name: "Family Sofa",
      description:
        "Designed to support your grind — comfy, breathable, and built for long hours of focus.",
    },
    {
      id: 6,
      imageUrl: "Images/product-5.png",
      name: "Mini Bed",
      description:
        "Minimalist vibes, maximum charm. These chairs upgrade any dinner setup effortlessly.",
    },
    {
      id: 7,
      imageUrl: "Images/product-6.png",
      name: "Sheep Chair",
      description:
        "A curated mix of comfort and style — everything you need to complete your dream space.",
    },
    {
      id: 8,
      imageUrl: "Images/product-1.png",
      name: "White Chair",
      description:
        "Handcrafted with natural wood grain finish, this table adds earthy charm to any room.",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Main Section, parent of all.
    <div className="">
      {searchTerm ? (
        <>
          <h2 className="text-2xl font-bold mb-4 p-5">
            Search Results for "{searchTerm}"
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, i) => (
                <Products
                  key={i}
                  product={product}
                />
              ))
            ) : (
              <p className="p-5">No products match your search.</p>
            )}
          </div>
        </>
      ) : (
        <>
          <div>
            <main className="w-full min-h-screen p-10 pt-[60px] overflow-x-hidden">
              <section className="flex flex-col sm:flex-row sm:items-start sm:justify-between h-full ">
                {/* left Div */}

                <div
                  className="flex flex-col items-center gap-10
        sm:flex-col sm:items-start sm:justify-start sm:gap-10 mt-20
        "
                >
                  <p
                    className={`text-lg font-bold tracking-wide sm:text-2xl sm:font-light`}
                  >
                    Interior Needs
                  </p>
                  <h1 className="text-center text-2xl sm:text-4xl font-bold  sm:w-100 sm:text-start">
                    Various{" "}
                    <span className="text-blue-500">new collections</span> image
                    of furniture to decorate the corner of your house.
                  </h1>

                  <Button text="Shop Now" />
                </div>

                {/* right Div */}
                <div className="flex justify-center items-center mt-10 sm:w-1/2 w-full sm:h-full">
                  <img
                    className={`w-full max-w-md h-auto object-contain rounded-lg`}
                    src="/Images/furniture-logo.png"
                  />
                </div>
              </section>

              {/* Logo Section  */}
              <section className="mt-20 sm:grid gap-y-5">
                <h3 className="text-center text-2xl font-bold mb-2.5">
                  Various brands have used our products
                </h3>
                <div className="bg-gray-400 rounded-2xl grid grid-cols-2 items-center justify-center sm:grid sm:grid-cols-6 sm:justify-center sm:items-center gap-3 ">
                  {logoName.map((logo, index) => (
                    <a
                      key={index}
                      href={logo.url}
                      target="_blank"
                      className="block mx-auto "
                    >
                      <img
                        src={`${"/logos/"}${logo.file}`}
                        alt={logo.name}
                        className="w-24 sm:w-28 md:w-32 h-auto object-contain transition-transform hover:scale-105"
                      />
                    </a>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <AboutCard
                    title="The Best Foam padded Chair"
                    image={`${"/Images/"}${"furniture-logo.png"}`}
                  />
                  <AboutCard
                    title="Latest model chandelier"
                    image={`${"/Images/"}${"chandelier.png"}`}
                  />
                </div>
              </section>

              <section className="mt-20">
                {/* Center Div */}
                <div className=" flex flex-col sm:items-center items-start gap-3 mt-2">
                  <h1 className="text-3xl font-bold  ">Our Newest Product</h1>
                  <p className="w-60 text-gray-500 text-start sm:text-center mb-10">
                    Made of the best materials and with a design that follows
                    the times
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 max-w-screen-xl w-full">
                    {filteredProducts.map((products, idx) => (
                      <Products
                        key={idx}
                        product={products}
                      />
                    ))}
                  </div>
                </div>
              </section>
            </main>

            <footer className="p-2 w-[100%] universal-shadow">
              <Subscribe />
              {/* Bottom Footer */}
              <FooterGrid />
            </footer>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
