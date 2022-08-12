import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

import { useDispatch, useSelector } from 'react-redux'
import { selectSignedIn, setSignedIn, setUserData } from 'src/features/userSlice'
import './Home.css'

export const Home = () => {
  const isSignedIn = useSelector(selectSignedIn)
  const dispatch = useDispatch()

  const loginGoogle = (credentialResponse) => {
    const token = credentialResponse.credential
    const userProfile = jwt_decode(token)

    dispatch(setSignedIn(true))
    dispatch(setUserData(userProfile))
  }
  return (
    <div className='home__page' style={{ display: isSignedIn ? 'none' : '' }}>
      {!isSignedIn ? (
        <div className='login__message'>
          <h2>📗</h2>
          <h1>A Readers favorite place!</h1>
          <p>
            We provide high quality online resource for reading blogs. Just sign up and start
            reading some quality blogs.
          </p>

          <GoogleLogin
            onSuccess={loginGoogle}
            onFailure={loginGoogle}
            shape='circle'
            size='large'
          />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
