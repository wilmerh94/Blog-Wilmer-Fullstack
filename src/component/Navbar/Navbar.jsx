import { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import MenuIcon from '@mui/icons-material/Menu'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFirebase } from 'src/context/FirebaseContext'
import { ColorModeContext } from 'src/context/ThemeContext'
import { searchInputUser, signOutAction } from 'src/redux/userDuck'
import { Loading } from '../Loading/Loading'
import { DrawerNavbar } from './DrawerNavbar'
import { MenuNavbar } from './MenuNavbar'
import './Navbar.css'
export const Navbar = () => {
  const navigate = useNavigate()
  // Drawer

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(null)
  const [anchor, setAnchor] = useState(null)

  const handleProfileOpen = (e) => {
    // setProfileOpen((prevOpen) => (prevOpen === true ? false : true))

    setProfileOpen((prevMode) => (prevMode === true ? false : true))
    setAnchor(e.currentTarget)
  }

  const onDrawerButtonClick = (e) => {
    e.preventDefault()
    setDrawerOpen((prevMode) => (prevMode === true ? false : true))
  }

  const [inputValue, setInputValue] = useState('')
  const { user, loading, signOutUserFB } = useFirebase()

  const dispatch = useDispatch()

  const { isSignedIn } = useSelector((store) => store.user)
  // eslint-disable-next-line no-unused-vars
  const logout = () => {
    signOutUserFB()
    dispatch(signOutAction())
  }

  const handleClick = (e) => {
    e.preventDefault()
    navigate('/blogs')
    dispatch(searchInputUser(inputValue))
  }
  const colorMode = useContext(ColorModeContext)
  if (loading) return <Loading />
  return (
    <Tooltip title={`<AppBar color="primary">`} placement='left' arrow>
      <AppBar position='static'>
        <Container maxWidth='xl'>
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
                {drawerOpen && <DrawerNavbar drawerOpen={drawerOpen} />}
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
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color='inherit'>
                  {localStorage.getItem('theme') === 'light' ? (
                    <Brightness7Icon />
                  ) : (
                    <Brightness4Icon />
                  )}
                </IconButton>
              </Typography>
            </Box>
            {user ? (
              <>
                <div className='blog__search'>
                  <InputBase
                    sx={{ ml: 1, flex: 1, color: 'inherit' }}
                    placeholder='Search for a blogs'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    inputProps={{ 'aria-label': 'Search' }}
                  />
                  <IconButton color='inherit' onClick={handleClick} size='small'>
                    <SearchIcon />
                  </IconButton>
                </div>

                <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                  <Button
                    onClick={logout}
                    color='inherit'
                    size='small'
                    sx={{ m: 0, p: 0 }}
                    component={NavLink}
                    to='/'>
                    Logout
                  </Button>
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
              </>
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
                  to='/sign-in'>
                  Sign In
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
  )
}
