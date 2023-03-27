import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createOrderRequest,
  getAllOrderRequest,
  getOrderRequest,
} from '../../api/orderService'

export const postOrder = createAsyncThunk(
  'meal/postOrder',
  async (totalPrice, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth
      return await createOrderRequest(totalPrice, token)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const getOrder = createAsyncThunk(
  'meals/getOrder',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth
      const { data } = await getOrderRequest(token)
      return data.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const getAllOrder = createAsyncThunk(
  'meals/getAllOrder',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth
      const { data } = await getAllOrderRequest(token)
      return data.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
