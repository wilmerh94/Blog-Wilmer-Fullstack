import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
// redux
import { useSelector } from 'react-redux'
import { useFirebase } from 'src/context/FirebaseContext'
import { ColorModeContext } from 'src/context/ThemeContext'

// @mui

import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material'
// @mui/icons
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import MenuIcon from '@mui/icons-material/Menu'
import MoreVertIcon from '@mui/icons-material/MoreVert'
// components
import { Loading } from '../Loading/Loading'
import { DrawerNavbar } from './DrawerNavbar'
import { MenuNavbar } from './MenuNavbar'
import './Navbar.css'

// ----------------------------------------------------------------------

export const Navbar = () => {
  const { palette } = useTheme()
  const colorMode = useContext(ColorModeContext)
  const { loading } = useFirebase()

  const { isSignedIn } = useSelector((store) => store.user)

  // Drawer
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(null)
  const [anchor, setAnchor] = useState(null)

  const handleProfileOpen = (e) => {
    setProfileOpen((prevMode) => (prevMode === true ? false : true))
    setAnchor(e.currentTarget)
    // setProfileOpen((prevOpen) => (prevOpen === true ? false : true))
  }

  const onDrawerButtonClick = (e) => {
    e.preventDefault()
    setDrawerOpen((prevMode) => (prevMode === true ? false : true))
  }

  return loading ? (
    <Loading />
  ) : (
    <Box sx={{ display: 'flex', position: 'sticky', zIndex: '100' }}>
      <Tooltip title={``} placement='left' arrow>
        <AppBar position='static' bgcolor='primary.secondary'>
          <Container
            sx={{
              maxWidth: '500px',
              width: 'max-content',
              display: 'flex',
              left: '50%',
              transform: 'translateX(-50%)',
              position: 'fixed',
              zIndex: '100',
              borderRadius: '3rem',
              backdropFilter: 'blur(15px)'
            }}>
            <Toolbar
              disableGutters
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <IconButton
                  edge='start'
                  sx={{ mr: 0 }}
                  color='inherit'
                  aria-label='open drawer'
                  onClick={onDrawerButtonClick}>
                  <MenuIcon />
                </IconButton>

                <Typography
                  variant='h6'
                  noWrap
                  component={NavLink}
                  to='/'
                  sx={{
                    mr: 1,
                    ml: 1,
                    display: 'flex',

                    fontWeight: 700,
                    alignItems: 'center',
                    color: 'inherit',
                    textDecoration: 'none'
                  }}>
                  Will Blogs
                </Typography>
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color='inherit'>
                  {palette.mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Box>
              {isSignedIn ? (
                <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                  <div>
                    <IconButton
                      aria-label='show more'
                      aria-haspopup='true'
                      color='inherit'
                      aria-controls={open ? 'composition-menu' : undefined}
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleProfileOpen}>
                      <Badge badgeContent={17} color='secondary'>
                        <MoreVertIcon />
                      </Badge>

                      {profileOpen && <MenuNavbar profileOpen={profileOpen} anchor={anchor} />}
                    </IconButton>
                  </div>
                </Box>
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                  <Button
                    color='inherit'
                    size='small'
                    sx={{ display: isSignedIn && 'none' }}
                    component={NavLink}
                    to='/login'>
                    Login
                  </Button>
                  <Button
                    color='inherit'
                    size='small'
                    sx={{ display: isSignedIn && 'none' }}
                    component={NavLink}
                    to='/sign-up'>
                    Sign up
                  </Button>
                  <Button color='inherit' size='small' component={NavLink} to='/contact'>
                    Contact
                  </Button>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Tooltip>
      {drawerOpen && <DrawerNavbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />}
    </Box>
  )
}
