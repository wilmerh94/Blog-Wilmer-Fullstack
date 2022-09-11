import Grid from '@mui/system/Unstable_Grid/Grid'
import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Header } from 'src/component/Header/Header'
export const Home = () => {
  const navigate = useNavigate()

  const { isSignedIn } = useSelector((store) => store.user)

  useEffect(() => {
    if (isSignedIn) {
      navigate('/')
    }
  }, [])

  return (
    <Grid
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
      <Header />
    </Grid>
  )
}

// const avatar =
//   'https://avataaars.io/?avatar&topType=NoHair&accessoriesType=Round&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Gray01&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light'
