
const Subscribe = () => {
  return (
    <div className=" rounded-2xl bg-gray-200 dark:bg-zinc-700 text-black dark:text-white mt-16 p-5 flex flex-col md:flex-row items-center justify-between md:h-[400px] w-[100%]">
      {/* Left Section */}
      <div className="flex-1 p-5">
        <h1 className="font-bold text-2xl mb-4 ">
          Subscribe now and get 10% off all items
        </h1>
        <p className="mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <div className="flex">
          <input
            type="text"
            placeholder="Your email here."
            className="p-2 bg-white text-black dark:bg-white dark:text-black border w-full max-w-sm placeholder:opacity-60 outline-none"
          />
          <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-blue-600 hover:cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden sm:block sm:flex-1  sm:justify-center">
        <img
          src="Images/Subscribe.png"
          alt="Subscribe Banner"
          className="w-full sm:max-h-[300px] sm:object-contain"
        />
      </div>
    </div>
  );
};

export default Subscribe;
