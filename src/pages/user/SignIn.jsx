import { Button, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { sigin } from '../../store/auth/auth.thunk'

export const SignInPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
    setError('')
  }
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
    setError('')
  }
  const isEmailValid = () => {
    return email.length === 0 || email.includes('@')
  }

  const isPasswordValid = () => {
    return password.length === 0 || password.length >= 6
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      email,
      password,
    }
    dispatch(sigin(data))
      .unwrap()
      .then(() => navigate('/'))
      .catch((event) => {
        setError(event.response.data.message)
      })
  }
  return (
    <Grid sx={{ display: 'flex', flexDirection: 'column', marginTop: '20' }}>
      <Grid sx={{ background: '#FFF', width: '500px', padding: '20px' }}>
        <form onSubmit={submitHandler}>
          <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              error={!isEmailValid()}
              value={email}
              onChange={emailChangeHandler}
              label="Email"
              sx={{ marginBottom: '20px' }}
            />
            <TextField
              error={!isPasswordValid()}
              value={password}
              onChange={passwordChangeHandler}
              label="Password"
            />
            {error && (
              <Typography
                textAlign="center"
                sx={{ color: (theme) => theme.palette.error.main }}
              >
                {error}
              </Typography>
            )}
            <Button type="submit">Sign In</Button>
            <Link to="/signup">{`Don't have account`}</Link>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}
