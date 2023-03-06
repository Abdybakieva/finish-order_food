import { createAsyncThunk } from '@reduxjs/toolkit'
import authService from '../../api/authService'
import { STORAGE_KEYS } from '../../lib/constans/common'

export const sighup = createAsyncThunk(
  'auth/signup',
  async (payload, { rejectWidthValue }) => {
    try {
      const { data } = await authService.signUp(payload)
      const userData = data.data

      localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(userData))

      return userData
    } catch (error) {
      return rejectWidthValue(error)
    }
  }
)

export const sigin = createAsyncThunk(
  'auth/sigin',
  async (payload, { rejectWidthValue }) => {
    try {
      const { data } = await authService.signIn(payload)
      const userData = data.data

      localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(userData))
      return userData
    } catch (error) {
      return rejectWidthValue(error)
    }
  }
)
