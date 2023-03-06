import { Button, Grid, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { sigin } from '../store/auth/auth.thunk'

export const SignInPage = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  }
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      email,
      password,
    }
    dispatch(sigin(data))
  }
  return (
    <Grid sx={{ display: 'flex', flexDirection: 'column', marginTop: '20' }}>
      <Grid sx={{ background: '#FFF', width: '500px', padding: '20px' }}>
        <form onSubmit={submitHandler}>
          <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              value={email}
              onChange={emailChangeHandler}
              label="Email"
            />
            <TextField
              value={password}
              onChange={passwordChangeHandler}
              label="Password"
            />
            <Button type="submit">Sign In</Button>
            <Link to="/signup">{`Don't have account`}</Link>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}
