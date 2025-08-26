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
import { useLocation } from "react-router-dom";
import SearchContext from "../context/SearchContext";
import AuthContext from "../context/AuthContext";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { UserRound } from "lucide-react";
import api from "../api/api";

gsap.registerPlugin(useGSAP);

const NavBar = () => {
  // By Navigating, Search box carried a value, clear it.

  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const navBarRef = useRef();
  const navBarLinks = useRef([]);
  const touchStartX = useRef(0);

  const touchEndX = useRef(0);

  const total = useSelector(selectCartTotal);

  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropDownRef = useRef(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { user, logoutUser } = useContext(AuthContext);

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

  const location = useLocation();

  useEffect(() => {
    setSearchTerm("");
    setShowDropDown(false);
  }, [location]);

  useEffect(() => {
    // whenever route changes, close sidebar
    setMobileMenu(false);
  }, [location]);

  const handleLogOut = async () => {
    try {
      await api.post("/logout", {}, { withCredentials: true });
      logoutUser();
      navigate("/");
      setShowDropDown(false);
    } catch (error) {
      alert(`User can't be logout ${error?.message}`);
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      setMobileMenu(false);
    }
  };
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

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
      className={`universal-shadow ${
        theme == "dark" ? "nav-shadow" : ""
      } fixed top-0 left-0 right-0 px-4 sm:px-10 h-[60px] z-50 bg-white dark:bg-zinc-900 flex items-center justify-between`}
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
          onClick={() => {
            navigate("/");
          }}
        >
          Future.
        </h1>
      </div>

      <div>
        <div>
          <>
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              ref={dropDownRef}
              className={`${
                theme === "light" ? "bg-white" : "bg-zinc-900"
              } fixed top-[60px] left-0 w-[80vw] max-w-[250px] h-[calc(100vh-60px)] px-4 py-8 universal-shadow transform transition-all duration-900 ease-in-out z-50 sm580:hidden
                ${
                  mobileMenu
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
            >
              <button
                className="absolute top-3 right-4 bg-black text-white universal-shadow border px-3 rounded-2xl dark:text-gray-300"
                onClick={() => setMobileMenu(false)}
              >
                ✕
              </button>
              <NavLinks
                mobile={true}
                linkRef={navBarLinks}
                onLinkClicked={() => setMobileMenu(false)}
              />
            </div>
          </>
        </div>
      </div>

      {/* Nav Links  */}

      <div className="hidden sm580:flex absolute left-1/2 transform -translate-x-1/2">
        <NavLinks mobile={false} linkRef={navBarLinks} />
      </div>

      {/* Right Buttons */}

      <div className="flex gap-x-2">
        {(location.pathname === "/" || location.pathname === "/home ") && (
          <Search />
        )}

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
                theme == "light"
                  ? "bg-white shadow-black"
                  : "border bg-zinc-800 border-white shadow-black"
              } absolute pt-3 pb-2 right-0 mt-2 w-30 rounded-md shadow-md z-10  `}
              style={{ top: "100%", right: "0%", position: "absolute" }}
            >
              {!user ? (
                <>
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
                </>
              ) : (
                <>
                  <button
                    className="dropdown-btn text-left"
                    onClick={() => {
                      navigate("/userPage");
                      setShowDropDown(false);
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <UserRound className="cursor-pointer" size={18} />
                      Profile
                    </div>
                  </button>

                  <button
                    className="dropdown-btn text-left"
                    onClick={handleLogOut}
                  >
                    <div className="flex items-center gap-2">
                      <RiLogoutCircleLine />
                      Logout
                    </div>
                  </button>
                </>
              )}
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
