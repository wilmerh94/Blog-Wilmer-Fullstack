import ContactMailIcon from '@mui/icons-material/ContactMail'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Button } from '@mui/joy'
import { Avatar, Box, TextField, Typography } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const defaultValues = {
  name: '',
  email: '',
  phone: '',
  comment: ''
}
export const ContactForm = () => {
  const [messageOnSubmit, setMessageOnSubmit] = useState(false)

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors }
    // getValues
  } = useForm({ defaultValues })

  const onSubmit = (data) => {
    setMessageOnSubmit(true)

    // const values = getValues()
    console.log(data)
    // setFormComplete([...formComplete, values])
    // setMessage2([...data1])

    reset(defaultValues)
  }

  return (
    <Box
      sx={{
        marginTop: 8,
        marginBottom: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Avatar sx={{ m: 1 }}>
        {/* Better Icon */}
        <ContactMailIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        Contact me.
      </Typography>
      <Typography variant='caption' gutterBottom sx={{ textDecoration: 'none' }}>
        To arrange a meeting, send me a message.
      </Typography>
      {messageOnSubmit && (
        <Typography variant='caption' gutterBottom>
          I promise to get back with you soon
        </Typography>
      )}

      <Box
        component='form'
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'space-around',
          justifyContent: 'space-around'
        }}
        onSubmit={handleSubmit(onSubmit)}
        noValidate>
        <Grid container spacing={2} columnSpacing={4} width={{ xs: 450, sm: 650, md: 850, lg: 850 }}>
          <Grid xs={12} sm={6}>
            <TextField
              required
              id='fullname'
              name='fullname'
              label='Full Name'
              fullWidth
              margin='dense'
              {...register('fullname')}
              error={errors.fullname ? true : false}
            />
            <Typography variant='inherit' color='textSecondary'>
              {errors.fullname?.message}
            </Typography>
          </Grid>
          <Grid xs={12} sm={6}>
            <TextField
              required
              id='email'
              name='email'
              label='Email'
              fullWidth
              margin='dense'
              {...register('email')}
              error={errors.email ? true : false}
            />
            <Typography variant='inherit' color='textSecondary'>
              {errors.email?.message}
            </Typography>
          </Grid>
          <Grid xs={12} sm={12}>
            <TextField
              required
              id='subject'
              name='subject'
              label='Subject'
              fullWidth
              margin='dense'
              {...register('subject')}
              error={errors.subject ? true : false}
            />
            <Typography variant='inherit' color='textSecondary'>
              {errors.subject?.message}
            </Typography>
          </Grid>
          <Grid xs={12} sm={12}>
            <TextField
              required
              id='message'
              name='message'
              label='Message'
              fullWidth
              margin='dense'
              {...register('message')}
              error={errors.message ? true : false}
            />
            <Typography variant='inherit' color='textSecondary'>
              {errors.message?.message}
            </Typography>
          </Grid>
        </Grid>

        <Button
          type='submit'
          variant='solid'
          sx={{
            width: '100%',
            mt: 1,
            mb: 2,
            letterSpacing: '2px'
          }}>
          Contact
        </Button>
        <GitHubIcon />
        <LinkedInIcon />
      </Box>
    </Box>
  )
}
