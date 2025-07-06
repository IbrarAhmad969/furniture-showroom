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
import gsap from "gsap";
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP);

const NavBar = () => {
  const navBarRef = useRef()
  const navBarLinks = useRef([]);


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

  useGSAP(()=>{
    gsap.from(navBarRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animate links with stagger
    gsap.from(navBarLinks.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      stagger: 0.2,
      delay: 0.5,
      ease: "power2.out"
    });
  
  }, []);

  return (
    <div ref={navBarRef} className="static px-10 universal-shadow w-dvw h-[60px] flex items-center justify-between ">
      {/* logo */}

      <div className="flex sm580:hidden ">
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          <GiHamburgerMenu />
        </button>
      </div>

      <div>
        <div>
          {mobileMenu && (
            <div
              className={`${
                theme == "light" ? "bg-white" : "bg-black"
              } fixed overflow-y-auto left-0 top-[60px]  w-[80vw] max-w-[200px] h-[calc(100vh-60px)] universal-shadow z-50 sm580:hidden`}
            >
              <NavLinks mobile={true} linkRef={navBarLinks} />
            </div>
          )}
        </div>
        <h1 className="gradient-text text-4xl font-bold ">Future.</h1>
      </div>

      {/* Nav Links  */}

      <div className="hidden sm580:flex">
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
          <button
          onClick={()=>{
            navigate("/cart")
          }}
          
          >
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
