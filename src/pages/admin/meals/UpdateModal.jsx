/* eslint-disable no-underscore-dangle */
import styled from '@emotion/styled'
import { Button, Modal } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getMealsPage, updateMeals } from '../../../store/meals/meals.thunk'

const UpdateModal = ({ open, onClose, item }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState(item.title)
  const [description, setDescription] = useState(item.description)

  const [price, setPrice] = useState(item.price)
  useEffect(() => {
    dispatch(getMealsPage())
  }, [])

  const titleHandler = (e) => {
    setTitle(e.target.value)
  }
  const descriptionHandler = (e) => {
    setDescription(e.target.value)
  }

  const priceHandler = (e) => {
    setPrice(+e.target.value)
  }

  const editHandler = (id) => {
    const dataUpdate = {
      title,
      description,
      price,
      id,
    }

    dispatch(updateMeals(dataUpdate))
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <StyledBox>
        <ContainerInput>
          <input type="text" value={title} onChange={titleHandler} />
          <input
            type="text"
            value={description}
            onChange={descriptionHandler}
          />
          <input type="number" value={price} onChange={priceHandler} />

          <Button onClick={() => editHandler(item._id)}>Save</Button>
        </ContainerInput>
      </StyledBox>
    </Modal>
  )
}

export default UpdateModal
const StyledBox = styled(Box)`
  position: absolute;
  border-radius: 9px;
  top: 30%;
  left: 30%;
  padding-top: 2rem;
  width: 600px;
  margin: auto;
  background-color: #fff;
`
const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 34vw;
  margin: 0 auto;
  input {
    height: 30px;
  }
  button {
    background-color: #0dbad1;
    color: white;
    width: 30px;

    &:hover {
      background-color: #0c368f;
    }
  }
`
