import { Box, Container, Grid } from '@mui/joy'
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

      <Container
        fixed
        component='section'
        sx={{
          m: { xs: 0, sm: 0, md: 0 },
          px: { xs: 0, sm: 0, md: 0 },
          width: { xs: '100vw', sm: '100vw', md: '100vw' },
          maxWidth: { xs: '100vw', sm: '100vw', md: '100vw' },
          height: { xs: '100vh', sm: '100vh', md: '100vh' },
          maxHeight: { xs: '100vh', sm: '100vh', md: '100vh' }
        }}>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='stretch'
          spacing={{ xs: 12, sm: 4, md: 4 }}
          columns={{ xs: 1, sm: 1, md: 1 }}
          rowSpacing={{ xs: 25 }}>
          <Grid item xs={12} sm={4} md={4} direction='column' justifyContent='center' alignItems='center'>
            {/* Navbar */}
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

          {/* Main Content */}
          <Grid item xs={10} sm={4} md={4} sx={{ paddingTop: { sm: 3 } }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                height: '100vh',
                width: '100vw',

                paddingBottom: 4,
                flexDirection: 'column'
              }}>
              <Outlet />
            </Box>
          </Grid>

          {/* Footer */}
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            sx={{ bottom: 0, minWidth: '100vw', right: 0, pb: { xs: 0, sm: 0, md: 0 } }}>
            <Box
              bgcolor='background.level3'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                height: '2vh !important',
                paddingTop: { xsm: 7, sm: 7, md: 6.5 },
                paddingBottom: { xsm: 6, sm: 6, md: 5.5 },
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
          </Grid>
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
