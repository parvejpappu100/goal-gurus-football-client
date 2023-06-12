import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import Coaches from "../pages/Coaches/Coaches";
import DashBoard from "../layouts/DashBoard";
import PrivateRoutes from "./PrivateRoutes";
import MyCart from "../pages/DashBoard/Students/MyCart/MyCart";
import AllUsers from "../pages/DashBoard/Admin/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "allClass",
                element: <Classes></Classes>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "singUp",
                element: <SingUp></SingUp>
            },
            {
                path: "coaches",
                element: <Coaches></Coaches>
            }
        ]
    },
    {
        path: "/dashBoard",
        element : <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children: [
            {
                path: "myCart",
                element: <MyCart></MyCart>
            },
            {
                path: "allUsers",
                element: <AllUsers></AllUsers>
            }
        ]
    }
]);

export default router;