import axiosInstance from '../config/axiosInstance'

export const getMealRequest = () => {
  return axiosInstance.get('/foods')
}

export const getBasketRequest = (token) => {
  return axiosInstance.get('/basket', {
    headers: { Authorization: token },
  })
}

export const postBasketRequest = (newItem, token) => {
  return axiosInstance.post(
    `foods/${newItem.id}/addToBasket`,
    {
      amount: newItem.amount,
    },
    {
      headers: { Authorization: token },
    }
  )
}

export const putBasketRequest = (mealAmount, id, token) => {
  return axiosInstance.put(
    `basketItem/${id}/update`,
    { amount: mealAmount },
    { headers: { Authorization: token } }
  )
}

export const deleteBasketRequest = (id, token) => {
  return axiosInstance.delete(`basketItem/${id}/delete`, {
    headers: { Authorization: token },
  })
}

export const postSubmitOrder = (orderData, token) => {
  return axiosInstance.post(`/orders`, orderData, {
    headers: { Authorization: token },
  })
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
