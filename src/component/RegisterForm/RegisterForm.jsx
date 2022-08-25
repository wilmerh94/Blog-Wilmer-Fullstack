/* eslint-disable no-unused-vars */
import Google from '@mui/icons-material/Google'
import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useFirebase } from 'src/context/FirebaseContext'
import './RegisterForm.css'
const googleLogoURL = 'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg'
const defaultValues = {
  displayName: '',
  email: '',
  password: '',
  rePassword: ''
}
export const RegisterForm = () => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    reset,
    control,
    getValues,
    formState: { errors }
  } = useForm({ defaultValues })
  const { registerFB } = useFirebase()
  const [formComplete, setFormComplete] = useState(defaultValues)

  const onSubmit = async ({ email, password, displayName }) => {
    try {
      setFormComplete(email, password, displayName)

      registerFB(email, password, displayName)
      navigate('/')
      reset()
    } catch (error) {
      console.log(error)
    }
  }
  // useEffect(() => {
  //   console.log(formComplete)
  //   const { email, password } = formComplete
  //   registerFB(email, password)
  //   reset()
  // }, [])

  return (
    <Box
      sx={{
        marginTop: 20,
        marginBottom: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      color='white'
      component='form'
      onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Do not have an account yet?</label>
      </div>

      <div className='container'>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              placeholder='Full name'
              type='text'
              sx={{ m: 1, width: '60%' }}
              // onChange={() => console.log(props)}
            />
          )}
          name='displayName'
          control={control}
          rules={{ required: true, maxLength: 80 }}
        />
        {errors.displayName && errors.displayName.message}

        <Controller
          name='email'
          rules={{
            required: true
          }}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder='Email address'
              type='email'
              sx={{ m: 1, width: '60%' }}
            />
          )}
          control={control}
        />

        {errors.email && errors.email.message}
        <Controller
          name='password'
          render={({ field }) => (
            <TextField
              {...field}
              placeholder='Password'
              type='password'
              sx={{ m: 1, width: '60%' }}
            />
          )}
          control={control}
          rules={{
            setValuesAs: (value) => value.trim(),
            minLength: {
              value: 6,
              message: 'Minimum 6 characters required'
            },
            validate: {
              trim: (value) => {
                if (!value.trim()) {
                  return 'do not be a clown'
                }
                return true
              }
            }
          }}
          // rules={{ validate: (value) => value !== 'admin' || 'Nice try!' }}
        />
        <Controller
          name='rePassword'
          render={({ field }) => (
            <TextField
              {...field}
              placeholder='rePassword'
              type='password'
              sx={{ m: 1, width: '60%' }}
            />
          )}
          control={control}
          rules={{
            setValuesAs: (value) => value.trim(),
            validate: {
              equals: (value) => value === getValues('password') || 'Password are not the same!'
            }
          }}
          // rules={{ validate: (value) => value !== 'admin' || 'Nice try!' }}
        />

        {errors.password && errors.password.message}
        <button className='button buttonBlack' type='button '>
          Reset Form
        </button>
        <button className='button' type='submit'>
          Submit
        </button>
      </div>
    </Box>
  )
}
