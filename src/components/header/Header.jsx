import { AppBar, Button } from '@mui/material'
import { styled } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styledComponents from 'styled-components'
import { sigOut } from '../../store/auth/auth.thunk'
import { getBasket } from '../../store/basket/basket.thunk'

import { uiActions } from '../../store/UI/ui.slice'
import { BasketButton } from './BasketButton'

export const Header = ({ onShowBasket }) => {
  const isAuthorized = useSelector((state) => state.auth.isAuthorized)
  const items = useSelector((state) => state.basket.items)
  const themeMode = useSelector((state) => state.ui.themeMode)
  const [animationClass, setAnimationClass] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBasket())
  }, [])

  const calculateTotalAmount = () => {
    const sum = items.reduce((s, item) => {
      return s + item.amount
    }, 0)
    return sum
  }
  const themeHandler = () => {
    const theme = themeMode === 'light' ? 'dark' : 'light'
    dispatch(uiActions.changeTheme(theme))
  }
  const signOutHandler = () => {
    dispatch(sigOut())
    // navigate('/signin')
  }

  useEffect(() => {
    setAnimationClass('bump')

    const id = setTimeout(() => {
      setAnimationClass('')
    }, 300)

    return () => {
      clearTimeout(id)
    }
  }, [])

  return (
    <Container>
      <Link to="/">
        <Logo>ReactMeals</Logo>
      </Link>

      <BasketButton
        onClick={onShowBasket}
        className={animationClass}
        count={calculateTotalAmount()}
      />
      <Button onClick={themeHandler} sx={{ color: 'white' }}>
        {themeMode === 'light' ? 'turn light mode' : 'turn dark mode'}
      </Button>

      {isAuthorized ? (
        <Button onClick={signOutHandler}>Sign Out</Button>
      ) : (
        <Button style={{ color: '#fff' }} onClick={() => navigate('/signin')}>
          Sign In
        </Button>
      )}
    </Container>
  )
}

const Container = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  position: 'fixed',
  zIndex: '1',
  top: '0',
  height: '101px',
  backgroundColor: theme.palette.primary.main,
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingLeft: '120px',
  paddingRight: '120px',
}))

const Logo = styledComponents.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`
