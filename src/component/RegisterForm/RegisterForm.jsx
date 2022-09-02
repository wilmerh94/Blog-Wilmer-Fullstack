import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material'

import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useFirebase } from 'src/context/FirebaseContext'
import { errorsFirebase } from 'src/utils/errorsFirebase'
import { formValidate } from 'src/utils/formValidate'
import { AuthSocial } from '../AuthSocial/AuthSocial'
import { FormError } from '../Error/FormError'
// const googleLogoURL = 'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg'
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
    setError,
    formState: { errors }
  } = useForm({ defaultValues })
  const { registerFB } = useFirebase()
  const { required, patternEmail, minLength, validateTrim, validateEquals } = formValidate()

  const onSubmit = async ({ email, password, displayName }) => {
    try {
      registerFB(email, password, displayName)
      reset()
    } catch (error) {
      console.log(error.code)
      const { code, message } = errorsFirebase(error.code)
      setError(code, message)
    } finally {
      navigate('/')
    }
  }

  return (
    <Box
      sx={{
        marginTop: 15,
        marginBottom: 30,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-around',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
      color='white'>
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        Sign up
      </Typography>
      <AuthSocial />
      <Typography component='label' variant='subtitle2'>
        Do not have an account yet?
      </Typography>
      <FormError error={errors.firebase} />

      <Box
        sx={{
          m: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'space-around',
          justifyContent: 'space-around',
          maxWidth: '500px'
        }}
        color='white'
        component='form'
        onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              placeholder='Full name'
              type='text'
              sx={{ m: 1 }}
              // onChange={() => console.log(props)}
            />
          )}
          name='displayName'
          control={control}
          rules={{ required, minLength }}
        />
        <FormError error={errors.displayName} />

        <Controller
          name='email'
          render={({ field }) => (
            <TextField {...field} placeholder='Email address' type='email' sx={{ m: 1 }} />
          )}
          control={control}
          rules={{
            required,
            pattern: patternEmail,
            minLength
          }}
        />
        <FormError error={errors.email} />

        <Controller
          name='password'
          render={({ field }) => (
            <TextField {...field} placeholder='Password' type='password' sx={{ m: 1 }} />
          )}
          control={control}
          rules={{
            minLength,
            validate: validateTrim
          }}
          // rules={{ validate: (value) => value !== 'admin' || 'Nice try!' }}
        />
        <FormError error={errors.password} />

        <Controller
          name='rePassword'
          render={({ field }) => (
            <TextField {...field} placeholder='rePassword' type='password' sx={{ m: 1 }} />
          )}
          control={control}
          rules={{
            validate: validateEquals(getValues('password'))
          }}
          // rules={{ validate: (value) => value !== 'admin' || 'Nice try!' }}
        />
        <FormError error={errors.rePassword} />
        <Grid container justifyContent='space-around' alignItems='center'>
          <Grid item>
            <Button type='button' variant='outlined' color='error'>
              Reset
            </Button>
          </Grid>
          <Grid item>
            <Button type='submit' variant='contained'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
