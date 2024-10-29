import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const HomePage = lazy(() => import("../../pages/home"));
const NotFoundPage = lazy(() => import("../../pages/notFound"));
const TodoPage = lazy(() => import("../../pages/todo"));
const BlogPage = lazy(() => import("../../pages/blog"));

export const Router = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "blog",
          element: <BlogPage />,
        },
        {
          path: "todo",
          element: <TodoPage />,
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
