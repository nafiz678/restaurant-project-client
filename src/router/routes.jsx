import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/home/Home";
import Menu from "@/pages/menu/Menu";
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
        ]
    },
]);

export default router