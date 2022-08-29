/* eslint-disable no-unused-vars */
import { Box, Button } from '@mui/material'
import { useContext } from 'react'
import { ChatCustom } from 'src/component/ChatCustom/ChatCustom'
import { Loading } from 'src/component/Loading/Loading'
import { ChatContext } from 'src/context/ChatContext'

export const Chat = () => {
  const { value } = useContext(ChatContext)
  const { user, signInUserGoogle, logOLut } = value
  return (
    <Box
      sx={{
        marginTop: 1,
        marginBottom: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        '& button': { m: 1 }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        {user.status ? (
          <Button variant='outlined' color='error' onClick={logOLut}>
            Log Out
          </Button>
        ) : (
          <Button variant='contained' onClick={signInUserGoogle}>
            Join
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
        }}
      >
        {user.status !== null ? <ChatCustom /> : <Loading />}
      </Box>
    </Box>
  )
}
