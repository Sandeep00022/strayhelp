import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
    const {currentUser} = useSelector((store)=> store?.user)
    return  currentUser && currentUser?.role == 'admin' ? (<Outlet/>) :  (<Navigate to={"/login"} />);
}

export default AdminRoute