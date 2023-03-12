import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  deleteMealsRequest,
  getMealRequest,
  getMealsPageRequest,
  postMealsRequest,
  updateMealsRequest,
} from '../../api/mealService'

export const getMeals = createAsyncThunk(
  'meals/getMeals',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getMealRequest()
      return data.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
export const postMeals = createAsyncThunk(
  'meals/postMeals',
  async (addData, { rejectWithValue, dispatch, getState }) => {
    try {
      const { token } = getState().auth
      await postMealsRequest(addData, token)
      return dispatch(getMeals())
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const deleteMeals = createAsyncThunk(
  'meals/deleteMeals',
  async (id, { rejectWithValue, dispatch, getState }) => {
    try {
      const { token } = getState().auth
      await deleteMealsRequest(id, token)
      return dispatch(getMeals())
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const updateMeals = createAsyncThunk(
  'meals/updateMeals',
  async (dataUpdate, { rejectWithValue, dispatch, getState }) => {
    try {
      const { token } = getState().auth
      await updateMealsRequest(dataUpdate, token)
      return dispatch(getMeals())
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const getMealsPage = createAsyncThunk(
  'meals/OneMeal',
  async (id, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth
      const { data } = await getMealsPageRequest(id, token)
      // return dispatch(getMeals())
      return data.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
