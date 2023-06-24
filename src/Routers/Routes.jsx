import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import DashHome from "../Pages/Dashboard/DashHome/DashHome";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AddClasses from "../Pages/Dashboard/ManageClasses/AddClasses";
import PrivateRoutes from "./PrivateRoutes";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
          },
          {
            path: 'signup',
            element: <SignUp></SignUp>
          },
          {
            path: 'instructors',
            element: <Instructors></Instructors>
          },
          {
            path: 'classes',
            element: <PrivateRoutes><Classes></Classes></PrivateRoutes>
          },
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children : [
        {
                path : 'dashHome',
                element : <DashHome></DashHome>
        },
        {
            path : 'manageClasses',
            element : <ManageClasses></ManageClasses>
        },
        {
            path : 'manageUsers',
            element : <ManageUsers></ManageUsers>
        },
        {
          path : 'addClass',
          element : <AddClasses></AddClasses>
        }
      ]
      // children : [
      //   {
      //       path : '/',
      //       element : <Home></Home>
      //   },
      //   {
      //       path: 'login',
      //       element: <Login></Login>
      //     },
      //     {
      //       path: 'signup',
      //       element: <SignUp></SignUp>
      //     },
      //     {
      //       path: 'instructors',
      //       element: <Instructors></Instructors>
      //     },
      //     {
      //       path: 'classes',
      //       element: <Classes></Classes>
      //     },
      // ]
    }
  ]);