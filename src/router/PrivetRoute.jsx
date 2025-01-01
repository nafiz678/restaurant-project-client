import { AuthContext } from '@/provider/AuthProvider';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading) return <Loader></Loader>

    if(user){
        return children
    }


    return (
        <Navigate to={"/login"}></Navigate>
    );
};

export default PrivetRoute;