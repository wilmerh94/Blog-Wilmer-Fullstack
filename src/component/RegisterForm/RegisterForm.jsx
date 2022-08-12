import { TextField } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import './RegisterForm.css'
const defaultValues = {
  email: '',
  name: '',
  username: ''
}
export const Form = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm({ defaultValues })

  //       handleSubmit will validate your inputs before invoking "onSubmit"
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Do not have an account yet?</label>
      </div>

      <div className='container'>
        <Controller
          name='name'
          rules={{ required: true, maxLength: 80 }}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder='Full name'
              type='text'
              sx={{ m: 1, width: '60%' }}
            />
          )}
          control={control}
        />

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
          rules={{ validate: (value) => value !== 'admin' || 'Nice try!' }}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder='Password'
              type='password'
              sx={{ m: 1, width: '60%' }}
            />
          )}
          control={control}
        />

        {errors.username && errors.username.message}
        <button
          className='button buttonBlack'
          type='button '
          onClick={() => {
            reset({
              TextField: ''
            })
          }}>
          Reset Form
        </button>
        <button className='button' type='submit'>
          Submit
        </button>
      </div>
    </form>
  )
}
