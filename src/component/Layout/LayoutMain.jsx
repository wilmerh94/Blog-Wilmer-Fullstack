import { Box, Container } from '@mui/joy'
import Grid from '@mui/material/Unstable_Grid2'
import { CssBaseline } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
// ----------------------------------------------------------------------

export const LayoutMain = () => {
  // console.log(extendTheme())

  return (
    <>
      <CssBaseline />
      {/* Main Container */}
      <Container
        fixed
        component='section'
        sx={{
          m: { xs: 0, sm: 0, md: 0 },
          px: { xs: 0, sm: 0, md: 0 },
          width: { xs: '100%', sm: '100%', md: '100%' },
          maxWidth: { xs: '100vw', sm: '100vw', md: '100vw' },
          height: { xs: '100%', sm: '100%', md: '100%' },
          maxHeight: { xs: '100vh', sm: '100vh', md: '100vh' }
        }}>
        {/* ---------------------------------------------------------------------------*/}

        {/* Navbar Container */}
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='stretch'
          columns={{ xs: 1, sm: 2, md: 1 }}
          rowSpacing={{ xs: 25, sm: 5 }}>
          <Grid xs={12} sm={0} md={0} direction='column' justifyContent='center' alignItems='center'>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                maxWidth: '100%',
                justifyContent: 'center'
              }}>
              <Navbar />
            </Box>
          </Grid>
          {/* ---------------------------------------------------------------------------*/}

          {/* Main Content Container (Outlet)*/}
          <Grid xs={10} sm={4} md={4} sx={{ paddingTop: { xs: 10, sm: 8 } }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
              }}>
              <Outlet />
            </Box>
          </Grid>
          {/* ---------------------------------------------------------------------------*/}

          {/* Footer Container*/}
          <Grid
            xs={12}
            sm={0}
            md={4}
            sx={{ bottom: 0, minWidth: '100vw', right: 0, p: { xs: 0, sm: 0, md: 0 } }}>
            <Box
              bgcolor='black'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                height: 100,
                paddingTop: { sm: 7, md: 10.5 },
                paddingBottom: { sm: 12, md: 8.5 },
                width: '100vw',
                maxWidth: '100%',
                position: 'static',
                bottom: 0,
                minWidth: '100vw',
                right: 0
              }}>
              <Footer />
            </Box>
          </Grid>
          {/* ---------------------------------------------------------------------------*/}
        </Grid>
      </Container>
    </>
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
