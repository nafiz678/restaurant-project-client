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
import ManageItems from "@/pages/dashboard/ManageItems";
import UpdateItem from "@/pages/dashboard/UpdateItem";
import Payment from "@/pages/dashboard/Payment/Payment";
import PaymentHistory from "@/pages/dashboard/PaymentHistory";
import UserHome from "@/pages/dashboard/UserHome";
import AdminHome from "@/pages/dashboard/AdminHome";



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
                path: "userHome",
                element: <UserHome></UserHome>,
            },
            {
                path: "cart",
                element: <Cart></Cart>,
            },
            {
                path: "payment",
                element: <Payment></Payment>,
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory> ,
            },

            // admin routes
            {
                path: "adminHome",
                element: <AdminRoute><AdminHome></AdminHome> </AdminRoute> ,
            },
            {
                path: "addItems",
                element: <AdminRoute><AddItems></AddItems></AdminRoute> ,
            },
            {
                path: "manageItems", 
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: "updateItem/:id", 
                element: <AdminRoute> <UpdateItem></UpdateItem> </AdminRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: "users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute> ,
            },
        ]
    }
]);

export default router