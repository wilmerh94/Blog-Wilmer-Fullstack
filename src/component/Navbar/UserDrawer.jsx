import { Avatar, Badge, Box, Typography } from '@mui/joy'
// ----------------------------------------------------------------------

export const UserDrawer = () => {
  return (
    <Box sx={{ py: 2, px: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Badge
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeInset='14%'
          color='success'
          sx={
            {
              // '& .JoyBadge-badge': {
              //   '&::after': {
              //     position: 'absolute',
              //     top: -2,
              //     left: -1.25,
              //     width: '100%',
              //     height: '100%',
              //     borderRadius: '50%',
              //     animation: 'ripple 1.2s infinite ease-in-out',
              //     border: '2px solid',
              //     borderColor: 'success.500',
              //     content: '""'
              //   }
              // }
            }
          }>
          <Avatar src='...' alt='Wilmer' sx={{ width: '3.5rem', height: '3.5rem' }} />
        </Badge>
        <Box sx={{ ml: 3, display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
          <Typography sx={{ fontWeight: 600 }}>Wilmer </Typography>
          <Typography level='body2' sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>
            Admin
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
