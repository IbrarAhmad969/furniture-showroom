import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdOutlinePerson3 } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);

  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();

  const dropDownRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(()=>{
    function handleClickOutside(event){
        if(dropDownRef.current && !dropDownRef.current.contains(event.target)){
            setShowDropDown(false);
        }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return ()=>{
        document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);



  return (
    <div className="px-10 bg-white shadow-2xl w-dvw h-[60px] flex items-center justify-between">
      <div>
        <h1 className="text-3xl">Future</h1>
      </div>

      <div className="">
        <ul className="flex  space-x-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pages"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Pages
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex gap-x-2">
        {/* Search Button/Input */}
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
              className="absolute right-0 mt-2 w-30 bg-white rounded-md shadow-lg z-10"
              style={{ top: "100%", position: "absolute" }}
            >
              <button
                className="dropdown-btn text-left"
                onClick={() => {
                  navigate("/login");
                  setShowDropDown(false);
                }}
              >
                Login
              </button>

              <button
                className="dropdown-btn text-left"
                onClick={() => {
                  navigate("/signup");
                  setShowDropDown(false);
                }}
              >
                Sign up
              </button>

              <button
                className="dropdown-btn text-left"
                onClick={() => {
                  navigate("/");
                  setShowDropDown(false);
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <button>
          <CiShoppingCart className="cursor-pointer" size={24}></CiShoppingCart>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
