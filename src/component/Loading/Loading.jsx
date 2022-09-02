import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        maxHeight: '100vh',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <CircularProgress sx={{ fontSize: 24 }} size={50} />
    </Box>
  )
}
