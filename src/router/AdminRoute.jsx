import Loader from "@/components/shared/Loader";
// import useAuth from "./useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "@/hooks/useAdmin";
import useAuth from "@/hooks/useAuth";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
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
