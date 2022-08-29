import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
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
    <>
      <Typography variant='body2' color='white' align='center'>
        {'Copyright © '}
        Your Website {new Date().getFullYear()}
        {'.'}
      </Typography>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'row',
          textAlign: 'center',
          justifyContent: 'space-between',
          width: '50%'
        }}
        aria-labelledby='nested-list-subheader'>
        {['Contact', 'Poke-Deck', 'Chat', 'Profile'].map((text) => {
          const path = `/${text.toLowerCase()}`
          return (
            <ListItem alignItems='center' key={text} disablePadding>
              <ListItemButton alignItems='center' component={NavLink} to={path}>
                <ListItemText variant='body1' primary={text} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}
