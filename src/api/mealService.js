import axiosInstance from '../config/axiosInstance'

export const getMealRequest = () => {
  return axiosInstance.get('/foods')
}

export const getBasketRequest = () => {
  return axiosInstance.get('/basket')
}

export const postBasketRequest = (newItem) => {
  return axiosInstance.post(`foods/${newItem.id}/addToBasket`, {
    amount: newItem.amount,
  })
}

export const putBasketRequest = (mealAmount, id) => {
  return axiosInstance.put(`basketItem/${id}/update`, { amount: mealAmount })
}

export const deleteBasketRequest = (id) => {
  return axiosInstance.delete(`basketItem/${id}/delete`)
}

export const postSubmitOrder = (orderData) => {
  return axiosInstance.post(
    `https://jsonplaceholder.typicode.com/posts`,
    orderData
  )
}

export const postMealsRequest = (addMeals, token) => {
  return axiosInstance.post(`foods`, addMeals, {
    headers: { Authorization: token },
  })
}

export const deleteMealsRequest = (id, token) => {
  return axiosInstance.delete(`foods/${id}`, {
    headers: { Authorization: token },
  })
}

export const updateMealsRequest = (dataUpdate, token) => {
  return axiosInstance.put(`foods/${dataUpdate.id}`, dataUpdate, {
    headers: { Authorization: token },
  })
}

export const getMealsPageRequest = (id, token) => {
  return axiosInstance.get(`foods/${id}`, {
    headers: { Authorization: token },
  })
}
