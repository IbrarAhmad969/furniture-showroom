import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdOutlinePerson3 } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
import { MdOutlinePersonAdd } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import ThemeContext from "../context/ThemeContext";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);

  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();

  const dropDownRef = useRef(null);

  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setShowDropDown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="px-10 universal-shadow w-dvw h-[60px] flex items-center justify-between">

      {/* logo */}

      <div>
        <h1 className="gradient-text text-4xl font-bold">Future.</h1>
      </div>

      {/* Nav Links  */}
      <NavLinks></NavLinks>

      {/* Right Buttons */}

      <div className="flex gap-x-2">
        <div className="relative flex items-center w-6">
          {isSearchOpen ? (
            <input
              ref={inputRef}
              type="text"
              autoFocus
              placeholder="Search..."
              className="absolute right-0  top-1/2 -translate-y-1/2 w-48 px-3 py-1 rounded-md border border-white bg-white text-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              onBlur={() => setIsSearchOpen(false)}
            />
          ) : (
            <button onClick={() => setIsSearchOpen(true)}>
              <CiSearch
                className="cursor-pointer hover:text-gray-200 transition"
                size={24}
              />
            </button>
          )}
        </div>

        <div ref={dropDownRef} className="relative flex items-center gap-x-2">
          <button
            className="relative z-30"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <MdOutlinePerson3
              className="cursor-pointer"
              size={24}
            ></MdOutlinePerson3>{" "}
          </button>
          {showDropDown && (
            <div
              className={`${
                theme == "light" ? "" : "border border-white shadow-white"
              } absolute pt-3 pb-2 right-0 mt-2 w-30 rounded-md shadow-md z-10  `}
              style={{ top: "100%", right: "0%", position: "absolute" }}
            >
              <button
                className="dropdown-btn text-left"
                onClick={() => {
                  navigate("/login");
                  setShowDropDown(false);
                }}
              >
                <div className="flex items-center gap-2">
                  <MdPerson />
                  Login
                </div>
              </button>

              <button
                className="dropdown-btn text-left"
                onClick={() => {
                  navigate("/signup");
                  setShowDropDown(false);
                }}
              >
                <div className="flex items-center gap-2">
                  <MdOutlinePersonAdd />
                  Sign up
                </div>
              </button>

              <button
                className="dropdown-btn text-left"
                onClick={() => {
                  navigate("/");
                  setShowDropDown(false);
                }}
              >
                <div className="flex items-center gap-2">
                  <RiLogoutCircleLine />
                  Logout
                </div>
              </button>
            </div>
          )}
          <button>
            <CiShoppingCart
              className="cursor-pointer"
              size={24}
            ></CiShoppingCart>
          </button>
        </div>

        {/* Theme Toggle */}

        <button onClick={toggleTheme} className=" ml-4 cursor-pointer ">
          {theme === "light" ? <BsMoon size={20} /> : <BsSun size={20} />}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
