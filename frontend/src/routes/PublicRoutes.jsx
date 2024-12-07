import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import DashBoard from '../pages/dashboard/dashboard'
import PrivateRoutes from '../components/PrivateRoutes'

const PublicRoutes = () => {
  return (
     <>
     <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoutes/>}>
        <Route path="/dashboard" element={<DashBoard />} />
        </Route>
     </Routes>
     </>
  )
}

export default PublicRoutes