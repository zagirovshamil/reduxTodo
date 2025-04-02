import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { HomePage, TodoPage, BlogPage, NotFoundPage } from "../../pages";

export const Router = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "todo",
          element: <TodoPage />,
        },
        {
          path: "blog",
          element: <BlogPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <Suspense fallback={<div>...Loading</div>}>{router}</Suspense>;
};
