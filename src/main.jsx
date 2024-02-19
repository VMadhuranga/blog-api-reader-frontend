import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Posts from "./components/posts/Posts.jsx";
import ErrorPage from "./components/error-page/ErrorPage.jsx";
import Post from "./components/post/Post.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/posts",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: ":post_id",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
