import Avatar from '@mui/material/Avatar'
import { googleLogout } from '@react-oauth/google'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectSignedIn,
  selectUserData,
  setInput,
  setSignedIn,
  setUserData
} from 'src/features/userSlice'

import { AppBar, Box, Button, Container, InputBase, Toolbar, Typography } from '@mui/material'
import './Navbar.css'
export const Navbar = () => {
  const [inputValue, setInputValue] = useState('tech')
  const isSignedIn = useSelector(selectSignedIn)
  const userData = useSelector(selectUserData)

  const dispatch = useDispatch()
  // eslint-disable-next-line no-unused-vars
  const logout = (response) => {
    googleLogout()
    dispatch(setSignedIn(false))
    dispatch(setUserData(null))
  }
  const handleClick = (e) => {
    e.preventDefault()
    dispatch(setInput(inputValue))
  }

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: 'flex',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none'
            }}>
            Will Blogs 💬
          </Typography>

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
                src={userData?.picture}
                alt={userData?.name}
                sx={{ p: 0, width: '45px', height: '45px' }}
              />
              <Typography variant='h6' sx={{ mx: 1, px: 1 }}>
                {userData?.given_name}
              </Typography>
              <Button onClick={logout} color='inherit' size='small' sx={{ m: 0, p: 0 }}>
                Logout
              </Button>
            </Box>
          ) : (
            <Typography variant='h6' component='div' sx={{ mx: 1 }}>
              User not available 😞
            </Typography>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
