// import { createContext, useEffect, useState } from 'react'
// import { fetchApi } from '../lib/fetchAPI'

// export const BasketContext = createContext({
//   items: [],
// })

// export const BasketProvider = ({ children }) => {
//   const [items, setItems] = useState([])

//   const updeteBasketItem = async ({ id, amount }) => {
//     try {
//       const { data } = await fetchApi(`basketItem/${id}/update`, {
//         method: 'PUT',
//         body: { amount },
//       })
//       return setItems(data.items)
//     } catch (error) {
//       return error
//     }
//   }

//   const deleteBasketItem = async (id) => {
//     try {
//       const { data } = await fetchApi(`basketItem/${id}/delete`, {
//         method: 'DELETE',
//       })
//       return setItems(data.items)
//     } catch (error) {
//       return error
//     }
//   }
//   // ....................
//   const getBasket = async () => {
//     try {
//       const { data } = await fetchApi('basket')

//       return setItems(data.items)
//     } catch (error) {
//       return console.log(error)
//     }
//   }

//   useEffect(() => {
//     getBasket()
//   }, [])

//   const addToBasket = async (newItem) => {
//     try {
//       await fetchApi(`foods/${newItem.id}/addToBasket`, {
//         method: 'POST',
//         body: { amount: newItem.amount },
//       })

//       return getBasket()
//     } catch (error) {
//       return console.log(error)
//     }
//   }
//   const state = {
//     items,
//     addToBasket,
//     updeteBasketItem,
//     deleteBasketItem,
//   }

//   return (
//     <BasketContext.Provider value={state}>{children}</BasketContext.Provider>
//   )
// }
