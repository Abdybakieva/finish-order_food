import { createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import { getMeals, getMealsPage } from './meals.thunk'

export const mealsactionsTypes = {
  GET_MEALS_SUCCESS: 'GET_MEALS_SUCCESS',
  GET_MEALS_STARTED: 'GET_MEALS_STARTED',
  GET_MEALS_FAILED: 'GET_MEALS_FAILED',
}
const initialState = {
  meals: [],
  meal: {},
  isLoading: false,
}

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMeals.fulfilled, (state, action) => {
      state.meals = action.payload
      state.isLoading = false
      state.error = ''
    })

    builder.addCase(getMeals.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(getMeals.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(getMealsPage.fulfilled, (state, action) => {
      state.meal = action.payload
      state.isLoading = false
    })
  },
})

export const mealsActions = mealsSlice.actions
