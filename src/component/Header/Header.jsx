import { CTA } from './CTA'
import ME from '../../assets/mesvg.svg'
import { Box, Typography } from '@mui/joy'
import { Collapse } from '@mui/material'
import { useEffect, useState } from 'react'
import { About } from 'src/pages/About/About'
import { ContactForm } from 'src/pages/Contact/ContactForm'

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
        alignItems: 'center'
      }}>
      {/* CV */}
      <CTA />
      {/* Heaeder Image */}
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedSize={15}>
        <Box
          sx={{
            mt: 2,
            background:
              'linear-gradient(to bottom,rgba(59, 113, 151, 0.45) 50%,rgba(59, 113, 151, 0.15) 75%, transparent) no-repeat scroll 0 0 ',
            left: 'calc(50% -10rem)',
            borderRadius: '12rem 12rem 0 0',
            overflow: 'hidden'
          }}>
          <img src={ME} alt='' />
        </Box>
      </Collapse>
      {/* Description  */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',

          gap: 1,
          width: 500
        }}>
        <Typography
          level='h5'
          sx={{
            color: 'primary.50'
          }}
          mb={0.5}>
          Hello I am
          <br />
          <Typography
            level='h3'
            sx={{ lineHeight: '1em', textDecoration: 'underline', color: 'text.tertiary' }}
            mb={0.5}>
            Wilmer Herrera
          </Typography>
          <br />
          Full Stack Developer. <p>Based in Denver,CO</p>
          <br />
          Your success will be largely determined by your ability to concentrate single mindedly on one thing
          at a time
        </Typography>
      </Box>
      {/* <a href='#contact'>Scroll Down</a> */}
      <About />
      <ContactForm />
    </Box>
  )
}

// background:
// ' linear-gradient(to bottom,rgba(59, 113, 151, 0.8) , transparent) transparent) no-repeat ',
