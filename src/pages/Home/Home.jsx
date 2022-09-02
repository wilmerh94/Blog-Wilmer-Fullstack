import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Header } from 'src/component/Header/Header'
import ME from '../../assets/mesvg.svg'
export const Home = () => {
  const navigate = useNavigate()

  const { isSignedIn } = useSelector((store) => store.user)

  useEffect(() => {
    if (isSignedIn) {
      navigate('/')
    }
  }, [])

  return (
    <div className='home__page'>
      {!isSignedIn ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
          <div
            style={{
              background:
                'linear-gradient(to bottom,rgba(59, 113, 151, 0.65) 50%,rgba(59, 113, 151, 0.4) 75%, transparent) no-repeat scroll 0 0 ',
              left: 'calc(50% -10rem)',
              borderRadius: '12rem 12rem 0 0',
              overflow: 'hidden'
            }}>
            <img
              src={ME}
              alt=''
              style={{
                height: '23rem',
                width: '23rem'
              }}
            />
          </div>
          <Typography component='h1' variant='h3' sx={{ textDecoration: 'underline' }}>
            A Readers favorite place!
          </Typography>
          <Typography component='label' variant='subtitle1'>
            We provide high quality online resource for reading blogs. Just sign up and start reading some
            quality blogs.
          </Typography>
        </Box>
      ) : (
        <div className='login__message'>
          <Header />
        </div>
      )}
    </div>
  )
}

// const avatar =
//   'https://avataaars.io/?avatar&topType=NoHair&accessoriesType=Round&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Gray01&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light'
