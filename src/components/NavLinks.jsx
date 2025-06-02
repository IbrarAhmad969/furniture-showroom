import { NavLink } from "react-router-dom";
import Search from "./Search";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const NavLinks = ({ mobile }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${mobile ? "mt-10 px-4 " : ""}`}>
      <div className={`${mobile && "mb-3.5 h-6"}`}>
        {mobile && <Search mobile={true} />}
      </div>
      <ul
        className={`sm:flex sm:flex-row sm580:flex sm580:flex-col sm580:gap-2 space-x-4 `}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `link-underline ${
                isActive
                  ? "link-underline-active text-blue-600"
                  : "hover:text-blue-400 text-gray-600"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `link-underline ${
                isActive
                  ? "link-underline-active text-blue-600"
                  : "hover:text-blue-400 text-gray-600"
              }`
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `link-underline ${
                isActive
                  ? "link-underline-active text-blue-600"
                  : "hover:text-blue-400 text-gray-600"
              }`
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pages"
            className={({ isActive }) =>
              `link-underline ${
                isActive
                  ? "link-underline-active text-blue-600"
                  : "hover:text-blue-400 text-gray-600"
              }`
            }
          >
            Pages
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
