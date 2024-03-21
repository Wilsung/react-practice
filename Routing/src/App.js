import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { createRoutesFromElements, Route } from "react-router-dom";

import HomePage from "./components/Home";
import ProductsPage from "./components/Products";
import RootLayout from "./components/Root";
import ErrorPage from "./components/Error";
import ProductDetailPage from "./components/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>}/>
//     <Route path="/products" element={<ProductsPage/>}/>
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions)

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, //the route path and the element it should go to.
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productID", element: <ProductDetailPage />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
