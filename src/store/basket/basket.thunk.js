import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  deleteBasketRequest,
  getBasketRequest,
  postBasketRequest,
  postSubmitOrder,
  putBasketRequest,
} from '../../api/mealService'

export const getBasket = createAsyncThunk(
  'basket/getBasket',
  async (payload, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth
      const { data } = await getBasketRequest(token)

      return data.data.items
    } catch (error) {
      return rejectWithValue('Some thing wen wronf')
    }
  }
)

export const addtoBasket = createAsyncThunk(
  'basket/addToBasket',
  async (newItem, { dispatch, rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth
      await postBasketRequest(newItem, token)
      // await fetchApi(`foods/${newItem.id}/addToBasket`, {
      //   method: 'POST',
      //   body: { amount: newItem.amount },
      // })

      return dispatch(getBasket())
    } catch (error) {
      return rejectWithValue('Some thing wen wronf')
    }
  }
)

export const updeteBasketItem = createAsyncThunk(
  'basket/updeteBasket',
  async ({ amount, id }, { dispatch, rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth
      await putBasketRequest(amount, id, token)
      // await fetchApi(`basketItem/${id}/update`, {
      //   method: 'PUT',
      //   body: { amount },
      // })
      dispatch(getBasket())
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const deleteBasketItem = createAsyncThunk(
  'basket/deleteBasket',
  async (id, { dispatch, rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth
      await deleteBasketRequest(id, token)
      // await fetchApi(`basketItem/${id}/delete`, {
      //   method: 'DELETE',
      // })
      dispatch(getBasket())
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const submitOrder = createAsyncThunk(
  'basket/submitOrder',
  async (totalPrice, { dispatch, rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth
      await postSubmitOrder(totalPrice, token)
      // await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      //   method: 'POST',
      //   body: orderData,
      // })

      return dispatch(getBasket())
    } catch (error) {
      return rejectWithValue('Some thing wen wronf')
    }
  }
)
