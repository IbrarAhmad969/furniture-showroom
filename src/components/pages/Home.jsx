import AboutCard from "../AboutCard";
import Button from "../buttons/Button";
import Products from "../Products";

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
  return (
    // Main Section, parent of all.
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
            Various <span className="text-blue-500">new collections</span> image
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
            Made of the best materials and with a design that follows the times
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] px-4">
            <Products imageUrl={"/public/Images/product.png"} />
            <Products imageUrl={"/public/Images/product-1.png"} />
            <Products imageUrl={"/public/Images/product-2.png"} />
            <Products imageUrl={"/public/Images/product-3.png"} />
            <Products imageUrl={"/public/Images/product-4.png"} />
            <Products imageUrl={"/public/Images/product-5.png"} />
            <Products imageUrl={"/public/Images/product-6.png"} />
            <Products imageUrl={"/public/Images/product-1.png"} />

          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
