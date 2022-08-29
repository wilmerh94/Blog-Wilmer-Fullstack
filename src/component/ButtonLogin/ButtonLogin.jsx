import { Box, Button, Stack, useTheme } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUserAction } from 'src/redux/userDuck'

// Button Login with Social Medias and Redux
export const ButtonLogin = () => {
  const { palette } = useTheme()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, isSignedIn } = useSelector((store) => store.user)
  // onSuccess={loginGoogle}
  // onFailure={loginGoogle}

  useEffect(() => {
    if (isSignedIn) {
      navigate('/')
    }
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '10px'
      }}>
      <Stack
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
        <Stack direction='column' spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            disabled={loading}
            onClick={() => dispatch(registerUserAction())}
            sx={{
              backgroundColor: '#df4930',
              width: 'auto',
              height: 'auto',
              padding: '15px 28px',
              borderRadius: '20px',
              boxShadow: '1px 1px 2.5px 1px rgba(0, 0, 0, 0.25)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
              marginBottom: '20px',
              marginTop: '35px',
              cursor: 'pointer',
              '&:hover': {
                color: 'inherit',
                backgroundColor: 'rgb(210, 210, 210)'
              }
            }}
            startIcon={
              <GoogleIcon
                sx={{
                  color: palette.mode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)',
                  width: '20px',
                  height: '20px',
                  alignItems: 'center',
                  marginRight: '5px',
                  marginBottom: '2px'
                }}
              />
            }>
            SIGN IN
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
