import { NavLink } from "react-router-dom";
import Search from "./Search";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const NavLinks = ({ mobile, linkRef, onLinkClick }) => {
  const { theme } = useContext(ThemeContext);

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className={`${mobile ? "mt-6 px-2" : ""}`}>
      {mobile && (
        <div className="mb-6">
          <Search mobile={true} />
        </div>
      )}

      <ul
        className={`${
          mobile ? "flex flex-col gap-3" : "sm:flex sm:flex-row sm:gap-6"
        } sm580:flex-row sm580:justify-center`}
      >
        {links.map((link, i) => (
          <li key={link.name} ref={(el) => (linkRef.current[i] = el)}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                mobile
                  ? `block w-full px-4 py-3 rounded-xl text-lg font-medium transition-colors duration-200
                      ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                          : `${
                              theme === "light"
                                ? "text-gray-800 hover:bg-gray-100"
                                : "text-gray-200 hover:bg-zinc-800"
                            }`
                      }`
                  : `link-underline ${
                      isActive
                        ? "link-underline-active text-blue-600"
                        : "hover:text-blue-400 text-gray-600 dark:text-white"
                    }`
              }
              onClick={() => {
                if (onLinkClick) onLinkClick(); // close sidebar on click
              }}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
