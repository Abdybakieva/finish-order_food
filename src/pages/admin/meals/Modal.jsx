import { Box } from '@mui/system'
import { Button, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { postMeals } from '../../../store/meals/meals.thunk'

const ModalApp = ({ searchParams, setSearchParams, open }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescrition] = useState('')
  const [price, setPrice] = useState('')

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }
  const changeDecrition = (e) => {
    setDescrition(e.target.value)
  }
  const changePrice = (e) => {
    setPrice(+e.target.value)
  }

  const closeShowModal = () => {
    searchParams.delete('showModal')
    setSearchParams(searchParams)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const addData = {
      title,
      description,
      price,
    }
    dispatch(postMeals(addData))
    closeShowModal()
  }

  return (
    <div>
      <Modal open={open} onClose={closeShowModal}>
        <Box>
          <form onSubmit={submitHandler}>
            <Container>
              <StyleTitle>
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  value={title}
                  onChange={changeTitle}
                />
                <TextField
                  id="outlined-basic"
                  label="Descrition"
                  variant="outlined"
                  value={description}
                  onChange={changeDecrition}
                />
                <TextField
                  id="outlined-basic"
                  label="price"
                  variant="outlined"
                  value={price}
                  onChange={changePrice}
                  type="number"
                />
                <StyleBtn>
                  <Button type="submit">ADD</Button>
                  <Button onClick={closeShowModal}>Close</Button>
                </StyleBtn>
              </StyleTitle>
            </Container>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalApp

const StyleBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-bottom: 1rem;

  button {
    background-color: #0dbad1;
    color: white;
    &:hover {
      background-color: #0c368f;
    }
  }
`

const Container = styled.div`
  position: absolute;
  border-radius: 9px;
  top: 30%;
  left: 30%;
  padding-top: 2rem;
  width: 600px;
  margin: auto;
  background-color: #fff;
`
const StyleTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 34vw;
  margin: 0 auto;
`
