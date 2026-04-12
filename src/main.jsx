import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Component/Root";
import Books from "./Books";
import PageOfRead from "./Component/PageOfRead";
import Home from "./Home";
import BookDetails from "./Component/BookDetails/BookDetails";
import BookProvider from "./BookContext/BookContext";
import { ToastContainer } from "react-toastify";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/listed-book",
        element: <Books />,
      },
      {
        path: "/pageOfRead",
        element: <PageOfRead />,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
    ],
    errorElement: <h1>page is not found</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
    <ToastContainer />
  </StrictMode>,
);
