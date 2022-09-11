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
        {new Date().getFullYear()} Wilmer Herrera
        {'.'}
      </Typography>
      <List
        color='white'
        sx={{
          display: 'flex',
          flexDirection: 'row',
          textAlign: 'center',
          justifyContent: 'space-around',
          width: '90%',
          py: 0,
          height: 60
        }}
        aria-labelledby='nested-list-subheader'>
        {['Contact', 'Poke-Deck', 'Chat', 'Profile'].map((text) => {
          const path = `/${text.toLowerCase()}`
          return (
            <ListItem sx={{ height: 30 }} alignItems='center' key={text} disablePadding>
              <ListItemButton alignItems='center' component={NavLink} to={path}>
                <ListItemText
                  inset
                  variant='body1'
                  primary={text}
                  primaryTypographyProps={{ color: 'text.tertiary', width: 90 }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
      <Typography variant='body2' color='white' align='center'>
        Creadit and Design Wilmer Herrera.
      </Typography>
    </>
  )
}
