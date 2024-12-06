import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'

const PublicRoutes = () => {
  return (
     <>
     <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
     </Routes>
     </>
  )
}

export default PublicRoutes