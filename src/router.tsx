import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Layout from "./components/layout/layout";
import Notfound from "./pages/notfound/notfound";
import Details from "./pages/details/details";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "produto/iphone17",
        element: <Details />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

export { router };
