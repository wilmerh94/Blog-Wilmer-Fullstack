import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUserAction } from 'src/redux/userDuck'
import GoogleIcon from '@mui/icons-material/Google'
import { Box, Button } from '@mui/material'
// This login is to Sign In with Google API without use @react-oauth/google
export const GoogleLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, isSignedIn } = useSelector((store) => store.user)

  useEffect(() => {
    if (isSignedIn) {
      navigate('/')
    }
  }, [])

  return (
    <Box sx={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button
        sx={{
          cursor: 'pointer',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0.75rem',
          margin: '1.5rem',
          backgroundColor: 'ffffff',
          boxShadow: '1px 1px 5px 5px rgba(0, 0, 0, 0.1)',
          borderRadius: '5%'
        }}
        onClick={() => dispatch(registerUserAction())}
        disabled={loading}
        startIcon={<GoogleIcon color='error' />}>
        Login with Google
      </Button>
    </Box>
  )
}
