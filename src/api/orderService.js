import axiosInstance from '../config/axiosInstance'

export const createOrderRequest = (data, token) => {
  return axiosInstance.post(`/orders`, data, {
    headers: { Authorization: token },
  })
}

export const getOrderRequest = (token) => {
  return axiosInstance.get(`/orders`, { headers: { Authorization: token } })
}

export const getAllOrderRequest = (token) => {
  return axiosInstance.get(`/orders/all`, { headers: { Authorization: token } })
}
