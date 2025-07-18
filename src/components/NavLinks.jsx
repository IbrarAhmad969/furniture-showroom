import { NavLink } from "react-router-dom";
import Search from "./Search";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const NavLinks = ({ mobile, linkRef }) => {
  const { theme } = useContext(ThemeContext);

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Pages",
      path: "/pages",
    },
   
  ];

  return (
    <div className={`${mobile ? "mt-10 px-4 " : ""}`}>
      <div className={`${mobile && "mb-3.5 h-6"}`}>
        {mobile && <Search mobile={true} />}
      </div>
      <ul
        className={`sm:flex sm:flex-row sm580:flex sm580:flex-col sm580:gap-2 space-x-4 `}
      >
        {
          links.map((link, i)=>(
            <li
            key={link.name}
            ref={(el) => linkRef.current[i] = el}
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `link-underline ${
                  isActive
                    ? "link-underline-active text-blue-600"
                    : "hover:text-blue-400 text-gray-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
          ))
        }
      </ul>
    </div>
  );
};

export default NavLinks;
