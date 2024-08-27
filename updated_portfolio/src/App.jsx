import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import HomePage from "./pages/HomePage";
// // import PostPage, { loader as postLoader } from "./pages/Post";
import RootLayout from "./pages/RootLayout";
import AboutMePage from "./pages/AboutMe";
import ProjectsPage from "./pages/Projects.jsx";

// const BlogPage = lazy(() => import("./pages/Blog"));
// const PostPage = lazy(()=> import('./pages/Post'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        index: true,
            element: <AboutMePage />,

      },
      {
        path: "projects",
        children: [
          {
            index: true,
            element: <ProjectsPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
