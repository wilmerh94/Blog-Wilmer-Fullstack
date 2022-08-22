import Avatar from '@mui/material/Avatar'
import { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import SearchIcon from '@mui/icons-material/Search'
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Toolbar,
  Typography
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useFirebase } from 'src/context/FirebaseContext'
import { ColorModeContext } from 'src/context/ThemeContext'
import { searchInputUser, signOutAction } from 'src/redux/userDuck'
import { Loading } from '../Loading/Loading'
import './Navbar.css'

export const Navbar = () => {
  const [inputValue, setInputValue] = useState('tech')
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
    dispatch(searchInputUser(inputValue))
  }
  const colorMode = useContext(ColorModeContext)
  if (loading) return <Loading />
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
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
            {localStorage.getItem('theme') === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          {user ? (
            <>
              <div className='blog__search'>
                <InputBase
                  sx={{ ml: 1, flex: 1, color: 'inherit' }}
                  placeholder='Search for a blogs'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  inputProps={{ 'aria-label': 'Search for a blog' }}
                />
                <IconButton color='inherit' onClick={handleClick} size='small'>
                  <SearchIcon />
                </IconButton>
              </div>

              <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                <Avatar
                  src={user.photoURL}
                  alt={user.displayName}
                  sx={{ p: 0, width: '45px', height: '45px' }}
                />
                <Typography variant='h6' sx={{ mx: 1, px: 1 }}>
                  {user.displayName}
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
            </>
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
