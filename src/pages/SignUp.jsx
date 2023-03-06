import { Button, Grid, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserRoles } from '../lib/constans/common'
import { sighup } from '../store/auth/auth.thunk'

export const SignUpPage = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  }
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }
  const confirmChangeHandler = (event) => {
    setConfirmPassword(event.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      email,
      password,
      name,
      role: UserRoles.ADMIN,
    }
    dispatch(sighup(data))
  }
  return (
    <Grid sx={{ display: 'flex', flexDirection: 'column', marginTop: '20' }}>
      <Grid sx={{ background: '#FFF', width: '500px', padding: '20px' }}>
        <form onSubmit={submitHandler}>
          <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField value={name} onChange={nameChangeHandler} label="Name" />
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
            <TextField
              value={confirmPassword}
              onChange={confirmChangeHandler}
              label="Confirm Password"
            />
            <Button type="submit">Sign Up</Button>
            <Link to="/signin">Have an account?</Link>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}
