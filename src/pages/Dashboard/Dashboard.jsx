/* eslint-disable no-unused-vars */
import {
  Avatar,
  Box,
  Modal,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography
} from '@mui/material'
import Divider from '@mui/material/Divider'
import { useEffect, useState } from 'react'
import { Loading } from 'src/component/Loading/Loading'
import { useFirestore } from 'src/Hooks/useFirestore'

import IconButton from '@mui/material/IconButton'

import DeleteIcon from '@mui/icons-material/Delete'

import EditIcon from '@mui/icons-material/Edit'
import { formatDistanceToNow } from 'date-fns'
import { ModalUser } from 'src/component/ModalUser/ModalUser'
import styled from '@emotion/styled'
import { formatDate } from 'src/utils/formatTime'
import { CardDashboard } from 'src/component/CardDashboard/CardDashboard'
import { Users } from './Users'

const StyleModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fcfffc'
})
const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px'
})

export const Dashboard = () => {
  const { loading, data, error, getData, addData, deleteData, updateData } = useFirestore()
  const [open, setOpen] = useState(false)

  const [text, setText] = useState('')
  const [idEdit, setIdEdit] = useState()

  useEffect(() => {
    getData('users')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (idEdit) {
      await updateData('users', idEdit, text)
      setIdEdit('')
      setText('')

      return
    }
    await addData(text, 'users')

    setText('')
  }
  const handleDelete = async (nanoid) => {
    await deleteData('users', nanoid)
  }

  const handleEdit = async (row) => {
    setText(row.displayName)
    setIdEdit(true)
    setOpen(true)
  }
  if (loading.getData) return <Loading />
  if (error) return <div>{error}</div>

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100vh'
      }}>
      <Box
        sx={{
          margin: '10px',
          width: '750px',
          minHeight: 2
        }}>
        <Paper sx={{ mb: 1 }}>
          <TableContainer
            component={Paper}
            sx={{ width: '750px', alignItems: 'center', borderRadius: '10px 10px' }}>
            <Table size='small' aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ fontSize: 24, fontWeight: 900, borderBottom: '0' }}
                    fontSize={4}
                    align='center'
                    colSpan={5}>
                    Members
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Created</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0, maxWidth: '200px' } }}>
                    <TableCell component='th' scope='row'>
                      {row.displayName}
                    </TableCell>
                    <TableCell align='left'>{row.email}</TableCell>
                    <TableCell align='left'>{row.online ? 'Online' : 'Offline'}</TableCell>
                    <TableCell align='left'>{formatDate(row.timestamp)}</TableCell>

                    <TableCell
                      align='right'
                      sx={{
                        mr: 0,
                        ml: 0,
                        p: 0,
                        '& .MuiIconButton-sizeMedium': { padding: 0 }
                      }}>
                      <IconButton onClick={() => handleDelete(row)}>
                        <DeleteIcon />
                      </IconButton>
                      <IconButton size='small' onClick={() => handleEdit(row)}>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <ModalUser />
      </Box>
      <StyleModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box
          component='form'
          width={400}
          height={280}
          p={3}
          borderRadius={5}
          sx={{
            backgroundColor: localStorage.getItem('theme') !== 'light' ? 'white' : '#051622'
          }}>
          <Typography id='modal-modal-title' variant='h6' textAlign='center'>
            Edit User
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src='https://avatars.dicebear.com/4.5/api/avataaars/.svg?eyebrow[]=up&mouth[]=smile'
            />
            <Typography id='modal-modal-title' variant='span' fontWeight={500} textAlign='center'>
              Wilmer
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id='standard-static'
            label='Name'
            placeholder='Enter Full name*'
            variant='standard'
            fullWidth
            type='text'
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <Stack direction='row' gap={1} mt={2} mb={3}></Stack>
        </Box>
      </StyleModal>
      {/* <CardDashboard /> */}
      <Users />
    </Box>
  )
}

// return (
//   <div>
//     <h1>Users:</h1>

//     <div>
//       {data.map((item) => (
//         <div key={item.id}>
//           <p>{item.displayName}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// )
