import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  Login,
  Landing,
  HomeLayout,
  Register,
  Orders,
  Error,
} from "./pages"; 
import { ErrorElement } from "./components"; 
// loaders
import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as productsLoader } from './pages/Products';
// actions
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />, 
        errorElement: <ErrorElement/>, 
        loader: landingLoader
      },
      {
        path: "/products",
        element: <Products />,
        errorElement: <ErrorElement/>, 
        loader: productsLoader
      },
      {
        path: "products/:id",
        element: <SingleProduct />, 
        errorElement: <ErrorElement/>, 
        loader: singleProductLoader
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
