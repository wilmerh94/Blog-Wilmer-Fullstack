import { Box } from '@mui/material'
import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ButtonLogin } from 'src/component/ButtonLogin/ButtonLogin'
import { Form } from 'src/component/RegisterForm/RegisterForm'
import './Home.css'

export const Home = () => {
  const navigate = useNavigate()

  const { isSignedIn } = useSelector((store) => store.user)

  useEffect(() => {
    if (isSignedIn) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <div className='home__page' style={{ display: isSignedIn ? 'none' : '' }}>
        {!isSignedIn ? (
          <div className='login__message'>
            <h2>📗</h2>
            <h1>A Readers favorite place!</h1>
            <p>
              We provide high quality online resource for reading blogs. Just sign up and start
              reading some quality blogs.
            </p>
            <Form />
          </div>
        ) : (
          ''
        )}
      </div>
      {!isSignedIn && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <ButtonLogin />
        </Box>
      )}
    </>
  )
}
