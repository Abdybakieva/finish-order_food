/* eslint-disable no-underscore-dangle */
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import {
  deleteMeals,
  getMeals,
  getMealsPage,
  // getMealsPage,
} from '../../../store/meals/meals.thunk'
import ModalApp from './Modal'
import UpdateModal from './UpdateModal'

const Meals = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const { meals } = useSelector((state) => state.meals)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    dispatch(getMeals())
  }, [])

  const modalButtonHandler = () => {
    searchParams.set('showModal', true)
    setSearchParams(searchParams)
  }

  const deleteHandler = (id) => {
    dispatch(deleteMeals(id))
  }
  const updateModal = (id) => {
    setOpen((prevState) => !prevState)

    dispatch(getMealsPage(id))
  }
  // const updateOneMeal = (id) => {
  //   updateModal()
  //   setEditId(id)
  // }
  return (
    <>
      {searchParams.has('showModal') ? (
        <ModalApp
          open={modalButtonHandler}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      ) : null}
      <StyledBtnClick onClick={modalButtonHandler}>ADD</StyledBtnClick>
      <div>
        {meals.map((item) => {
          return (
            <StyledMeals>
              <UpdateModal open={open} onClose={updateModal} item={item} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <ContainerBtn>
                <Button onClick={() => deleteHandler(item._id)}>Delete</Button>
                <Button
                  onClick={() => {
                    updateModal(item.id)
                  }}
                >
                  Edit
                </Button>
              </ContainerBtn>
            </StyledMeals>
          )
        })}
      </div>
    </>
  )
}
export default Meals

const StyledBtnClick = styled(Button)`
  background-color: #c9c3c5;
  border-radius: 10px;
  margin-top: 10px;
`

const StyledMeals = styled.div`
  width: 800px;
  margin: auto;
  border-radius: 15px;
  background-color: #e7ebeb;
  box-shadow: -76px -102px 228px -1px rgba(219, 204, 204, 0.37);
  -webkit-box-shadow: -76px -102px 228px -1px rgba(219, 204, 204, 0.37);
  -moz-box-shadow: -76px -102px 228px -1px rgba(219, 204, 204, 0.37);
`
const ContainerBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`
