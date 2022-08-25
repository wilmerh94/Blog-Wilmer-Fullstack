import { Box } from '@mui/material'
import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ButtonLogin } from 'src/component/ButtonLogin/ButtonLogin'
import { Header } from 'src/component/Header/Header'
import { ProfileCard } from 'src/component/ProfileCard/ProfileCard'
import './Home.css'

export const Home = () => {
  const navigate = useNavigate()

  const { isSignedIn } = useSelector((store) => store.user)
  const avatar =
    'https://avataaars.io/?avatar&topType=NoHair&accessoriesType=Round&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Gray01&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light'

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
          </div>
        ) : (
          <div className='login__message'>
            <Header />

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
