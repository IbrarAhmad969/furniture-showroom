import React from "react";
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const FooterGrid = () => {
  return (
    <div className="mt-10 text-center py-4 ">
      <div className="flex flex-col sm:flex-row sm:h-full">
        <div className="flex flex-col items-start gap-y-4 w-full sm:w-[30%] min-h-full md:pr-6 lg:pr-10">
          <h1 className="gradient-text text-4xl font-bold">Future.</h1>
          <p className="text-justify text-gray-400 w-full sm:max-w-full md:max-w-[300px] lg:max-w-[350px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            minus debitis nulla optio vel dolor omnis ea ex repellat, odit unde
            cumque temporibus aperiam assumenda laudantium et nemo. Vitae autem
            assumenda quaerat.
          </p>

          <div className="flex gap-4">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-red-600 w-6 h-6 hover:scale-110 transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500 w-6 h-6 hover:scale-110 transition" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-600 w-6 h-6 hover:scale-110 transition" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="dark:text-zinc-600 text-black w-6 h-6 hover:scale-110 transition" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 w-full sm:w-[40%] pt-4">
          <div className="w-[20%] min-h-full flex flex-col gap-3 items-start text-left pt-4">
            <h2 className="text-xl font-semibold mb-2">Explore</h2>
            {[
              "Customer",
              "Order Status",
              "Collections",
              "Our Story",
              "Affiliates",
              "Security",
            ].map((item) => (
              <a
                href="#"
                key={item}
                className="text-gray-500 hover:text-black transition dark:hover:text-blue-500"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Box 3 */}
          <div className="w-[20%] min-h-full flex flex-col gap-3 items-start text-left pt-4">
            <h2 className="text-xl font-semibold mb-2">Company</h2>
            {["Information", "Customer Service", "Careers", "FAQ"].map(
              (item) => (
                <a
                  href="#"
                  key={item}
                  className="text-gray-500 hover:text-black transition dark:hover:text-blue-500"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>

        {/* Box 4 */}
        <div className="w-full sm:w-[30%] min-h-full pt-4 flex flex-col items-center sm:items-start">
          <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">
            Follow Us
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((id) => (
              <a
                key={id}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={`Images/product-${id}.png`}
                  alt="Insta post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-50 transition bg-zinc-950">
                  <FaInstagram className="text-white text-2xl" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Future. All rights reserved.
      </div>
    </div>
  );
};

export default FooterGrid;
