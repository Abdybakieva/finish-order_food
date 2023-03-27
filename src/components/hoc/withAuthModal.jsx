import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const withAuthModal = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate()
    const [isModalOpen, setModalOpen] = useState(false)

    const gotoSignInHandler = () => {
      setModalOpen(false)
      navigate('/signin')
    }

    return (
      <>
        <Component {...props} showAuthModal={() => setModalOpen(true)} />
        <Dialog
          open={isModalOpen}
          onClose={() => setModalOpen(true)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Not Authorized</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              In order to complete this action, please sign in
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={gotoSignInHandler}>Go to Sign In</Button>
            <Button onClick={() => setModalOpen(false)} autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
  return Wrapper
}
