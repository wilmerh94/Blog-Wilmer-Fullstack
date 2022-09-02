import { Box } from '@mui/system'
import { Users } from './Users'

export const NewDashboard = () => {
  return (
    <Box
      sx={{
        mt: 10,
        width: '100%',
        height: '100vh',
        maxWidth: '80vw',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
      }}>
      <Users />
    </Box>
  )
}
