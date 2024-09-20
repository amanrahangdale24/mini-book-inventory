import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../components/SignUp";
import Logging from "../components/Logging";
import PrtivateRoute from "../../PrivateRoute/PrtivateRoute";
import LogOut from "../components/LogOut";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/shop',
          element: <Shop/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
          path: '/blog',
          element: <Blog/>
        },
        {
          path: '/book/:id',
          element: <SingleBook/>,
          loader: ({params}) => fetch(`http://localhost:4044/book/${params.id}`)
          
        }
      ]
    },
    {
      path: "/admin/dashboard", 
      element:<DashboardLayout/>,
      children:[
        {
          path:'/admin/dashboard',
          element:<PrtivateRoute><Dashboard/></PrtivateRoute>
        },
        {
          path: '/admin/dashboard/upload',
          element:<UploadBook/>
        },
        {
          path: '/admin/dashboard/manage',
          element:<ManageBooks/>
        },
        {
          path: '/admin/dashboard/edit-books/:id',
          element:<EditBooks/>,
          loader: ({params}) => fetch(`http://localhost:4044/book/${params.id}`)
        }
      ]
    },{
      path: "/sign-up",
      element: <SignUp/>
    },
    {
      path: "login",
      element: <Logging/>
    },
    {
      path: "/logout",
      element: <LogOut/>
    }
  ]);

  export default router; 

