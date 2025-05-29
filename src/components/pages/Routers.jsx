import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "../NavBar"
import Home from "./Home";
import Blog from "./Blog";
import Shop from "./Shop";
import Pages from "./Pages";


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
    ],
  },
]);



const Routers = () => {
  return (
   <RouterProvider router={routers} />
  )
}

export default Routers
