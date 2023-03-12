import { styled } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMeals } from '../../store/meals/meals.thunk'
import MealItem from './meal-Item/MealItem'

// const DUMMY_MEALS = [
//   {
//     id: "1",
//     title: "Sushi",
//     describe: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "2",
//     title: "Schnitzel",
//     describe: "A german specialty!",
//     price: 16.0,
//   },
//   {
//     id: "3",
//     title: "Barbecue Burger",
//     describe: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "4",
//     title: "Green Bowl",
//     describe: "Healthy...and green...",
//     price: 19.99,
//   },
// ];

export const Meals = () => {
  const { meals, error, isLoading } = useSelector((state) => state.meals)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMeals())
  }, [])

  return (
    <Card>
      {isLoading && !error && <p>loading......</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {meals.map((meal) => {
        return <MealItem meal={meal} key={meal.id} />
      })}
    </Card>
  )
}

const Card = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '16px',
  width: '75%',
  padding: '40px 40px 36px 40px',
  margin: '40px auto',
  color: theme.palette.primary.constrastText,
}))
