import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrder } from '../../store/order/order.thunk'

const Order = () => {
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.orders.orders)
  useEffect(() => {
    dispatch(getOrder())
  }, [])
  return (
    <div>
      {orders.map((item) =>
        item.items.map((meal) => {
          return (
            <>
              <p>{meal.title}</p>
              <p>{meal.price}</p>
              <p>{meal.amount}</p>
            </>
          )
        })
      )}
    </div>
  )
}

export default Order
