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
import AdminRoute from "./AdminRoute";
import ManageClasses from "../pages/DashBoard/Admin/ManageClasses/ManageClasses";
import AddClass from "../pages/DashBoard/Coach/AddClass/AddClass";
import MyClasses from "../pages/DashBoard/Coach/MyClasses/MyClasses";
import CoachRoute from "./CoachRoute";
import Payment from "../pages/DashBoard/Students/Payment/Payment";
import EnrolledClass from "../pages/DashBoard/Students/EnrolledClasses/EnrolledClass";
import PaymentsHistory from "../pages/DashBoard/Students/PaymentsHistory/PaymentsHistory";

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
        element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children: [
            {
                path: "myCart",
                element: <MyCart></MyCart>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "enrolledClasses",
                element: <EnrolledClass></EnrolledClass>
            }, 
            {
                path: "paymentHistory",
                element: <PaymentsHistory></PaymentsHistory>
            },
            // * Admin routes:
            {
                path: "allUsers",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'manageClasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            // * Coach routes:
            {
                path: "addClass",
                element: <CoachRoute><AddClass></AddClass></CoachRoute>
            },
            {
                path: "myClasses",
                element: <CoachRoute><MyClasses></MyClasses></CoachRoute>
            }
        ]
    }
]);

export default router;