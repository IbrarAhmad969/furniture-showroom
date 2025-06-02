import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Home = () => {
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
          <h1 className="text-center text-2xl font-bold  sm:w-100 sm:text-start">
            Various <span className="text-blue-500">new collections</span> image
            of furniture to decorate the corner of your house.
          </h1>

          <button className="px-15 py-4 text-blue-500 border-2 hover:cursor-pointer hover:text-blue-900">
            Shope Now
          </button>
        </div>

        {/* right Div */}
        <div className="flex justify-center items-center mt-10 sm:w-1/2 w-full sm:h-full">
          <img
            className={`w-full max-w-md h-auto object-contain rounded-lg`}
            src="/Images/furniture-logo.png"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
