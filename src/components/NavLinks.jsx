import React from 'react'
import { NavLink } from 'react-router-dom'


const NavLinks = () => {
  return (
    <div className="">
            <ul className="flex space-x-4">
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
  )
}

export default NavLinks
