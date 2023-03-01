import { createAsyncThunk } from '@reduxjs/toolkit'
// import { mealsSlice } from '.'
import { fetchApi } from '../../lib/fetchAPI'

const getMeals = createAsyncThunk(
  'meals/getMeals',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await fetchApi('foods')
      //   mealsSlice.getMeals()
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export default getMeals
