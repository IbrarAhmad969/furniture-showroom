import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from "../components/NavBar";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Contact from "../pages/Contact";
import ViewProductDetail from "../pages/ViewProductDetail";
import FurnitureBlog from "../pages/FurnitureBlog";

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
        element: <FurnitureBlog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/viewProductDetails",
        element: <ViewProductDetail />,
      },
     
    ],
  },
]);

const Routers = () => {
  return <RouterProvider router={routers} />;
};

export default Routers;
