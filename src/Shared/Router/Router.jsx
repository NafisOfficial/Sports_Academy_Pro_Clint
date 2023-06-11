import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";
import Main from "../../Components/Main/Main";
import Classes from "../../Components/Classes/Classes";
import Instructors from "../../Components/Instructors/Instructors";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path: 'classes',
          element:<Classes></Classes>
        },
        {
          path:'instructors',
          element:<Instructors></Instructors>
        }
      ]
    },
  ]);

  export default router;