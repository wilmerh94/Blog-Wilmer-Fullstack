import { useContext, useEffect, useState } from 'react'
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
  Typography
} from '@mui/material'
import { useColorScheme } from '@mui/material/styles'
// @mui/icons
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import MenuIcon from '@mui/icons-material/Menu'
import MoreVertIcon from '@mui/icons-material/MoreVert'
// components
import { Loading } from '../Loading/Loading'
import { DrawerNavbar } from './DrawerNavbar'
import { MenuNavbar } from './MenuNavbar'
// import { extendTheme } from '@mui/joy'

// ----------------------------------------------------------------------

export const Navbar = () => {
  const { mode, setMode } = useColorScheme()
  // console.log(extendTheme().cssVarPrefix, mode)
  // console.log(useColorScheme())
  const [mounted, setMounted] = useState(false)
  const colorMode = useContext(ColorModeContext)
  const { loading } = useFirebase()

  const { isSignedIn } = useSelector((store) => store.user)

  // Drawer
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(null)
  const [anchor, setAnchor] = useState(null)

  const handleTheme = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
    console.log(setMode)
    // setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))

    colorMode.toggleColorMode()
  }

  const handleProfileOpen = (e) => {
    setProfileOpen((prevMode) => (prevMode === true ? false : true))
    setAnchor(e.currentTarget)
    // setProfileOpen((prevOpen) => (prevOpen === true ? false : true))
  }

  const onDrawerButtonClick = (e) => {
    e.preventDefault()
    setDrawerOpen((prevMode) => (prevMode === true ? false : true))
  }

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
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
              backdropFilter: 'blur(10px)'
            }}>
            <Toolbar
              disableGutters
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <IconButton
                  color='primary'
                  edge='start'
                  sx={{ mr: 0 }}
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
                    color: 'text.tertiary',
                    textDecoration: 'none'
                  }}>
                  Will Blogs
                </Typography>
                <IconButton sx={{ ml: 1 }} onClick={handleTheme} color='primary'>
                  {mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Box>
              {isSignedIn ? (
                <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                  <IconButton
                    color='primary'
                    aria-label='show more'
                    aria-haspopup='true'
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleProfileOpen}>
                    <Badge
                      badgeContent={17}
                      color='secondary'
                      sx={{ '& .MuiBadge-badge': { fontSize: '0.75rem' } }}>
                      <MoreVertIcon />
                    </Badge>

                    {profileOpen && <MenuNavbar profileOpen={profileOpen} anchor={anchor} />}
                  </IconButton>
                </Box>
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                  <Button size='small' sx={{ display: isSignedIn && 'none' }} component={NavLink} to='/login'>
                    Login
                  </Button>
                  <Button
                    size='small'
                    sx={{ display: isSignedIn && 'none' }}
                    component={NavLink}
                    to='/sign-up'>
                    Sign up
                  </Button>
                  <Button size='small' component={NavLink} to='/contact'>
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
