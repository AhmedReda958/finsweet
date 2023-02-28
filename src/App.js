import Layout from "routes/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes";
import "./style/App.scss";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/contact", element: <p>contact</p> },
        { path: "/features", element: <p>features</p> },
        { path: "/pricing", element: <p>pricing</p> },
        { path: "/faq", element: <p>FAQ</p> },
        { path: "/blog", element: <p>Blog</p> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
