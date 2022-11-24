import { createBrowserRouter } from "react-router-dom";
import Addproducts from "../Dashboard/Addproducts";
import Dashboard from "../Dashboard/Dashboard";
import MyAddedProducts from "../Dashboard/MyAddedProducts";
import Myproducts from "../Dashboard/Myproducts";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LogIn/Login";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "category/:id",
        element: <Category></Category>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/myproducts",
        element: <Myproducts></Myproducts>,
      },
      {
        path: "/dashboard/addproducts",
        element: <Addproducts></Addproducts>,
      },
      {
        path: "/dashboard/addedproducts",
        element: <MyAddedProducts></MyAddedProducts>,
      },
    ],
  },
]);
