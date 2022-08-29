import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
// @mui
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
// Component
import { ButtonLogin } from 'src/component/ButtonLogin/ButtonLogin'
// Utils and Redux
import { errorsFirebase } from 'src/utils/errorsFirebase'
import { useFirebase } from 'src/context/FirebaseContext'
import { useSelector } from 'react-redux'

// ----------------------------------------------------------------------

const defaultValues = {
  email: '',
  password: ''
}
// ----------------------------------------------------------------------

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const { loading } = useSelector((store) => store.user)
  const {
    control,
    reset,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({ defaultValues })

  const { loginUserFB, user } = useFirebase()

  const onSubmit = ({ email, password }) => {
    try {
      loginUserFB(email, password)

      reset()

      if (user) {
        navigate('/')
      }
    } catch (error) {
      console.log(error.code)
      setError('firebase', { message: errorsFirebase(error.code) })
    }
  }

  // eslint-disable-next-line no-unused-vars
  // const [showPassword, setShowPassword] = useState(false)
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: ''
  // })
  // const { email, password } = formData

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.id]: e.target.value
  //   }))
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   loginUserFB(email, password)
  // }
  return (
    <Box
      sx={{
        marginTop: 8,
        marginBottom: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      color='white'>
      <Avatar sx={{ m: 1 }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        Sign in
      </Typography>
      <Box component='form' sx={{ mt: 1, maxWidth: '450px' }} onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name='email'
          rules={{ required: true, maxLength: 80 }}
          render={({ field }) => (
            <TextField
              {...field}
              type='email'
              placeholder='Email'
              margin='normal'
              fullWidth

              // sx={{ m: 1, width: '60%' }}
            />
          )}
          control={control}
        />
        {errors.email && errors.email.message}
        <Controller
          name='password'
          rules={{ required: true, maxLength: 80 }}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder='Password'
              margin='normal'
              fullWidth
              type={showPassword ? 'text' : 'password'}
              // sx={{ m: 1, width: '60%' }}
            />
          )}
          control={control}
        />
        {errors.password && errors.password.message}

        {/* <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          type='email'
          value={email}
          onChange={onChange}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          id='password'
          autoComplete='current-password'
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={onChange}
        /> */}
        <FormControlLabel
          control={
            <Checkbox value='show-password' onClick={() => setShowPassword((prevState) => !prevState)} />
          }
          label='Show Password'
        />
        <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
        {!loading && (
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        )}
        {loading && (
          <Button disabled fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Loading...
          </Button>
        )}
        <Grid container>
          <Grid item xs component={Link} to='/' sx={{ textDecoration: 'none', color: 'lightgray' }}>
            Forgot password?
          </Grid>
          <Grid item component={Link} to='/sign-up' sx={{ textDecoration: 'none', color: 'lightgray' }}>
            {"Don't have an account? Sign Up"}
          </Grid>
        </Grid>
      </Box>
      <ButtonLogin />
    </Box>
  )
}
