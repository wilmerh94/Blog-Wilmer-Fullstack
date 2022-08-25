import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

// const FooterContainer = styled(Box)({
//   textAlign: 'center',
//   position: 'absolute',
//   bottom: 0,
//   width: '100% !important',
//   height: '100px !important'
// })

export const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: '0',
        left: '0',
        bottom: '0',

        width: '100% !important',
        height: '5vh !important',
        paddingTop: 8,
        paddingBottom: 5
      }}
      px={{ xs: 3, sm: 5 }}
      bgcolor='text.secondary'
      color='white'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center'
        }}>
        <Typography variant='body2' color='white' align='center'>
          {'Copyright © '}
          Your Website {new Date().getFullYear()}
          {'.'}
        </Typography>
        <List
          sx={{
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'center'
          }}
          aria-labelledby='nested-list-subheader'>
          {['Checkout', 'Messages', 'Notification', 'Profile'].map((text) => {
            const path = `/${text.toLowerCase()}`
            return (
              <ListItem alignItems='center' key={text} disablePadding>
                <ListItemButton alignItems='center' component={NavLink} to={path}>
                  <ListItemText
                    sx={{
                      display: 'flex'
                    }}
                    variant='body1'
                    primary={text}
                  />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Box>
  )
}
