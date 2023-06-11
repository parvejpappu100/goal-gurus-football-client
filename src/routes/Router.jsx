import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import Coaches from "../pages/Coaches/Coaches";

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
]);

export default router;