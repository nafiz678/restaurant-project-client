import Dashboard from "@/layouts/Dashboard";
import MainLayout from "@/layouts/MainLayout";
import Cart from "@/pages/dashboard/Cart";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Menu from "@/pages/menu/Menu";
import Order from "@/pages/order/Order";
import Register from "@/pages/signup/Register";
import { createBrowserRouter } from "react-router-dom";
import AllUsers from "@/pages/dashboard/AllUsers";
import PrivateRoute from "./PrivetRoute";
import AddItems from "@/pages/dashboard/AddItems";
import AdminRoute from "./AdminRoute";



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
    {
        path: "/dashboard",
        element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
        children: [
            {
                path: "cart",
                element: <Cart></Cart>,
            },

            // admin routes
            {
                path: "addItems",
                element: <AdminRoute><AddItems></AddItems></AdminRoute> ,
            },
            {
                path: "users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute> ,
            },
        ]
    }
]);

export default router