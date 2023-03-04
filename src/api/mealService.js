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
