import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'

export const LayoutMain = () => {
  return (
    <Box
      component='main'
      sx={{
        height: '100vh',
        width: '100%',
        maxWidth: '100vw',

        display: 'flex',
        flexFlow: 'column nowrap',
        flexGrow: '1',

        justifyContent: 'space-between',
        alignContent: 'space-between'
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '100%',
          justifyContent: 'center'
        }}>
        <Navbar />
      </Box>
      <Box
        sx={{
          display: 'flex'
        }}>
        <Outlet />
      </Box>
      <Box
        bgcolor='background.default'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          height: '2vh !important',
          paddingTop: 8,
          paddingBottom: 5,
          width: '100vw',
          maxWidth: '100%',
          position: 'static',
          bottom: 0,
          minWidth: '100vw',

          right: 0
        }}>
        {/* Content here */}
        <Footer />
      </Box>
    </Box>
  )
}
{
  /* <Box
sx={{
  display: 'flex',
  flexDirection: 'row',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  right: '0',
  left: '0',
  bottom: '0',
  width: '100% !important',
  height: '2vh !important',
  paddingTop: 8,
  paddingBottom: 5
}}
px={{ xs: 3, sm: 5 }}
bgcolor='text.secondary'
color='white'> */
}
