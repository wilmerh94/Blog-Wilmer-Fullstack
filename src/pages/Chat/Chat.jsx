/* eslint-disable no-unused-vars */
import { Box, Button } from '@mui/material'
import { useContext } from 'react'
import { ChatContext } from 'src/context/ChatContext'

export const Chat = () => {
  const { value } = useContext(ChatContext)
  const { user, signInUserGoogle, logOLut } = value
  console.log(user)
  return (
    <Box
      sx={{
        marginTop: 1,
        marginBottom: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        '& button': { m: 1 }
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        {user.status ? (
          <Button variant='outlined' color='error' onClick={logOLut}>
            Log Out
          </Button>
        ) : (
          <Button variant='contained' onClick={signInUserGoogle}>
            Access
          </Button>
        )}
      </Box>
      <Box
        sx={{
          marginTop: 1,
          marginBottom: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        {user !== null ? <div>Hello world</div> : <div>Loading</div>}
      </Box>
    </Box>
  )
}
