import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import CoffeeDetail from "../components/CoffeeDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        element: <Home></Home>,
      },
      {
        path: "/coffee/:id",
        loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
        element: <CoffeeDetail></CoffeeDetail>,
      },
      {
        path: "/addcoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updatecoffee/:id",
        loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
        element: <UpdateCoffee></UpdateCoffee>,
      },
    ],
  },
]);
