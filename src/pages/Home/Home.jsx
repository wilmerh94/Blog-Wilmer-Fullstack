import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Form } from 'src/component/RegisterForm/RegisterForm'
import { signIn } from 'src/redux/userDuck'
import './Home.css'

export const Home = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { loading, isSignedIn } = useSelector((store) => store.user2)

  const loginGoogle = (credentialResponse) => {
    const token = credentialResponse.credential
    const userProfile = jwt_decode(token)
    console.log(userProfile)
    // todo Create a way to make a USER on firebase
    dispatch(signIn(userProfile))
  }

  useEffect(() => {
    console.log(isSignedIn)
    if (isSignedIn) {
      navigate('/')
    }
  }, [])

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
          <Form />

          <GoogleLogin
            onSuccess={loginGoogle}
            onFailure={loginGoogle}
            shape='circle'
            size='large'
            style={{ display: loading ? 'none' : '' }}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
