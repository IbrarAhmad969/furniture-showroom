import React from "react";
import Button from "./buttons/Button";

const AboutCard = ({ title, image }) => {
  return (
    <div className="universal-shadow shadow-md rounded-2xl sm:w-full sm:h-full sm:grid sm:grid-cols-2 mt-3.5 hover:cursor-pointer">
      {/* left side */}
      <div
        className="
        flex flex-col items-center gap-y-2 mb-2
        sm:p-5 sm:flex sm:flex-col sm:justify-evenly sm:items-start
        "
      >
        <p className="tracking-wider text-start text-blue-500">Living Room</p>
        <h1 className="text-xs sm:text-3xl font-bold ">{title}</h1>

        <Button text="Shop Now" />
      </div>

      {/* Right Side */}

      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default AboutCard;
