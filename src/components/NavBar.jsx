import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlinePerson3 } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
import { MdOutlinePersonAdd } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import ThemeContext from "../context/ThemeContext";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "./Search";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../state/features/cart/cartSlice";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const NavBar = () => {
  const navBarRef = useRef();
  const navBarLinks = useRef([]);
  const total = useSelector(selectCartTotal);

  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropDownRef = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

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

  useGSAP(() => {
    gsap.from(navBarRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Animate links with stagger
    gsap.from(navBarLinks.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      stagger: 0.2,
      delay: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      ref={navBarRef}
      className={`universal-shadow ${theme=="dark"? "nav-shadow" : ""} fixed top-0 left-0 right-0 px-4 sm:px-10 h-[60px] z-50 bg-white dark:bg-zinc-900 flex items-center justify-between`}
    >
      {/* logo */}

      <div className="flex items-center gap-4 ">
        {/* Mobile Menu Button - only visible on small screens */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="sm580:hidden"
        >
          <GiHamburgerMenu size={24} />
        </button>

        <h1
          className="gradient-text text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Future.
        </h1>
      </div>

      <div>
        <div>
          {mobileMenu && (
            <div
              ref={dropDownRef}
              className={`${
                theme === "light" ? "bg-white" : "bg-zinc-900"
              } fixed top-[60px] left-0 w-[80vw] max-w-[250px] h-[calc(100vh-60px)] px-4 py-6 shadow-lg transition-all duration-300 z-40 sm580:hidden`}
            >
              <NavLinks mobile={true} linkRef={navBarLinks} />
            </div>
          )}
        </div>
      </div>

      {/* Nav Links  */}

      <div className="hidden sm580:flex absolute left-1/2 transform -translate-x-1/2">
        <NavLinks mobile={false} linkRef={navBarLinks} />
      </div>

      {/* Right Buttons */}

      <div className="flex gap-x-2">
        <Search />

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
                theme == "light" ? "bg-white shadow-black" : "border bg-zinc-800 border-white shadow-black"
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
          <button onClick={() => navigate("/cart")} className="relative">
            <CiShoppingCart className="cursor-pointer" size={28} />

            {total > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                {total}
              </span>
            )}
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
