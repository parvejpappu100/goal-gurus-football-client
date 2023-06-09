import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/Classes/Classes";

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
            }
        ]
    },
]);

export default router;