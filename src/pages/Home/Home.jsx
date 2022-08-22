import { Box } from '@mui/material'
import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ButtonLogin } from 'src/component/ButtonLogin/ButtonLogin'
import { ProfileCard } from 'src/component/ProfileCard/ProfileCard'
import { Form } from 'src/component/RegisterForm/RegisterForm'
import './Home.css'

export const Home = () => {
  const navigate = useNavigate()

  const { isSignedIn } = useSelector((store) => store.user)
  const avatar =
    'https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Round&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Gray01&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light'

  useEffect(() => {
    if (isSignedIn) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <div className='home__page'>
        {!isSignedIn ? (
          <div className='login__message'>
            <img src={avatar} />

            <h1>A Readers favorite place!</h1>
            <p>
              We provide high quality online resource for reading blogs. Just sign up and start
              reading some quality blogs.
            </p>
            <Form />
          </div>
        ) : (
          <div className='login__message'>
            <img src={avatar} />
            <h1>Welcome to my website!</h1>
            <p>This is perfect for showing off my awesome projects</p>
            <p>
              I am a Full-Stack Web Developer specializing in React front-ends, NodeJS and GCP
              backends.
            </p>
            <p>Keep scrolling to see some of my projects or checkout my resume here</p>
            <ProfileCard />
          </div>
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
