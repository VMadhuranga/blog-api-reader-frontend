import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Posts from "./components/posts/Posts.jsx";
import ErrorPage from "./components/error-page/ErrorPage.jsx";
import Post from "./components/post/Post.jsx";
import Comments from "./components/comments/Comments.jsx";
import postsLoader from "./loaders/posts-loader.js";
import postLoader from "./loaders/post-loader.js";
import commentsLoader from "./loaders/comments-loader.js";
import createCommentAction from "./actions/create-comment-action.js";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/posts",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Posts />,
            loader: postsLoader,
          },
          {
            path: ":post_id",
            element: <Post />,
            loader: ({ params }) => {
              return postLoader(params);
            },
            children: [
              {
                index: true,
                element: <Comments />,
                loader: ({ params }) => {
                  return commentsLoader(params);
                },
                action: async ({ params, request }) => {
                  const formData = await request.formData();
                  const formDataObj = Object.fromEntries(formData);

                  const errors = await createCommentAction(params, formDataObj);

                  if (errors) {
                    return errors;
                  }

                  return null;
                },
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
