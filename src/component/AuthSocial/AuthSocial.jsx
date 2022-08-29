import { Divider, Stack, Typography } from '@mui/material'
import { ButtonLogin } from '../ButtonLogin/ButtonLogin'

export const AuthSocial = () => {
  return (
    <>
      <Stack direction='row' spacing={2} height={70}>
        <ButtonLogin />
      </Stack>
      <Divider
        style={{
          width: '100%'
        }}
        sx={{
          my: 3,
          '::before, ::after': {
            top: '3%',
            borderTopColor: 'white'
          }
        }}>
        <Typography variant='body2'>OR</Typography>
      </Divider>
    </>
  )
}
