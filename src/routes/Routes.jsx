import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayout from '../layout/UserLayout'
import MealsPages from '../pages/Meals'
import { SignInPage } from '../pages/SignIn'
import { SignUpPage } from '../pages/SignUp'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<MealsPages />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signin" element={<SignInPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
