import { createBrowserRouter } from "react-router-dom";
import Addproducts from "../Dashboard/Addproducts";
import AdvertiseProduct from "../Dashboard/AdvertiseProduct";
import MyAddedProducts from "../Dashboard/MyAddedProducts";
import Myproducts from "../Dashboard/Myproducts";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import Route404 from "../Pages/404Route/Route404";
import Blog from "../Pages/Blog/Blog";
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
      {
        path: "blogs",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: "/dashboard",
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
      {
        path: "/dashboard/advertiseproducts",
        element: <AdvertiseProduct></AdvertiseProduct>,
      },
    ],
  },
  {
    path: "*",
    element: <Route404></Route404>,
  },
]);
