import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import CoffeeDetail from "../components/CoffeeDetail";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Users from "../components/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () =>
          fetch(
            "https://coffee-store-server-ce8t4z2kr-st7691s-projects.vercel.app/coffees",
          ),
        element: <Home></Home>,
      },
      {
        path: "/coffee/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-ce8t4z2kr-st7691s-projects.vercel.app/coffees/${params.id}`,
          ),
        element: <CoffeeDetail></CoffeeDetail>,
      },
      {
        path: "/addcoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updatecoffee/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-ce8t4z2kr-st7691s-projects.vercel.app/coffees/${params.id}`,
          ),
        element: <UpdateCoffee></UpdateCoffee>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",
        loader: () =>
          fetch(
            "https://coffee-store-server-ce8t4z2kr-st7691s-projects.vercel.app/users",
          ),
        element: <Users></Users>,
      },
    ],
  },
]);
