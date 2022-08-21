import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export const Loading = () => {
  return (
    <Box sx={{ display: 'flex', maxHeight: '100vh' }}>
      <CircularProgress sx={{ fontSize: 24 }} />
    </Box>
  )
}
