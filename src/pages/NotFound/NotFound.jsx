import { Link } from 'react-router-dom'

// @mui
import { styled } from '@mui/material/styles'
import { Box, Button, Container, Typography } from '@mui/joy'

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  padding: theme.spacing(6, 0)
}))
// ----------------------------------------------------------------------

export const NotFound = () => {
  return (
    <Container sx={{}}>
      <ContentStyle>
        <Typography level='h3' sx={{ color: 'text.tertiary' }}>
          Sorry, Page Not Found! ⚠️
        </Typography>

        <Typography sx={{ color: 'text.tertiary' }}>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to
          check your spelling.
        </Typography>

        <Box
          component='img'
          src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=996&t=st=1661998412~exp=1661999012~hmac=89c3793a3678651d93ed71dab5134f35d0b32d6ba958cb4f34c9cfec4965e39b'
          sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
        />

        <Button to='/' size='sm' variant='solid' component={Link}>
          Go to Home
        </Button>
      </ContentStyle>
    </Container>
  )
}
