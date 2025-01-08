import Loader from "@/components/shared/Loader";
// import useAuth from "./useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "@/hooks/useAdmin";
import useAuth from "@/hooks/useAuth";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    console.log(isAdmin, isAdminLoading)
    const location = useLocation()

    if(loading || isAdminLoading)
    {
        return <Loader></Loader>
    }
    if(user && isAdmin)
    {
        return children
    }
    
    return <Navigate to={"/"} state={{from: location}} replace></Navigate>
};

export default AdminRoute;
