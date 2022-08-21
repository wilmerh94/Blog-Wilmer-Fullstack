import SpeakerNotesRoundedIcon from '@mui/icons-material/SpeakerNotesRounded'
import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import './ContactForm.css'

const defaultValues = {
  name: '',
  email: '',
  phone: '',
  comment: ''
}
export const ContactForm = () => {
  const [messageOnSubmit, setMessageOnSubmit] = useState(false)
  const [formComplete, setFormComplete] = useState([])

  const { handleSubmit, reset, control, formState, getValues } = useForm({ defaultValues })

  const { errors } = formState

  const onSubmit = (data) => {
    setMessageOnSubmit(true)

    const values = getValues()
    console.log(data)
    setFormComplete([...formComplete, values])
    // setMessage2([...data1])
    console.log(formComplete)

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
        <SpeakerNotesRoundedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        Contact me.
      </Typography>
      <Typography
        variant='caption'
        gutterBottom
        sx={{ textDecoration: 'none', color: 'rgba(118, 118, 118, 0.94)' }}>
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
          maxWidth: '800px',
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'space-around',
          justifyContent: 'space-around'
        }}
        onSubmit={handleSubmit(onSubmit)}
        noValidate>
        <Controller
          name='name'
          rules={{
            required: 'This is required.',
            maxLength: 20,
            minLength: 6
          }}
          render={({ field }) => (
            <TextField {...field} placeholder='Full name*' fullWidth type='text' sx={{ m: 1 }} />
          )}
          control={control}
        />
        {errors.name && errors.name.message}

        <Controller
          name='email'
          rules={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address'
            }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder='Email address*'
              type='email'
              fullWidth
              sx={{ m: 1 }}
            />
          )}
          control={control}
        />

        {errors.email && errors.email.message}
        <Controller
          name='phone'
          render={({ field }) => (
            <TextField {...field} placeholder='Phone Number*' type='text' fullWidth sx={{ m: 1 }} />
          )}
          control={control}
        />
        {errors.phone && errors.phone.message}

        <Controller
          name='comment'
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              multiline
              rows={4}
              placeholder='Message*'
              type='text'
              fullWidth
              sx={{ m: 1 }}
            />
          )}
          control={control}
        />

        {errors.comment && errors.comment.message}
        <Button
          type='submit'
          variant='contained'
          sx={{
            width: '100%',
            mt: 1,
            mb: 2,
            background: '#ec5990',
            letterSpacing: '2px',
            borderRadius: '15px'
          }}>
          Contact
        </Button>
      </Box>
      {formComplete.map((formC, index) => (
        <p key={index}> {formC.name}</p>
      ))}
    </Box>
  )
}
