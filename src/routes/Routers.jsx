import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from "../components/NavBar";

import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Shop from "../pages/Shop";
import Pages from "../pages/Shop";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Layout = () => (
  <>
    <NavBar />
    {/* The Children */}
    <Outlet />
  </>
);

let routers = createBrowserRouter([
  {
    // Layout is the parent because we still want to display our NavBar when we navigate through a page.

    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/pages",
        element: <Pages />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login", 
        element: <Login/>

      },
      {
        path: "/signUp",
        element: <SignUp/>
        
      }
    ],
  },
]);

const Routers = () => {
  return <RouterProvider router={routers} />;
};

export default Routers;
