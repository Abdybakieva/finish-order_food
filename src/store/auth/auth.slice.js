import { createSlice } from '@reduxjs/toolkit'
import { STORAGE_KEYS, UserRoles } from '../../lib/constans/common'
import { sighup, sigin, sigOut } from './auth.thunk'

const getInitialState = () => {
  const jsonData = localStorage.getItem(STORAGE_KEYS.AUTH)
  if (jsonData) {
    const userData = JSON.parse(jsonData)
    return {
      isAuthorized: true,
      token: userData.token,
      user: {
        name: userData.user.name,
        email: userData.user.email,
        role: userData.user.role,
      },
    }
  }
  return {
    isAuthorized: false,
    token: '',
    user: {
      email: '',
      name: '',
      role: UserRoles.GUEST,
    },
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(sighup.fulfilled, (state, { payload }) => {
      state.isAuthorized = true
      state.token = payload.token
      state.user = {
        name: payload.user.name,
        email: payload.user.email,
        role: payload.user.role,
      }
    })

    builder.addCase(sigin.fulfilled, (state, { payload }) => {
      state.isAuthorized = false
      state.token = payload.token
      state.user = {
        name: payload.user.name,
        email: payload.user.email,
        role: UserRoles.ADMIN,
      }
    })
    builder.addCase(sigOut.fulfilled, (state) => {
      state.isAuthorized = false
      state.token = ''
      state.user = {
        name: '',
        email: '',
        role: UserRoles.GUEST,
      }
    })
  },
})
export default authSlice
