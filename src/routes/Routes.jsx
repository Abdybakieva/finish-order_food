import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Order from '../components/order/Order'

import AdminLayout from '../layout/AdminLayout'
import UserLayout from '../layout/UserLayout'
import { UserRoles } from '../lib/constans/common'
import Meals from '../pages/admin/meals/Meals.page'
import Orders from '../pages/admin/Orders.page'
import MealsPages from '../pages/user/Meals'
import { SignInPage } from '../pages/user/SignIn'
import { SignUpPage } from '../pages/user/SignUp'
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
  const role = useSelector((state) => state.auth.user.role)
  const isAllowed = (roles) => {
    return roles.includes(role)
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute
            isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
            fallBackPath="/admin/meals"
            component={UserLayout}
          />
        }
      >
        <Route
          index
          element={
            <ProtectedRoute
              isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
              fallBackPath="/admin/meals"
              component={MealsPages}
            />
          }
        />

        <Route
          path="order"
          element={
            <ProtectedRoute
              isAllowed={isAllowed([UserRoles.USER])}
              fallBackPath={role === UserRoles.ADMIN ? '/admin/meals' : '/'}
              component={Order}
            />
          }
        />

        <Route
          path="signup"
          element={
            <ProtectedRoute
              isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
              fallBackPath={role === UserRoles.ADMIN ? '/admin/meals' : '/'}
              component={SignUpPage}
            />
          }
        />

        <Route
          path="signin"
          element={
            <ProtectedRoute
              isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
              fallBackPath={role === UserRoles.ADMIN ? '/admin/meals' : '/'}
              component={SignInPage}
            />
          }
        />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoute
            isAllowed={isAllowed([UserRoles.ADMIN])}
            fallBackPath="/"
            component={AdminLayout}
          />
        }
      >
        <Route
          path="meals"
          element={
            <ProtectedRoute
              isAllowed={isAllowed([UserRoles.ADMIN])}
              fallBackPath="/"
              component={Meals}
            />
          }
        />
        <Route
          path="orders"
          element={
            <ProtectedRoute
              isAllowed={isAllowed([UserRoles.ADMIN])}
              fallBackPath="/"
              component={Orders}
            />
          }
        />
      </Route>
      <Route path="*" element={<Typography>Not found</Typography>} />
    </Routes>
  )
}

export default AppRoutes
