import { CTA } from './CTA'
import ME from '../../assets/mesvg.svg'
import { Box, Typography } from '@mui/joy'
import { Collapse } from '@mui/material'
import { useEffect, useState } from 'react'
// ----------------------------------------------------------------------

export const Header = () => {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(true)
  }, [])

  return (
    <Box
      id='header'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'rgba(228, 227, 227, 0.944)',
        maxHeight: '80%'
      }}>
      <CTA />
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedSize={15}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background:
              ' linear-gradient(to bottom,rgba(59, 113, 151, 0.8) 50%,rgba(59, 113, 151, 0.4) 75%, transparent) no-repeat scroll 0 0 ',
            // transparent) no-repeat

            backgroundSize: '100% 90%',
            width: 250,
            height: 280,
            left: 'calc(50% -180)',
            marginTop: 2,
            borderTopRightRadius: 120,
            borderTopLeftRadius: 120,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            overflow: 'hidden',
            padding: '0 0.5rem 0 0.5rem'
          }}>
          <img
            src={ME}
            alt=''
            style={{
              height: '23rem',
              width: '23rem'
            }}
          />
        </Box>
      </Collapse>
      {/* scroll down */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',

          gap: 1,
          width: 500
        }}>
        <Typography level='h4' sx={{ color: 'text.tertiary' }} mb={0.5}>
          Hello I am
        </Typography>
        <Typography
          level='h3'
          sx={{ lineHeight: '1em', textDecoration: 'underline', color: 'text.tertiary' }}
          mb={0.5}>
          Wilmer Herrera
        </Typography>
        <Typography level='h4' sx={{ color: 'text.tertiary' }} mb={0.5}>
          Full Stack Developer. <p>Welcome to my website!</p>
        </Typography>
        <Typography level='h6' sx={{ color: 'text.tertiary' }} mb={0.5}>
          Your success will be largely determined by your ability to concentrate single mindedly on one thing
          at a time
        </Typography>
      </Box>
      {/* <p>
          This is perfect for showing off my awesome projects I am a Full-Stack Web Developer
          specializing in React front-ends, NodeJS and GCP backends. Keep scrolling to see some of
          my projects or checkout my resume here
        </p> */}

      {/* <a href='#contact'>Scroll Down</a> */}
    </Box>
  )
}

// background:
// ' linear-gradient(to bottom,rgba(59, 113, 151, 0.8) , transparent) transparent) no-repeat ',
