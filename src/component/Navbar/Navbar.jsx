import Avatar from '@mui/material/Avatar'
import { googleLogout } from '@react-oauth/google'
import { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useTheme
} from '@mui/material'
import { Link } from 'react-router-dom'
import { ColorModeContext } from 'src/context/ThemeContext'
import { searchInputUser, signOutAction } from 'src/redux/userDuck'
import './Navbar.css'

export const Navbar = () => {
  const [inputValue, setInputValue] = useState('tech')

  const dispatch = useDispatch()

  const { isSignedIn, userData } = useSelector((store) => store.user2)
  // eslint-disable-next-line no-unused-vars
  const logout = (response) => {
    googleLogout()
    dispatch(signOutAction())
  }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(searchInputUser(inputValue))
  }
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <AppBar position='static'>
      <Container maxWidth='xl' sx={{ backgroundColor: '#004170' }}>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: 'flex',
              fontWeight: 700,
              alignItems: 'center',
              color: 'inherit',
              textDecoration: 'none'
            }}>
            Will Blogs
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color='inherit'>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          {isSignedIn && (
            <div className='blog__search'>
              <InputBase
                sx={{ ml: 1, flex: 1, color: 'inherit' }}
                placeholder='Search for a blogs'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                inputProps={{ 'aria-label': 'Search for a blog' }}
              />
              <Button color='inherit' onClick={handleClick} size='small'>
                Search
              </Button>
            </div>
          )}

          {isSignedIn ? (
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
              <Avatar
                src={userData.picture}
                alt={userData.name}
                sx={{ p: 0, width: '45px', height: '45px' }}
              />
              <Typography variant='h6' sx={{ mx: 1, px: 1 }}>
                {userData.name}
              </Typography>
              <Button
                onClick={logout}
                color='inherit'
                size='small'
                sx={{ m: 0, p: 0 }}
                component={Link}
                to='/'>
                Logout
              </Button>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <Button
                color='inherit'
                size='small'
                sx={{ display: isSignedIn && 'none' }}
                component={Link}
                to='/login'>
                Login
              </Button>
              <Button
                color='inherit'
                size='small'
                sx={{ display: isSignedIn && 'none' }}
                component={Link}
                to='/sign-in'>
                Sign In
              </Button>
              <Button color='inherit' size='small' component={Link} to='/contact'>
                Contact
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
