import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
// import LoginShadCn from "@/pages/login/LoginShadCn";
import Menu from "@/pages/menu/Menu";
import Order from "@/pages/order/Order";
import Register from "@/pages/signup/Register";
import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/order/:category",
                element: <Order></Order>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Register></Register>
            },
        ]
    },
]);

export default router