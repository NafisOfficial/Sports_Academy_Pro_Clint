import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";
import Main from "../../Components/Main/Main";
import Classes from "../../Components/Classes/Classes";
import Instructors from "../../Components/Instructors/Instructors";
import Errorpage from "../../Components/ErrorPage/Errorpage";
import StudentClasses from "../../Components/StudentClasses/StudentClasses";
import StudentEnrolled from "../../Components/StudentEnrolled/StudentEnrolled";
import InstructorClasses from "../../Components/InstructorClasses/InstructorClasses";
import InstructorAddClasses from "../../Components/InstructorAddClasses/InstructorAddClasses";
import ManageUsers from "../../Components/ManageUsers/ManageUsers";
import ManageClasses from "../../Components/ManageClasses/ManageClasses";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Errorpage></Errorpage>,
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
        },
        {
          path:'studentClasses',
          element:<StudentClasses></StudentClasses>
        },
        {
          path:'enrolled',
          element:<StudentEnrolled></StudentEnrolled>
        },
        {
          path:'instructorsClasses',
          element:<InstructorClasses></InstructorClasses>
        },
        {
          path:'addClasses',
          element:<InstructorAddClasses></InstructorAddClasses>
        },
        {
          path:'manageUsers',
          element:<ManageUsers></ManageUsers>,
          loader: ()=>fetch('http://localhost:5000/users')
        },
        {
          path:'manageClasses',
          element:<ManageClasses></ManageClasses>,
          loader: ()=>fetch('http://localhost:5000/addedClass')
        }
      ]
    },
  ]);

  export default router;