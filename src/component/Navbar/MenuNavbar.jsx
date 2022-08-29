import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useFirebase } from 'src/context/FirebaseContext'
import { signOutAction } from 'src/redux/userDuck'

// @mui/icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
// @mui
import {
  Avatar,
  Badge,
  Paper,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  MenuList,
  Stack
} from '@mui/material'
// ----------------------------------------------------------------------

export const MenuNavbar = ({ profileOpen, anchor }) => {
  const { signOutUserFB } = useFirebase()
  const dispatch = useDispatch()
  const { userData } = useSelector((store) => store.user)
  const { name, picture } = userData
  const logout = (text) => {
    if (text) {
      signOutUserFB()
      dispatch(signOutAction())
      return
    }
  }

  return (
    <Menu
      sx={{ width: '300' }}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id='primary-search-account-menu'
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(profileOpen)}
      anchorEl={anchor}>
      <Paper sx={{ width: '280', maxWidth: '100%' }}>
        {/* Primary List */}
        <Stack direction='row'>
          <MenuList
            sx={{ width: 200, maxWidth: '100%' }}
            subheader={
              <ListSubheader sx={{ backgroundColor: 'inherit', fontWeight: 900 }}>
                Welcome {userData.name}!
              </ListSubheader>
            }>
            {[
              {
                text: 'Checkout',
                icon: <ShoppingCartIcon size='medium' />,
                badge: '0'
              },
              {
                text: 'Messages',
                icon: <MailIcon size='medium' />,
                badge: '4'
              },
              {
                text: 'Notification',
                icon: <NotificationsIcon size='medium' />,
                badge: '4'
              },
              {
                text: 'Profile',
                icon: userData ? (
                  <Avatar
                    size='medium'
                    sx={{
                      maxWidth: '35px',
                      maxHeight: '35px'
                    }}
                    src={picture}
                    alt={name}
                  />
                ) : (
                  <AccountCircleIcon size='medium' />
                )
              },
              {
                text: 'Logout',
                icon: (
                  <LogoutIcon
                    sx={{
                      paddingLeft: 0,
                      marginLeft: '3.5px',
                      marginTop: '3px',
                      marginBottom: '0px'
                    }}
                    size='medium'
                  />
                )
              }
            ].map(({ text, icon, badge }) => {
              const path = `/${text.toLowerCase()}`
              return (
                <MenuList
                  sx={{ width: '100%', alignItems: 'center', justifyContent: 'space-evenly' }}
                  key={text}
                  id='composition-menu'>
                  <MenuItem
                    sx={{
                      display: 'flex',

                      width: '100',
                      height: '35px',
                      maxWidth: '100%',
                      maxHeight: '100%'
                    }}
                    key={text}
                    component={NavLink}
                    onClick={() => logout(text)}
                    to={text === 'Logout' ? '/' : path}>
                    <ListItemIcon
                      sx={{
                        alignItems: 'center',
                        alignContent: 'center',
                        justifyContent: 'space-around'
                      }}>
                      <Badge badgeContent={badge} invisible={badge > 0 ? false : true} color='secondary'>
                        {icon}
                      </Badge>
                    </ListItemIcon>

                    <ListItemText
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '25px',
                        height: '25px',
                        maxWidth: '100%',
                        maxHeight: '100%'
                      }}
                      primary={text}
                    />
                  </MenuItem>
                </MenuList>
              )
            })}
          </MenuList>
        </Stack>
      </Paper>
    </Menu>
  )
}
/**
 *                   <MenuList
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

 */
