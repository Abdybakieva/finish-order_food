/* eslint-disable no-underscore-dangle */
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrder } from '../../store/order/order.thunk'

const Orders = () => {
  const dispatch = useDispatch()
  const { allOrders } = useSelector((state) => state.orders)
  useEffect(() => {
    dispatch(getAllOrder())
  }, [])
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Meals</TableCell>
            <TableCell>Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allOrders.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item.user.name}</TableCell>

              <TableCell>
                <ul>
                  {item.items.map((meal) => (
                    <li>
                      <h3>{meal.title}</h3>
                      <h3>{meal.price}</h3>
                      <h4>{meal.amount}</h4>
                    </li>
                  ))}
                </ul>
              </TableCell>
              <TableCell>
                <h1>${item.totalPrice}</h1>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Orders
