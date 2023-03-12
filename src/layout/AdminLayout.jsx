import { Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../components/header/header-admin/AdminHeader'

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <Grid>
        <Outlet />
      </Grid>
    </div>
  )
}

export default AdminLayout
