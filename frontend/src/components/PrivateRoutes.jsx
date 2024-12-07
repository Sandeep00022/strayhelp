import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import {useSelector} from 'react-redux'


const PrivateRoutes = () => {
  
  const {currentUser} = useSelector((store)=> store?.user)
  return  currentUser ? (<Outlet/>) :  (<Navigate to={"/login"} />);
}

export default PrivateRoutes