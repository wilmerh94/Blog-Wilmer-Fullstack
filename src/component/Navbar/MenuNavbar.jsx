import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Menu
} from '@mui/material'
import { Box } from '@mui/system'
import { NavLink } from 'react-router-dom'
import { useFirebase } from 'src/context/FirebaseContext'

export const MenuNavbar = ({ profileOpen, anchor }) => {
  const { user } = useFirebase()
  return (
    <Menu
      MenuListProps={{
        style: {
          width: '25ch',
          padding: '4px 0',
          display: 'flex',
          justifyContent: 'space-evenly'
        }
      }}
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly'
      }}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id='primary-search-account-menu'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(profileOpen)}
      anchorEl={anchor}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          padding: 1,
          width: '240'
        }}>
        {/* Primary List */}
        <List
          component='nav'
          aria-labelledby='nested-list-subheader'
          sx={{
            width: '100%'
          }}
          subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
              Welcome {user.displayName}!
            </ListSubheader>
          }>
          {[
            {
              text: 'Checkout',
              icon: (
                <ShoppingCartIcon
                  sx={{
                    paddingLeft: 0,
                    marginLeft: '4.5px'
                  }}
                />
              ),
              badge: '0'
            },
            {
              text: 'Messages',
              icon: (
                <MailIcon
                  sx={{
                    paddingLeft: 0,
                    marginLeft: '4.5px'
                  }}
                />
              ),
              badge: '4'
            },
            {
              text: 'Notification',
              icon: (
                <NotificationsIcon
                  sx={{
                    paddingLeft: 0,
                    marginLeft: '3.5px'
                  }}
                />
              ),
              badge: '4'
            },
            {
              text: 'Profile',
              icon: user ? (
                <ListItemAvatar
                  sx={{
                    maxWidth: '45px',
                    maxHeight: '45px',
                    paddingLeft: 0,
                    marginLeft: '-4.5px'
                  }}>
                  <Avatar src={user.photoURL} alt={user.displayName} />
                </ListItemAvatar>
              ) : (
                <AccountCircleIcon />
              )
            }
          ].map(({ text, icon, badge }) => {
            const path = `/${text.toLowerCase()}`
            return (
              <ListItem alignItems='flex-start' key={text} disablePadding>
                <ListItemButton
                  sx={{
                    paddingLeft: 1,
                    marginLeft: 0,
                    maxWidth: '50px',
                    maxHeight: '50px',
                    position: 'relative'
                  }}
                  alignItems='center'
                  component={NavLink}
                  to={path}>
                  <Badge
                    badgeContent={badge}
                    invisible={badge > 0 ? false : true}
                    sx={{ mr: 1, ml: 0, pl: 0 }}
                    color='secondary'>
                    {icon}
                  </Badge>
                </ListItemButton>

                <ListItemButton
                  sx={{ mr: 0, ml: '3.5px', pl: 0 }}
                  alignItems='center'
                  component={NavLink}
                  to={path}>
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
    </Menu>
  )
}
