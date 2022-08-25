/* eslint-disable no-unused-vars */
import styled from '@emotion/styled'
import { Avatar, Box, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material'
import { Edit as EditIcon } from '@mui/icons-material'
import { useState } from 'react'

const StyleModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})
const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px'
})

export const Edit = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title='Edit'
        sx={{ position: 'fixed', bottom: 20, left: { xs: 'cal(50%-90px)', md: 100 } }}>
        <Fab>
          <EditIcon />
        </Fab>
      </Tooltip>
      <StyleModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box width={400} height={280} bgcolor='white' p={3} borderRadius={5}>
          <Typography id='modal-modal-title' variant='h6' color='gray ' textAlign='center'>
            Create User
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src='https://avatars.dicebear.com/4.5/api/avataaars/.svg?eyebrow[]=up&mouth[]=smile'
            />
            <Typography
              id='modal-modal-title'
              variant='span'
              color='gray '
              fontWeight={500}
              textAlign='center'>
              Wilmer
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id='standard-multiline-static'
            multiline
            rows={3}
            placeholder='Enter your email address'
            variant='standard'
          />
        </Box>
      </StyleModal>
    </>
  )
}
