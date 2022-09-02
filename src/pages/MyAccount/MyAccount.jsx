import { Camera, Person, Save } from '@mui/icons-material'
import { Avatar, Box, Button, Sheet, Typography } from '@mui/joy'
import { Fab, InputBase } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const MyAccount = () => {
  const { userData } = useSelector((store) => store.user)
  const { name, picture } = userData
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState({ formName: userData.name, formEmail: userData.email })
  const { formName, formEmail } = formData
  const [changeDetails, setChangeDetails] = useState(false)

  //   const hasChange = displayName !== name || photoURL !== picture
  //   const hasChange = displayName !== name
  const handleChangeInput = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }
  const handleChange = () => {
    setChangeDetails((prevState) => !prevState)
  }
  //   const handleSave = async (e) => {
  //     console.log(e)
  //     // Look for update function in my firebase hook
  //     // updateAuth({ ...auth, displayName, photoURL })
  //   }
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} mt={20}>
      <Sheet
        elevation={1}
        sx={{
          position: 'relative',
          borderRadius: 20,
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          alignItems: 'center',
          maxHeight: 280,
          width: 400
        }}>
        {/* <Fab
          size='medium'
          style={{ position: 'absolute', bottom: 40, right: -16 }}
          // onClick={openDeleteDialog}
          color='secondary'
          aria-label='delete'>
          <Delete />
        </Fab> */}
        <Fab
          // onClick={() => setImageDialogOpen(true)}
          style={{
            position: 'absolute',
            zIndex: 99,
            top: 30,
            marginRight: -60
          }}
          color='primary'
          aria-label='save'
          size='small'>
          <Camera />
        </Fab>
        {picture && (
          <Avatar style={{ width: 100, height: 100, marginTop: -40 }} alt='User Picture' src={picture} />
        )}
        {!picture && (
          <Avatar style={{ width: 100, height: 100, marginTop: -40 }} alt='User Picture'>
            {name ? name[0].toUpperCase() : <Person />}
            <Person />
          </Avatar>
        )}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'start',
            flexDirection: 'column'
          }}
          mt={0}
          mb={3}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              maxWidth: 400,
              width: 350
            }}>
            <Typography level='body2'>Personal Details</Typography>
            <Button onClick={handleChange} color='success' variant='plain'>
              {changeDetails ? <Save color='primary' /> : 'Change'}
            </Button>
          </Box>

          <InputBase
            sx={{ margin: 1 }}
            id='name'
            disabled={!changeDetails}
            value={formName}
            onChange={handleChangeInput}
            inputProps={{
              'aria-label': 'naked',
              style: {
                width: 250,
                backgroundColor: changeDetails ? 'var(--mui-palette-primary-50)' : '',
                fontSize: 18,
                fontWeight: '800'
              }
            }}
          />
          <InputBase
            sx={{ margin: 1 }}
            id='email'
            disabled={!changeDetails}
            value={formEmail}
            onChange={handleChangeInput}
            inputProps={{
              'aria-label': 'naked',
              style: {
                backgroundColor: changeDetails ? 'var(--mui-palette-primary-50)' : '',

                width: 250,
                fontSize: 18,
                fontWeight: '500'
              }
            }}
          />
        </Box>
        {/* <Box sx={{ width: 'inherit', display: 'flex', alignItems: 'flex-end', justifyContent: 'end' }} mr={5}>
          <Zoom in={hasChange}>
          <Fab onClick={handleSave} size='small' color='primary' aria-label='save'>
            <Save sx={{ alignContent: 'end' }} />
          </Fab>
        </Box>
        </Zoom> */}
      </Sheet>
    </Box>
  )
}
